import os
from playwright.sync_api import sync_playwright

BASE_DIR = r"c:\Users\LENOVO\Downloads\PDF CATLOG\website"
OUT_DIR = os.path.join(BASE_DIR, "screenshots")
os.makedirs(OUT_DIR, exist_ok=True)

def run_tests():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1366, "height": 900})

        print("\n--- [TEST 1] Loading Storefront ---")
        page.goto("http://localhost:8000/index.html")
        page.wait_for_selector(".product-card")
        print("[PASS] Storefront loaded.")

        print("\n--- [TEST 2] Testing Admin Authentication ---")
        # 1. Click Admin Portal
        page.click(".fk-admin-badge-btn")
        page.wait_for_selector("#adminLoginModal.active")
        print("[PASS] Admin Login Modal opened.")

        # 2. Try wrong credentials
        page.fill("#adminUsernameInput", "wrong_admin")
        page.fill("#adminPasswordInput", "wrong_pass")
        page.click("button:has-text('Authenticate & Enter Dashboard')")
        page.wait_for_timeout(400)
        err_text = page.locator("#adminLoginError").inner_text()
        assert "Invalid username" in err_text
        print("[PASS] Rejected invalid credentials.")

        # 3. Enter exact correct credentials:
        # User: SPR SIRI DHANYA, Password: SPR SIRI DHANYA @2026
        page.fill("#adminUsernameInput", "SPR SIRI DHANYA")
        page.fill("#adminPasswordInput", "SPR SIRI DHANYA @2026")
        page.click("button:has-text('Authenticate & Enter Dashboard')")
        page.wait_for_selector("#adminModal.active")
        print("[PASS] Successfully authenticated with 'SPR SIRI DHANYA' / 'SPR SIRI DHANYA @2026'!")
        page.screenshot(path=os.path.join(OUT_DIR, "test_admin_authenticated.png"))

        print("\n--- [TEST 3] Testing Admin Tabs (QR Generator & Knowledge Base) ---")
        # Tab 2: QR Generator
        page.click("#tabBtnQr")
        page.wait_for_timeout(600)
        assert page.is_visible("#adminTabQrContent")
        print("[PASS] Admin QR Code Generator & Downloads tab opened.")
        page.screenshot(path=os.path.join(OUT_DIR, "test_admin_qr_tab.png"))

        # Tab 3: Knowledge Base & RAG
        page.click("#tabBtnKnowledge")
        page.wait_for_timeout(500)
        assert page.is_visible("#adminTabKnowledgeContent")
        
        # Test QA Sandbox in Knowledge Base
        page.fill("#kbTestQueryInput", "డయాబెటిస్‌కు ఏది మంచిది?")
        page.click("button:has-text('Test Answer')")
        page.wait_for_timeout(600)
        test_res = page.locator("#kbTestResultBox").inner_text()
        assert "కొర్ర" in test_res or "Foxtail" in test_res
        print(f"[PASS] Knowledge Base RAG Sandbox verified: {test_res[:60].encode('ascii', 'ignore').decode()}...")
        page.screenshot(path=os.path.join(OUT_DIR, "test_admin_knowledge_tab.png"))

        # Close Admin
        page.click("#adminModal .modal-close")
        page.wait_for_timeout(400)

        print("\n--- [TEST 4] Testing Official PDF Catalogue Modal ---")
        page.click(".pdf-nav-btn")
        page.wait_for_selector("#pdfCatalogueModal.active")
        pdf_html = page.locator(".pdf-editions-grid").inner_text()
        assert "Telugu" in pdf_html and "English" in pdf_html and "Hindi" in pdf_html
        print("[PASS] Official 8-Page PDF Catalogue modal verified (Telugu, English, Hindi).")
        page.screenshot(path=os.path.join(OUT_DIR, "test_pdf_catalogues.png"))
        page.click("#pdfCatalogueModal .modal-close")
        page.wait_for_timeout(300)

        print("\n--- [TEST 5] Testing Customer QR Scanner Modal ---")
        page.click(".qr-nav-btn")
        page.wait_for_selector("#qrScannerModal.active")
        assert page.is_visible(".qr-viewfinder-wrap")
        print("[PASS] QR Scanner camera viewfinder & laser UI active.")
        page.screenshot(path=os.path.join(OUT_DIR, "test_qr_scanner.png"))
        page.click("#qrScannerModal .modal-close")
        page.wait_for_timeout(300)

        print("\n--- [TEST 6] Testing Universal AI Voice Agent ---")
        page.click(".voice-nav-btn")
        page.wait_for_selector("#voiceAgentModal.active")
        print("[PASS] Universal AI Voice Agent modal active.")
        
        # Test sample query: "Price of 5-in-1 combo?"
        page.click("button:has-text('Price of 5-in-1 combo?')")
        page.wait_for_timeout(600)
        voice_ans = page.locator("#voiceBotAnswer").inner_text()
        assert "629" in voice_ans
        print(f"[PASS] Voice Agent answered price query: {voice_ans[:70].encode('ascii', 'ignore').decode()}...")
        page.screenshot(path=os.path.join(OUT_DIR, "test_voice_agent.png"))
        page.click("#voiceAgentModal .modal-close")
        page.wait_for_timeout(300)

        print("\n--- [TEST 7] Verifying Cash on Delivery (COD) Removed from Checkout ---")
        page.locator("#prod-card-1 .btn-add-cart").click()
        page.wait_for_timeout(300)
        page.click(".fk-cart-btn")
        page.wait_for_selector("#cartDrawer.active")
        page.click(".btn-checkout")
        page.wait_for_selector("#checkoutModal.active")

        # Step 1 -> Step 2
        page.click("button:has-text('DELIVER HERE & CONTINUE')")
        page.wait_for_timeout(400)
        # Step 2 -> Step 3
        page.click("button:has-text('CONTINUE TO PAYMENT')")
        page.wait_for_timeout(400)

        # Check Payment Options
        step3_text = page.locator("#checkoutStep3").inner_text()
        assert "Cash on Delivery" not in step3_text, "COD must be completely removed!"
        assert "UPI" in step3_text
        assert "Credit / Debit / ATM Card" in step3_text
        print("[PASS] Cash on Delivery (COD) is completely removed. Only 100% online payments enabled!")
        page.screenshot(path=os.path.join(OUT_DIR, "test_checkout_no_cod.png"))

        # Complete Order via UPI
        page.click("#payNowBtn")
        page.wait_for_selector("#orderSuccessModal.active")
        
        # Verify WhatsApp links targeting +91 94413 93817 and 9492468817
        l1 = page.get_attribute("#successWhatsappBtn1", "href")
        l2 = page.get_attribute("#successWhatsappBtn2", "href")
        assert "9441393817" in l1
        assert "9492468817" in l2
        print("[PASS] Order placed and dual-line WhatsApp dispatch notifications verified!")

        print("\n=======================================================")
        print("ALL NEW FEATURES VERIFIED SUCCESSFULLY WITH 100% PASS!")
        print("=======================================================")
        browser.close()

if __name__ == "__main__":
    run_tests()
