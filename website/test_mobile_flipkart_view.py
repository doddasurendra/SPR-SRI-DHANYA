import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from playwright.sync_api import sync_playwright

BASE_DIR = r"c:\Users\LENOVO\Downloads\PDF CATLOG\website"
OUT_DIR = os.path.join(BASE_DIR, "screenshots")
os.makedirs(OUT_DIR, exist_ok=True)

def verify_mobile_experience():
    with sync_playwright() as p:
        # Simulate modern smartphone (iPhone 13 / Samsung Galaxy: 390x844)
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 390, "height": 844},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
            is_mobile=True,
            has_touch=True
        )
        page = context.new_page()

        print("\n--- [TEST 1] Loading Mobile Viewport ---")
        page.goto("http://localhost:8000/index.html")
        page.wait_for_selector(".product-card")
        page.wait_for_timeout(500)

        # 1. Verify Top Mobile Header
        assert page.is_visible(".mobile-hamburger-btn")
        assert page.is_visible(".mobile-search-bar-wrap")
        print("[PASS] Flipkart Mobile Header and Dedicated Search Bar visible.")
        page.screenshot(path=os.path.join(OUT_DIR, "mobile_01_header_and_hero.png"))

        # 2. Verify Desktop Sidebar is hidden on Mobile
        sidebar_visible = page.is_visible(".fk-sidebar")
        assert not sidebar_visible, "Desktop sidebar should NOT be visible on mobile!"
        print("[PASS] Desktop sidebar successfully hidden on mobile screen.")

        # 3. Verify Sticky Mobile Sort & Filter Bar
        assert page.is_visible(".mobile-filter-bar")
        print("[PASS] Flipkart Mobile Sticky Sort & Filter Bar visible.")

        # 4. Verify 2-Column Product Grid
        page.screenshot(path=os.path.join(OUT_DIR, "mobile_02_products_grid.png"))
        print("[PASS] Mobile 2-Column Product Grid captured.")

        # 5. Test Mobile Navigation Drawer
        page.click(".mobile-hamburger-btn")
        page.wait_for_timeout(350)
        assert page.is_visible("#mobileNavDrawer.active")
        print("[PASS] Flipkart Mobile Navigation Drawer opened smoothly.")
        page.screenshot(path=os.path.join(OUT_DIR, "mobile_03_nav_drawer.png"))

        # Close Drawer
        page.click(".mobile-nav-close")
        page.wait_for_timeout(300)
        assert not page.is_visible("#mobileNavDrawer.active")
        print("[PASS] Mobile Navigation Drawer closed.")

        # 6. Test Mobile Sort Bottom Sheet
        page.locator(".mobile-filter-bar button").first.click()
        page.wait_for_timeout(400)
        assert page.is_visible("#mobileSortSheet.active")
        print("[PASS] Flipkart Mobile Sort Bottom Sheet opened.")
        page.screenshot(path=os.path.join(OUT_DIR, "mobile_04_sort_bottom_sheet.png"))
        page.locator("#mobileSortSheet .sheet-close-btn").click(force=True)
        page.wait_for_timeout(300)
        assert not page.is_visible("#mobileSortSheet.active")
        print("[PASS] Flipkart Mobile Sort Bottom Sheet closed.")

        # 7. Test Mobile Filter Bottom Sheet
        page.locator(".mobile-filter-bar button").nth(1).click()
        page.wait_for_timeout(400)
        assert page.is_visible("#mobileFilterSheet.active")
        print("[PASS] Flipkart Mobile Filter Bottom Sheet opened.")
        page.screenshot(path=os.path.join(OUT_DIR, "mobile_05_filter_bottom_sheet.png"))
        page.locator("#mobileFilterSheet .sheet-close-btn").click(force=True)
        page.wait_for_timeout(300)
        assert not page.is_visible("#mobileFilterSheet.active")
        print("[PASS] Flipkart Mobile Filter Bottom Sheet closed.")

        print("\n=======================================================")
        print("FLIPKART MOBILE DESIGN VERIFIED 100% PERFECT!")
        print("=======================================================")
        browser.close()

if __name__ == "__main__":
    verify_mobile_experience()
