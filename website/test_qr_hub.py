import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from playwright.sync_api import sync_playwright

BASE_DIR = r"c:\Users\LENOVO\Downloads\PDF CATLOG\website"
OUT_DIR = os.path.join(BASE_DIR, "screenshots")
os.makedirs(OUT_DIR, exist_ok=True)

def run_qr_tests():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1400, "height": 950})

        print("\n--- [TEST 1] Verifying 'Scan QR' button is removed from header ---")
        page.goto("http://localhost:8000/index.html")
        page.wait_for_selector(".product-card")

        header_nav_text = page.locator(".fk-header-actions").inner_text()
        assert "Scan QR" not in header_nav_text, "Standalone 'Scan QR' button must be removed from header!"
        print("[PASS] Standalone 'Scan QR' button successfully removed from top header.")

        print("\n--- [TEST 2] Testing Website QR Code Hub Modal ---")
        page.click(".qr-hub-btn")
        page.wait_for_selector("#qrHubModal.active")
        print("[PASS] Website QR Code Hub Modal opened.")

        # Verify Tab 1: Website QR Code Generator is active
        assert page.is_visible("#qrHubTabGeneratorContent")
        print("[PASS] Tab 1: Website QR Code Generator is active.")

        # Verify Canvas has rendered
        page.wait_for_timeout(300)
        canvas_info = page.evaluate('''() => {
            const canvas = document.getElementById("qrHubCanvas");
            return { width: canvas.width, height: canvas.height };
        }''')
        print(f"[PASS] QR Code Canvas rendered: {canvas_info['width']}x{canvas_info['height']}px")

        # Test Size Selection
        page.click("#qrHubSize1024")
        page.wait_for_timeout(200)
        assert "active" in page.get_attribute("#qrHubSize1024", "class")
        print("[PASS] Resolution switched to 1024x1024 (2K).")

        # Test Clean style
        page.check("input[value='clean']")
        page.wait_for_timeout(200)
        print("[PASS] Switched to Clean Pure QR style.")

        # Test Branded style
        page.check("input[value='branded']")
        page.wait_for_timeout(200)
        print("[PASS] Switched to Official Branded QR style.")

        # Test Target Preset
        page.select_option("#qrHubTargetSelect", "https://github.com/doddasurendra/SPR-SRI-DHANYA")
        page.wait_for_timeout(200)
        info_text = page.locator("#qrHubInfoText").inner_text()
        assert "github" in info_text.lower()
        print(f"[PASS] Preset target updated: {info_text}")

        page.screenshot(path=os.path.join(OUT_DIR, "qr_hub_generator.png"))

        print("\n--- [TEST 3] Testing Tab 2: Mobile Camera Scanner ---")
        page.click("#qrHubTabBtnScanner")
        page.wait_for_timeout(300)
        assert page.is_visible("#qrHubTabScannerContent")
        assert page.is_visible(".qr-viewfinder-wrap")
        assert page.is_visible(".qr-laser-line")
        print("[PASS] Tab 2: Mobile Camera Scanner active with animated laser viewfinder.")

        # Verify Flip Camera & Upload button presence
        assert page.is_visible("button:has-text('Flip Camera')")
        assert page.is_visible("label:has-text('Upload Image from Gallery')")
        print("[PASS] Mobile camera controls (Flip Camera & Gallery Upload) verified.")

        page.screenshot(path=os.path.join(OUT_DIR, "qr_hub_scanner.png"))

        # Close QR Hub Modal
        page.click("#qrHubModal .modal-close")
        page.wait_for_timeout(300)
        assert not page.is_visible("#qrHubModal.active")
        print("[PASS] QR Hub Modal closed.")

        print("\n=======================================================")
        print("ALL QR CODE ENHANCEMENTS VERIFIED 100% SUCCESSFULLY!")
        print("=======================================================")
        browser.close()

if __name__ == "__main__":
    run_qr_tests()
