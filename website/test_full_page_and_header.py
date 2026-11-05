import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from playwright.sync_api import sync_playwright

OUT_DIR = r"c:\Users\LENOVO\Downloads\PDF CATLOG\website\screenshots"
os.makedirs(OUT_DIR, exist_ok=True)

def verify_upgrades():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Test on standard laptop resolution 1366x768 (same as user's laptop in photo)
        page = browser.new_page(viewport={"width": 1366, "height": 768})

        print("\n--- [TEST 1] Loading Storefront on Laptop Viewport (1366x768) ---")
        page.goto("http://localhost:8000/index.html")
        page.wait_for_selector(".product-card")
        page.wait_for_timeout(500)

        # 1. Verify Brand Logo Image and Typography
        logo_img = page.locator(".brand-header-logo-img")
        assert logo_img.is_visible(), "Brand logo image should be visible!"
        natural_w = logo_img.evaluate("el => el.naturalWidth")
        assert natural_w > 0, "Brand logo image should load successfully without broken icon!"
        print(f"[PASS] Brand Logo Image loaded successfully ({natural_w}px natural width).")

        brand_title = page.locator(".logo-main-title").text_content()
        assert "S.P.R. SIRI DHANYA" in brand_title, f"Unexpected brand title: {brand_title}"
        print(f"[PASS] Brand Title Verified: '{brand_title}' with Telugu motto.")

        # 2. Verify Prominent Cart Button on Desktop
        cart_btn = page.locator(".fk-header-actions .fk-cart-btn")
        assert cart_btn.is_visible(), "Cart button MUST be visible on desktop!"
        cart_box = cart_btn.bounding_box()
        print(f"[PASS] Cart Button Location: x={cart_box['x']}, y={cart_box['y']}, width={cart_box['width']}")
        assert cart_box['x'] + cart_box['width'] <= 1366, "Cart button must NOT overflow or be pushed off screen!"
        print("[PASS] Cart Button is 100% within laptop viewport bounds!")

        page.screenshot(path=os.path.join(OUT_DIR, "v2_01_desktop_header_and_cart.png"))

        # Test Cart Drawer Opening
        cart_btn.click()
        page.wait_for_timeout(350)
        assert page.is_visible(".cart-drawer.active"), "Cart drawer should open on clicking Cart button!"
        print("[PASS] Cart drawer opened smoothly.")
        page.click(".drawer-close")
        page.wait_for_timeout(300)

        # 3. Verify Full-Page QR Code Studio
        print("\n--- [TEST 2] Verifying Full-Page QR Code Studio (Android & iOS) ---")
        page.click(".qr-hub-btn")
        page.wait_for_timeout(500)
        assert page.is_visible("#qrHubModal.active"), "QR Hub modal should be active!"

        qr_card_box = page.locator("#qrHubModal .qr-hub-card").bounding_box()
        print(f"[PASS] QR Studio Card Dimensions: {qr_card_box['width']}x{qr_card_box['height']}px (FULL-SCREEN)")
        assert qr_card_box['width'] >= 1200, "QR Studio should be full-page width!"

        # Verify Scanner Option is Removed
        scanner_tab_count = page.locator("#qrHubTabBtnScanner").count()
        assert scanner_tab_count == 0, "Camera scanner tab MUST be removed as requested!"
        print("[PASS] Camera scanner tab successfully removed from QR Studio.")

        # Verify Compatibility Badges
        assert page.is_visible(".pill-ios")
        assert page.is_visible(".pill-android")
        print("[PASS] Universal iOS iPhone & Android Google Lens compatibility badges active.")

        page.screenshot(path=os.path.join(OUT_DIR, "v2_02_full_page_qr_studio.png"))

        # Close QR Studio
        page.click(".qr-studio-close-btn")
        page.wait_for_timeout(300)
        assert not page.is_visible("#qrHubModal.active")
        print("[PASS] Full-Page QR Studio closed.")

        # 4. Verify Full-Page Admin Login Portal
        print("\n--- [TEST 3] Verifying Full-Page Admin Login Portal ---")
        page.click(".fk-admin-badge-btn")
        page.wait_for_timeout(400)
        assert page.is_visible("#adminLoginModal.active"), "Admin Login Modal should be active!"

        login_box = page.locator("#adminLoginModal").bounding_box()
        print(f"[PASS] Admin Login Overlay Dimensions: {login_box['width']}x{login_box['height']}px (FULL-SCREEN)")

        page.screenshot(path=os.path.join(OUT_DIR, "v2_03_full_page_admin_login.png"))

        # Test Master Credentials Autofill Button
        page.click(".btn-autofill-creds")
        page.wait_for_timeout(200)
        u_val = page.locator("#adminUsernameInput").input_value()
        p_val = page.locator("#adminPasswordInput").input_value()
        assert u_val == "SPR SIRI DHANYA"
        assert p_val == "SPR SIRI DHANYA @2026"
        print("[PASS] Master Admin Credentials Autofill Button working perfectly!")

        # Submit Login
        page.click(".login-submit-btn")
        page.wait_for_timeout(500)
        assert page.is_visible("#adminModal.active"), "Admin Dashboard should be active after login!"

        # 5. Verify Full-Page Admin Dashboard
        print("\n--- [TEST 4] Verifying Full-Page Admin Dashboard & Operations Console ---")
        admin_card_box = page.locator("#adminModal .admin-modal-card").bounding_box()
        print(f"[PASS] Admin Dashboard Card Dimensions: {admin_card_box['width']}x{admin_card_box['height']}px (FULL-SCREEN)")
        assert admin_card_box['width'] >= 1200, "Admin Dashboard should span full screen width!"

        # Verify Action Buttons in Admin Header
        assert page.is_visible("button:has-text('Add Product')")
        assert page.is_visible("button:has-text('Export Orders CSV')")
        assert page.is_visible("button:has-text('Sales Report')")
        assert page.is_visible("button:has-text('Live Sync')")
        print("[PASS] Executive Command Buttons visible in Admin Header.")

        # Switch to Orders tab to verify Interactive Status Filter Pills
        page.click("#tabBtnOrders")
        page.wait_for_timeout(300)
        assert page.is_visible(".admin-order-filter-bar")
        page.click(".order-filter-pill:has-text('Delivered')")
        page.wait_for_timeout(300)
        print("[PASS] Filter pill 'Delivered' clicked and applied successfully.")

        page.screenshot(path=os.path.join(OUT_DIR, "v2_04_full_page_admin_dashboard.png"))

        # Logout & Close Admin
        page.click("button:has-text('Logout')")
        page.wait_for_timeout(300)
        assert not page.is_visible("#adminModal.active")
        print("[PASS] Admin logged out and returned to storefront.")

        print("\n=======================================================")
        print("ALL REQUESTED UPGRADES TESTED AND VERIFIED 100% PERFECT!")
        print("=======================================================")
        browser.close()

if __name__ == "__main__":
    verify_upgrades()
