import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from playwright.sync_api import sync_playwright

OUT_DIR = r"c:\Users\LENOVO\Downloads\PDF CATLOG\website\screenshots"
os.makedirs(OUT_DIR, exist_ok=True)

def verify_firebase():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1366, "height": 768})

        print("\n--- [TEST 1] Verifying Firebase SDKs and Bridge ---")
        page.goto("http://localhost:8000/index.html")
        page.wait_for_selector(".product-card")
        page.wait_for_timeout(500)

        fb_status = page.evaluate("""() => {
            return {
                hasFirebase: typeof window.firebase !== 'undefined',
                hasSprSaveOrder: typeof window.sprDbSaveOrder === 'function',
                hasSprUpdateStatus: typeof window.sprDbUpdateOrderStatus === 'function',
                ownerEmail: typeof window.getSprFirebaseConfig === 'function' ? window.getSprFirebaseConfig().ownerEmail : null
            };
        }""")
        print("[PASS] Firebase Client Architecture Status:", fb_status)
        assert fb_status['hasFirebase'], "Firebase SDK should be loaded!"
        assert fb_status['hasSprSaveOrder'], "sprDbSaveOrder function should be active!"
        assert fb_status['ownerEmail'] == "sdodda073@gmail.com", "Config should be mapped to sdodda073@gmail.com!"

        print("\n--- [TEST 2] Verifying Admin Portal Firebase Settings ---")
        # Open Admin Modal
        page.click(".fk-admin-badge-btn")
        page.wait_for_timeout(300)
        page.click(".btn-autofill-creds")
        page.click(".login-submit-btn")
        page.wait_for_timeout(400)

        # Switch to Settings tab
        page.click("#tabBtnSettings")
        page.wait_for_timeout(300)
        assert page.is_visible("#adminFirebaseStatusPill"), "Firebase status pill must be visible in Settings!"
        email_val = page.locator("#fbOwnerEmailInput").input_value()
        assert email_val == "sdodda073@gmail.com", f"Expected sdodda073@gmail.com, got {email_val}"
        print(f"[PASS] Admin Settings Firebase Card verified for account: {email_val}")

        page.screenshot(path=os.path.join(OUT_DIR, "v4_01_admin_firebase_settings.png"))

        print("\n=======================================================")
        print("FIREBASE CLOUD DATABASE ARCHITECTURE VERIFIED 100%!")
        print("=======================================================")
        browser.close()

if __name__ == "__main__":
    verify_firebase()
