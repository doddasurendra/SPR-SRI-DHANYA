# -*- coding: utf-8 -*-
import sys
import time
from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1400, "height": 900})
        page = context.new_page()

        errors = []
        page.on("pageerror", lambda err: errors.append(f"PageError: {err}"))
        page.on("console", lambda msg: errors.append(f"ConsoleError: {msg.text}") if msg.type == "error" else None)

        print("Navigating to http://localhost:8000...")
        page.goto("http://localhost:8000", wait_until="networkidle")
        time.sleep(1)

        # Check footer address
        footer_text = page.locator(".spr-footer-location-col").inner_text()
        print("--- Footer Location Card ---")
        print(footer_text)
        assert "203/6-1B" in footer_text, "Missing 203/6-1B in footer"
        assert "Flat no 63" in footer_text, "Missing Flat no 63 in footer"
        assert "Sri Sai Balaji Nagar" in footer_text, "Missing Sri Sai Balaji Nagar in footer"
        assert "Santhamaguluru X Road" in footer_text, "Missing Santhamaguluru X Road in footer"
        assert "Kamepalli" in footer_text, "Missing Kamepalli in footer"
        assert "523302" in footer_text, "Missing 523302 in footer"
        assert "16°07'11.5\"N 79°55'25.4\"E" in footer_text, "Missing coordinates in footer"

        # Check footer map iframe
        footer_map_src = page.locator(".spr-footer-location-col iframe").get_attribute("src")
        print("Footer map iframe src:", footer_map_src)
        assert "16.119861,79.923722" in footer_map_src, "Missing coordinates in footer iframe"

        # Check footer contacts
        contact_col_text = page.locator(".spr-footer-col").nth(3).inner_text()
        print("--- Footer Contact Col ---")
        print(contact_col_text)
        assert "8121158817" in contact_col_text, "Missing 8121158817 in footer"
        assert "sprsiridhanya6@gmail.com" in contact_col_text, "Missing email in footer"

        # Screenshot footer location
        page.locator(".spr-heritage-footer").scroll_into_view_if_needed()
        time.sleep(0.5)
        page.screenshot(path="website/screenshots/verified_exact_location_footer.png")
        print("Saved website/screenshots/verified_exact_location_footer.png")

        # Test Contact Modal
        print("\nOpening Contact Modal...")
        page.evaluate("openContactModal()")
        time.sleep(0.5)
        modal_text = page.locator("#contactModal").inner_text()
        print("--- Contact Modal Text ---")
        print(modal_text)
        assert "203/6-1B" in modal_text, "Missing 203/6-1B in modal"
        assert "16°07'11.5\"N 79°55'25.4\"E" in modal_text, "Missing coordinates in modal"
        assert "8121158817" in modal_text, "Missing 8121158817 in modal"
        assert "523302" in modal_text, "Missing 523302 in modal"

        modal_map_src = page.locator("#contactModal iframe").get_attribute("src")
        print("Modal map iframe src:", modal_map_src)
        assert "16.119861,79.923722" in modal_map_src, "Missing coordinates in modal iframe"

        page.locator("#contactModal .modal-card").screenshot(path="website/screenshots/verified_exact_location_contact_modal.png")
        print("Saved website/screenshots/verified_exact_location_contact_modal.png")
        page.evaluate("closeModal('contactModal')")
        time.sleep(0.3)

        # Test Admin Settings & KB
        print("\nOpening Admin Portal...")
        page.evaluate("openAdminModal()")
        time.sleep(0.5)

        # Check Settings Tab
        page.evaluate("switchAdminTab('settings')")
        time.sleep(0.5)
        setting_addr = page.locator("#settingAddress").input_value()
        setting_phone = page.locator("#settingPhone1").input_value()
        print("Admin Setting Address:", setting_addr)
        print("Admin Setting Phone:", setting_phone)
        assert "203/6-1B" in setting_addr, "Missing 203/6-1B in settings"
        assert "523302" in setting_addr, "Missing 523302 in settings"
        assert "8121158817" in setting_phone, "Missing 8121158817 in settings"

        # Screenshot Settings card
        page.locator(".admin-modal-card").screenshot(path="website/screenshots/verified_admin_settings_location.png")
        print("Saved website/screenshots/verified_admin_settings_location.png")

        # Check Knowledge Base Tab
        page.evaluate("switchAdminTab('knowledge')")
        time.sleep(0.5)
        kb1_content = page.evaluate("state.knowledgeBase.find(k => k.id === 'KB-01').content")
        print("--- KB-01 Content ---")
        print(kb1_content)
        assert "203/6-1B" in kb1_content, "Missing 203/6-1B in KB-01"
        assert "16°07'11.5\"N 79°55'25.4\"E" in kb1_content, "Missing coordinates in KB-01"
        assert "523302" in kb1_content, "Missing 523302 in KB-01"
        assert "8121158817" in kb1_content, "Missing 8121158817 in KB-01"
        
        page.locator(".knowledge-table-card").screenshot(path="website/screenshots/verified_admin_knowledge_location.png")
        print("Saved website/screenshots/verified_admin_knowledge_location.png")

        print("\nPage & Console Errors:", errors)
        assert len(errors) == 0, f"Errors found: {errors}"
        print("\nALL LOCATION AND ADDRESS VERIFICATIONS PASSED PERFECTLY!")

        browser.close()

if __name__ == "__main__":
    verify()
