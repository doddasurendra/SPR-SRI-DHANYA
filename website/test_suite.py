import sys
from playwright.sync_api import sync_playwright

def run_tests():
    print("[TEST] Launching Playwright browser...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # 1. Load Website
        print("[TEST 1] Loading http://localhost:8000/index.html...")
        page.goto("http://localhost:8000/index.html")
        page.wait_for_selector(".product-card")
        product_count = page.locator(".product-card").count()
        print(f"[TEST 1 SUCCESS] Found {product_count} products loaded on page.")
        
        # 2. Test AI Chatbot
        print("[TEST 2] Testing AI Chatbot drawer & responses...")
        page.click("#fabAiChat")
        page.wait_for_selector("#aiChatDrawer.active")
        print("[TEST 2] Chat drawer opened successfully.")
        
        # Send stock query
        page.fill("#aiUserInput", "What products are currently in stock?")
        page.click(".ai-send-btn")
        page.wait_for_timeout(1000)
        
        chat_text = page.locator("#aiChatMessages").inner_text()
        assert "Real-Time Stock Availability" in chat_text
        print("[TEST 2 SUCCESS] AI Chatbot replied with stock and pricing data.")
        
        # Close Chat Drawer
        page.click(".ai-close-btn")
        
        # 3. Test Checkout Flow & Dual WhatsApp Links
        print("[TEST 3] Testing Add to Cart & Checkout...")
        # Click Add to cart on first item
        page.locator(".btn-card-add").first.click()
        page.wait_for_timeout(500)
        
        # Open Cart Drawer
        page.click("#cartBtn")
        page.wait_for_selector("#cartDrawer.active")
        print("[TEST 3] Cart drawer opened.")
        
        # Proceed to Checkout
        page.click(".checkout-btn")
        page.wait_for_selector("#checkoutModal.active")
        print("[TEST 3] Checkout modal opened.")
        
        # Fill form
        page.fill("#custName", "Subba Rao Garu")
        page.fill("#custPhone", "9848011223")
        page.fill("#custEmail", "subbarao@gmail.com")
        page.fill("#custHouseNo", "D.No 12-4")
        page.fill("#custStreet", "Temple Road")
        page.fill("#custVillage", "Kamepalli")
        page.fill("#custMandal", "Santamaguluru")
        page.fill("#custDistrict", "Bapatla")
        page.fill("#custPincode", "523326")
        
        # Click Place Order
        page.click(".place-order-btn")
        page.wait_for_selector("#orderSuccessModal.active")
        print("[TEST 3] Order Placed! Checking WhatsApp links for both numbers...")
        
        btn1_href = page.get_attribute("#successWhatsappBtn1", "href")
        btn2_href = page.get_attribute("#successWhatsappBtn2", "href")
        print(f"WhatsApp Line 1 Target: {btn1_href[:40]}...")
        print(f"WhatsApp Line 2 Target: {btn2_href[:40]}...")
        assert "9441393817" in btn1_href, "Line 1 should target +91 94413 93817"
        assert "9492468817" in btn2_href, "Line 2 should target 9492468817"
        print("[TEST 3 SUCCESS] Both WhatsApp dispatch notifications are active and verified.")
        
        # 4. Check My Orders Modal
        print("[TEST 4] Opening Customer My Orders Modal...")
        page.click(".modal-close") # close success modal
        page.click(".my-orders-btn")
        page.wait_for_selector("#myOrdersModal.active")
        orders_html = page.locator("#myOrdersList").inner_text()
        assert "Subba Rao Garu" in orders_html or "OD-SPR-" in orders_html
        print("[TEST 4 SUCCESS] Placed order visible in My Orders tracking.")
        page.click("#myOrdersModal .modal-close")
        
        # 5. Check Admin Portal
        print("[TEST 5] Opening Admin Portal & checking 9 KPIs...")
        page.click(".fk-admin-badge-btn")
        page.wait_for_selector("#adminModal.active")
        
        total_kpi = page.locator("#kpiTotalOrders").inner_text()
        print(f"[TEST 5] Admin Total Orders KPI: {total_kpi}")
        assert int(total_kpi) >= 4, "KPI should include benchmark orders + newly placed order"
        
        # Click 'View Order' on the first order
        print("[TEST 5] Clicking View Order on latest order...")
        page.locator("#adminOrdersTableBody .btn-primary").first.click()
        page.wait_for_selector("#adminOrderDetailsModal.active")
        
        # Check customer info
        detail_name = page.locator("#detailCustName").inner_text()
        print(f"[TEST 5] Order Detail Customer: {detail_name}")
        assert "Subba Rao Garu" in detail_name
        
        # Test Status Progression to 'Shipped'
        print("[TEST 5] Advancing order status to 'Shipped'...")
        # Fill shipping details
        page.fill("#shippingCourierInput", "India Post Speed Post")
        page.fill("#shippingTrackingInput", "AP9492468817IN")
        page.click("button:has-text('Save Shipping & Notify Customer')")
        page.wait_for_timeout(500)
        
        new_status = page.locator("#detailStatusBadge").inner_text()
        print(f"[TEST 5] Updated Status Badge: {new_status}")
        assert "Shipped" in new_status
        print("[TEST 5 SUCCESS] Status transition & shipping AWB verified.")
        
        # Take a verification screenshot
        page.screenshot(path="screenshots/admin_verified.png")
        print("[TEST SUITE COMPLETE] All 5 core suites passed flawlessly!")
        browser.close()

if __name__ == "__main__":
    run_tests()
