# Read original_app.js
with open(r"c:\Users\LENOVO\Downloads\PDF CATLOG\website\original_app.js", "r", encoding="utf-8") as f:
    orig = f.read()

addon_code = r'''
// =========================================================================
// === EXTENSION: REAL-TIME ADMIN DASHBOARD, AI CHATBOT & DUAL-NUMBER WA ===
// =========================================================================

const DB_STORAGE_KEY = "spr_orders_db";

// Ensure state has orders and admin fields
state.orders = [];
state.currentAdminOrderId = null;
state.adminFilterStatus = "all";
state.adminFilterPayment = "all";
state.adminSort = "newest";
state.adminSearchQuery = "";
state.chatOpen = false;
state.chatMessages = [];

// Initialize Database & Seeding
function initDatabase() {
  const existingOrders = localStorage.getItem(DB_STORAGE_KEY);
  if (existingOrders) {
    try {
      state.orders = JSON.parse(existingOrders);
    } catch (e) {
      state.orders = [];
    }
  }

  if (!state.orders || state.orders.length === 0) {
    state.orders = [
      {
        orderId: "OD784920194821",
        createdAt: "2026-11-04 09:30:15",
        status: "Delivered",
        paymentMethod: "UPI",
        paymentStatus: "Paid Online",
        txnId: "UPI944139381781",
        amountPaid: 629,
        subtotal: 629,
        deliveryFee: 0,
        customer: {
          fullName: "Venkata Ramanamurthy",
          phone: "9848022338",
          email: "v.ramana@gmail.com"
        },
        delivery: {
          houseNo: "Plot No. 42",
          street: "Lakshmipuram Main Road",
          locality: "Lakshmipuram",
          city: "Guntur",
          state: "Andhra Pradesh",
          pincode: "522007"
        },
        items: [
          {
            id: 6,
            name: "S.P.R. Complete Health Pack (5-in-1 Combo)",
            price: 629,
            qty: 1,
            image: "assets/brand_poster_logo.png"
          }
        ],
        shipping: {
          courier: "India Post Speed Post",
          trackingId: "AP9492468817IN",
          trackingUrl: "https://www.indiapost.gov.in/",
          dispatchDate: "2026-11-04"
        }
      },
      {
        orderId: "OD784920194822",
        createdAt: "2026-11-04 11:15:40",
        status: "Shipped",
        paymentMethod: "Card",
        paymentStatus: "Paid Online",
        txnId: "TXN-CARD-883910",
        amountPaid: 377,
        subtotal: 377,
        deliveryFee: 0,
        customer: {
          fullName: "Ananya Sharma",
          phone: "9121158810",
          email: "ananya.sharma@outlook.com"
        },
        delivery: {
          houseNo: "Flat 402, Green Meadows",
          street: "KPHB Phase 3",
          locality: "Kukatpally",
          city: "Hyderabad",
          state: "Telangana",
          pincode: "500072"
        },
        items: [
          {
            id: 1,
            name: "S.P.R. Instant Ragi Dosa Mix (500 g)",
            price: 119,
            qty: 1,
            image: "assets/ragi_dosa.png"
          },
          {
            id: 3,
            name: "S.P.R. Instant Pesara Dosa Mix (500 g)",
            price: 129,
            qty: 1,
            image: "assets/pesara_dosa.png"
          },
          {
            id: 4,
            name: "S.P.R. Instant Korra Dosa Mix (500 g)",
            price: 129,
            qty: 1,
            image: "assets/korra_dosa.png"
          }
        ],
        shipping: {
          courier: "Delhivery Surface",
          trackingId: "DLV-88391024",
          trackingUrl: "https://www.delhivery.com/",
          dispatchDate: "2026-11-04"
        }
      },
      {
        orderId: "OD784920194823",
        createdAt: "2026-11-04 14:02:18",
        status: "Order Placed",
        paymentMethod: "COD",
        paymentStatus: "Pending Doorstep Collection",
        txnId: "COD-CASH-7823",
        amountPaid: 2490,
        subtotal: 2490,
        deliveryFee: 0,
        customer: {
          fullName: "Sri Balaji Super Market (K. Srinivas)",
          phone: "9440123456",
          email: "balaji.supermarket@gmail.com"
        },
        delivery: {
          houseNo: "D.No 5-89",
          street: "Bazaar Street, Opp Bus Stand",
          locality: "Addanki Town",
          city: "Addanki / Bapatla",
          state: "Andhra Pradesh",
          pincode: "523201"
        },
        items: [
          {
            id: 7,
            name: "S.P.R. Wholesale Supermarket Master Carton (24 Packs)",
            price: 2490,
            qty: 1,
            image: "assets/brand_poster_logo.png"
          }
        ],
        shipping: {
          courier: "Factory Direct Lorry Transport",
          trackingId: "LR-KMP-9492",
          trackingUrl: "",
          dispatchDate: ""
        }
      }
    ];
    saveOrdersDatabase();
  }
}

function saveOrdersDatabase() {
  localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(state.orders));
  updateAdminDashboardStats();
  updateCustomerOrdersBadge();
}

function updateCustomerOrdersBadge() {
  const countTag = document.getElementById("custOrdersCount");
  if (countTag) {
    countTag.textContent = `${state.orders.length} Order(s) Recorded`;
  }
}

// Hook into DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  initDatabase();
  initAiChat();
  updateAdminDashboardStats();
  updateCustomerOrdersBadge();
});

// --- Enhanced Payment Processing with Permanent DB & Dual WhatsApp ---
window.processPayment = function() {
  // Validate COD captcha if COD selected
  if (state.selectedPayment === "cod") {
    const userVal = document.getElementById("captchaInput") ? document.getElementById("captchaInput").value.trim() : "";
    if (userVal !== state.captchaCode) {
      alert("Please enter the correct 3-digit verification code to confirm your Cash on Delivery order.");
      return;
    }
  }

  // Get customer inputs
  const name = document.getElementById("custName")?.value || "Venkatesh Kumar";
  const phone = document.getElementById("custPhone")?.value || "9492468817";
  const email = document.getElementById("custEmail")?.value || "sprsiridhanya6@gmail.com";
  const houseNo = document.getElementById("custAddress")?.value || "D.No 12-4, Siri Dhanya Nilayam";
  const locality = document.getElementById("custLocality")?.value || "Kamepalli";
  const city = document.getElementById("custCity")?.value || "Santamaguluru / Bapatla";
  const stateVal = document.getElementById("custState")?.value || "Andhra Pradesh";
  const pincode = document.getElementById("custPincode")?.value || "522616";
  const fullAddress = `${houseNo}, ${locality}, ${city}, ${stateVal} - ${pincode}`;

  // Calculate totals
  let finalTotal = 0;
  const orderItems = state.cart.map(ci => {
    const p = PRODUCTS.find(prod => prod.id === ci.id);
    const itemTotal = p ? p.price * ci.qty : 0;
    finalTotal += itemTotal;
    return {
      id: p ? p.id : ci.id,
      name: p ? p.name : "Millet Product",
      price: p ? p.price : 119,
      qty: ci.qty,
      image: p ? p.image : "assets/ragi_dosa.png"
    };
  });

  const orderId = "OD" + Math.floor(100000000000 + Math.random() * 900000000000);
  const now = new Date();
  const dateStr = now.toISOString().replace('T', ' ').substring(0, 19);

  let payName = "UPI / Google Pay";
  let payStatus = "Paid Online (UPI Verified)";
  let txnId = "UPI-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  if (state.selectedPayment === "card") {
    payName = "Credit / Debit Card";
    payStatus = "Paid Online (Card Verified)";
    txnId = "CARD-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  } else if (state.selectedPayment === "netbanking") {
    payName = "Net Banking";
    payStatus = "Paid Online (Bank Verified)";
    txnId = "NB-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  } else if (state.selectedPayment === "cod") {
    payName = "Cash on Delivery (Pay at Doorstep)";
    payStatus = "Pending Doorstep Collection";
    txnId = "COD-" + Math.floor(1000 + Math.random() * 9000);
  }

  // Create permanent order record
  const newOrder = {
    orderId,
    createdAt: dateStr,
    status: state.selectedPayment === "cod" ? "Order Placed" : "Payment Verified",
    paymentMethod: state.selectedPayment.toUpperCase(),
    paymentStatus: payStatus,
    txnId,
    amountPaid: finalTotal,
    subtotal: finalTotal,
    deliveryFee: 0,
    customer: {
      fullName: name,
      phone,
      email
    },
    delivery: {
      houseNo,
      street: locality,
      locality,
      village: locality,
      mandal: "Santamaguluru",
      district: city,
      city,
      state: stateVal,
      pincode
    },
    items: orderItems,
    shipping: {
      courier: "India Post Speed Post",
      trackingId: "AWB-" + orderId.substring(2, 10),
      trackingUrl: "https://www.indiapost.gov.in/",
      dispatchDate: dateStr.split(" ")[0]
    }
  };

  // Add to Database
  state.orders.unshift(newOrder);
  saveOrdersDatabase();

  // Populate Order Success Modal
  const successOrderIdEl = document.getElementById("successOrderId");
  if (successOrderIdEl) successOrderIdEl.textContent = orderId;
  const successCustEl = document.getElementById("successCustomerName") || document.getElementById("successCustomer");
  if (successCustEl) successCustEl.textContent = name;
  const successPhoneEl = document.getElementById("successPhone");
  if (successPhoneEl) successPhoneEl.textContent = phone;
  const successAddrEl = document.getElementById("successAddress");
  if (successAddrEl) successAddrEl.textContent = fullAddress;
  const successAmtEl = document.getElementById("successAmount");
  if (successAmtEl) successAmtEl.textContent = `₹${finalTotal}`;
  const successPayEl = document.getElementById("successPaymentMethod");
  if (successPayEl) successPayEl.textContent = payName;

  // WhatsApp Alert for Both Numbers (+91 94413 93817 & 9492468817)
  const itemsText = orderItems.map(i => `• ${i.qty}x ${i.name} (Rs. ${i.price * i.qty})`).join("\n");
  const waMsg = 
`🔔 *NEW E-COMMERCE ORDER - S.P.R. SIRI DHANYA*
----------------------------------------
*Order ID:* ${orderId}
*Date:* ${dateStr}
*Customer Name:* ${name}
*Mobile Number:* ${phone}

📍 *DELIVERY ADDRESS:*
${fullAddress}

🛒 *ORDERED ITEMS:*
${itemsText}

💰 *PAYMENT DETAILS:*
*Payment Method:* ${payName}
*Payment Status:* ${payStatus}
*Transaction ID:* ${txnId}
*Total Amount:* Rs. ${finalTotal} (FREE Delivery)

⚡ *Action:* Please confirm & dispatch to courier.`;

  const encodedWa = encodeURIComponent(waMsg);

  // Button 1: +91 94413 93817
  const btn1 = document.getElementById("successWhatsappBtn1");
  if (btn1) btn1.href = `https://wa.me/919441393817?text=${encodedWa}`;

  // Button 2: 9492468817
  const btn2 = document.getElementById("successWhatsappBtn2");
  if (btn2) btn2.href = `https://wa.me/919492468817?text=${encodedWa}`;

  // Fallback single button
  const btnOld = document.getElementById("successWhatsappBtn");
  if (btnOld) btnOld.href = `https://wa.me/919492468817?text=${encodedWa}`;

  // Close Checkout Modal & Clear Cart
  closeCheckoutModal();
  state.cart = [];
  saveCartToStorage();
  updateCartBadge();
  renderProducts();

  // Open Order Success Modal
  document.getElementById("orderSuccessModal")?.classList.add("active");
  showToast("Order placed successfully! Verified and saved to database.");
};

// --- Customer "My Orders" Module ---
function openMyOrdersModal() {
  renderMyOrders();
  document.getElementById("myOrdersModal")?.classList.add("active");
}

function renderMyOrders() {
  const container = document.getElementById("myOrdersList");
  if (!container) return;

  if (state.orders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px;">
        <span style="font-size: 48px;">📦</span>
        <h3>No Orders Placed Yet</h3>
        <p style="color: #666; font-size: 13px;">Place an order from our pure millet catalog to track doorstep delivery in real-time.</p>
        <button class="btn btn-primary" onclick="closeModal('myOrdersModal'); scrollToSection('productsSection');" style="margin-top: 15px;">
          Start Shopping
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = state.orders.map(order => {
    const statusSteps = ["Order Placed", "Confirmed", "Shipped", "Out for Delivery", "Delivered"];
    const currentStepIndex = statusSteps.indexOf(order.status);
    const isCancelled = order.status === "Cancelled";

    return `
      <div class="customer-order-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin-bottom: 16px; background: #fff;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid #eee; padding-bottom: 10px;">
          <div>
            <strong style="font-size: 15px; color: var(--fk-blue); font-family: monospace;">${order.orderId}</strong>
            <div style="font-size: 12px; color: #666;">Placed on: ${order.createdAt}</div>
          </div>
          <div>
            <span class="status-pill status-${order.status.toLowerCase().replace(/\s+/g, '-')}" style="padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 700;">
              ${order.status}
            </span>
          </div>
        </div>

        <div style="margin: 12px 0;">
          ${order.items.map(item => `
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <img src="${item.image}" alt="${item.name}" style="width: 44px; height: 44px; object-fit: contain; border: 1px solid #eee; border-radius: 4px;">
              <div style="flex: 1;">
                <div style="font-size: 13px; font-weight: 600;">${item.name}</div>
                <div style="font-size: 11.5px; color: #666;">Qty: ${item.qty} × ₹${item.price}</div>
              </div>
              <div style="font-weight: 700; font-size: 13px;">₹${item.price * item.qty}</div>
            </div>
          `).join("")}
        </div>

        <div style="display: flex; justify-content: space-between; background: #f8f9fa; padding: 8px 12px; border-radius: 4px; font-size: 13px;">
          <span>Total Paid (${order.paymentMethod}):</span>
          <strong style="color: var(--fk-orange); font-size: 15px;">₹${order.amountPaid}</strong>
        </div>

        <!-- Tracking Stepper -->
        ${!isCancelled ? `
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px dashed #e0e0e0;">
            <div style="font-size: 12px; font-weight: 700; color: #444; margin-bottom: 8px;">🚚 Live Tracking Journey:</div>
            <div style="display: flex; justify-content: space-between; position: relative;">
              ${statusSteps.map((step, idx) => {
                const isDone = currentStepIndex >= idx;
                const isCurrent = currentStepIndex === idx;
                return `
                  <div style="text-align: center; flex: 1;">
                    <div style="width: 22px; height: 22px; border-radius: 50%; background: ${isDone ? '#388e3c' : '#ccc'}; color: #fff; font-size: 11px; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                      ${isDone ? '✓' : idx + 1}
                    </div>
                    <div style="font-size: 10px; margin-top: 4px; color: ${isCurrent ? '#388e3c' : '#666'}; font-weight: ${isCurrent ? '700' : '400'};">
                      ${step}
                    </div>
                  </div>
                `;
              }).join("")}
            </div>

            ${order.shipping && order.shipping.trackingId ? `
              <div style="margin-top: 10px; font-size: 12px; color: #555; background: #eef5ff; padding: 8px; border-radius: 4px;">
                Courier: <strong>${order.shipping.courier}</strong> | AWB: <strong>${order.shipping.trackingId}</strong>
              </div>
            ` : ''}
          </div>
        ` : `
          <div style="margin-top: 10px; color: #d32f2f; font-weight: 600; font-size: 12px;">❌ This order was cancelled.</div>
        `}

        <div style="display: flex; gap: 8px; margin-top: 12px;">
          ${(order.status === "Order Placed" || order.status === "Payment Verified") ? `
            <button class="btn btn-secondary btn-sm" onclick="cancelCustomerOrder('${order.orderId}')">
              Cancel Order
            </button>
          ` : ''}
          <a href="https://wa.me/919492468817?text=Hello%20SPR%20Siri%20Dhanya,%20query%20regarding%20my%20Order%20${order.orderId}" target="_blank" class="btn btn-whatsapp btn-sm">
            💬 WhatsApp Support
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function cancelCustomerOrder(orderId) {
  if (!confirm(`Are you sure you want to cancel order ${orderId}?`)) return;
  const order = state.orders.find(o => o.orderId === orderId);
  if (order) {
    order.status = "Cancelled";
    saveOrdersDatabase();
    renderMyOrders();
    showToast(`Order ${orderId} has been cancelled.`);
  }
}

// --- Admin Order Management System ---
function openAdminModal() {
  refreshAdminData();
  document.getElementById("adminModal")?.classList.add("active");
}

function refreshAdminData() {
  updateAdminDashboardStats();
  renderAdminOrdersTable();
  showToast("Admin data synced with store database.");
}

function updateAdminDashboardStats() {
  const total = state.orders.length;
  const newOrders = state.orders.filter(o => o.status === "Order Placed").length;
  const pendingPay = state.orders.filter(o => o.paymentStatus.toLowerCase().includes("pending")).length;
  const confirmed = state.orders.filter(o => o.status === "Confirmed" || o.status === "Payment Verified").length;
  const processing = state.orders.filter(o => o.status === "Processing" || o.status === "Packed").length;
  const shipped = state.orders.filter(o => o.status === "Shipped" || o.status === "Out for Delivery").length;
  const delivered = state.orders.filter(o => o.status === "Delivered").length;
  const cancelled = state.orders.filter(o => o.status === "Cancelled").length;
  const totalRevenue = state.orders
    .filter(o => o.status !== "Cancelled")
    .reduce((sum, o) => sum + (o.amountPaid || 0), 0);

  const setT = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setT("kpiTotalOrders", total);
  setT("kpiNewOrders", newOrders);
  setT("kpiPendingPay", pendingPay);
  setT("kpiConfirmed", confirmed);
  setT("kpiProcessing", processing);
  setT("kpiShipped", shipped);
  setT("kpiDelivered", delivered);
  setT("kpiCancelled", cancelled);
  setT("kpiTotalSales", `₹${totalRevenue.toLocaleString('en-IN')}`);
}

function handleAdminSearch() {
  const input = document.getElementById("adminSearchInput");
  state.adminSearchQuery = input ? input.value.toLowerCase().trim() : "";
  renderAdminOrdersTable();
}

function handleAdminFilter() {
  const statusEl = document.getElementById("adminStatusFilter");
  const payEl = document.getElementById("adminPaymentFilter");
  const sortEl = document.getElementById("adminSortFilter");

  if (statusEl) state.adminFilterStatus = statusEl.value;
  if (payEl) state.adminFilterPayment = payEl.value;
  if (sortEl) state.adminSort = sortEl.value;

  renderAdminOrdersTable();
}

function renderAdminOrdersTable() {
  const tbody = document.getElementById("adminOrdersTableBody");
  const paginationInfo = document.getElementById("adminPaginationInfo");
  if (!tbody) return;

  let filtered = [...state.orders];

  if (state.adminSearchQuery) {
    const q = state.adminSearchQuery;
    filtered = filtered.filter(o => 
      o.orderId.toLowerCase().includes(q) ||
      o.customer.fullName.toLowerCase().includes(q) ||
      o.customer.phone.includes(q)
    );
  }

  if (state.adminFilterStatus !== "all") {
    filtered = filtered.filter(o => o.status === state.adminFilterStatus);
  }

  if (state.adminFilterPayment !== "all") {
    filtered = filtered.filter(o => o.paymentMethod.toUpperCase() === state.adminFilterPayment.toUpperCase());
  }

  if (state.adminSort === "newest") {
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (state.adminSort === "oldest") {
    filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  } else if (state.adminSort === "amount-high") {
    filtered.sort((a, b) => b.amountPaid - a.amountPaid);
  } else if (state.adminSort === "amount-low") {
    filtered.sort((a, b) => a.amountPaid - b.amountPaid);
  }

  if (paginationInfo) {
    paginationInfo.textContent = `Showing ${filtered.length} of ${state.orders.length} total orders`;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="10" style="text-align: center; padding: 30px; color: #888;">
          No matching orders found in database.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(order => {
    const itemsSummary = order.items.map(it => `${it.qty}x ${it.name}`).join(", ");
    const statusSlug = order.status.toLowerCase().replace(/\s+/g, '-');

    return `
      <tr>
        <td style="font-family: monospace; font-weight: 700; color: var(--fk-blue);">${order.orderId}</td>
        <td><strong>${order.customer.fullName}</strong></td>
        <td><a href="tel:${order.customer.phone}" style="color: inherit; text-decoration: none;">📞 ${order.customer.phone}</a></td>
        <td style="max-width: 180px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${itemsSummary}">
          ${itemsSummary}
        </td>
        <td><strong>₹${order.amountPaid}</strong></td>
        <td><span class="pay-method-badge">${order.paymentMethod}</span></td>
        <td>
          <span class="pay-status-pill ${order.paymentStatus.toLowerCase().includes('paid') ? 'paid' : 'pending'}">
            ${order.paymentStatus}
          </span>
        </td>
        <td style="font-size: 11px; color: #666;">${order.createdAt}</td>
        <td>
          <span class="status-pill status-${statusSlug}">
            ${order.status}
          </span>
        </td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="openAdminOrderDetails('${order.orderId}')">
            View Order
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function openAdminOrderDetails(orderId) {
  const order = state.orders.find(o => o.orderId === orderId);
  if (!order) return;

  state.currentAdminOrderId = orderId;

  document.getElementById("detailOrderId").textContent = order.orderId;
  document.getElementById("detailOrderDate").textContent = `Placed: ${order.createdAt}`;
  const badge = document.getElementById("detailStatusBadge");
  if (badge) {
    badge.textContent = order.status;
    badge.className = `status-badge-lg status-${order.status.toLowerCase().replace(/\s+/g, '-')}`;
  }

  // Customer
  document.getElementById("detailCustName").textContent = order.customer.fullName;
  document.getElementById("detailCustPhone").innerHTML = `<a href="tel:${order.customer.phone}">${order.customer.phone}</a>`;
  document.getElementById("detailCustEmail").textContent = order.customer.email;

  // Delivery
  document.getElementById("detailHouseNo").textContent = order.delivery.houseNo || "-";
  document.getElementById("detailStreet").textContent = order.delivery.street || "-";
  document.getElementById("detailVillage").textContent = order.delivery.village || order.delivery.locality || "-";
  document.getElementById("detailMandal").textContent = order.delivery.mandal || "Santamaguluru";
  document.getElementById("detailDistrict").textContent = order.delivery.district || order.delivery.city || "-";
  document.getElementById("detailStatePin").textContent = `${order.delivery.state} - PIN: ${order.delivery.pincode}`;

  // Payment
  document.getElementById("detailPayMethod").textContent = order.paymentMethod;
  document.getElementById("detailTxnId").textContent = order.txnId;
  document.getElementById("detailPayDate").textContent = order.createdAt;
  document.getElementById("detailPayStatus").textContent = order.paymentStatus;
  document.getElementById("detailAmountPaid").textContent = `₹${order.amountPaid}`;

  // Shipping
  document.getElementById("shippingCourierInput").value = order.shipping?.courier || "India Post Speed Post";
  document.getElementById("shippingTrackingInput").value = order.shipping?.trackingId || "";
  document.getElementById("shippingUrlInput").value = order.shipping?.trackingUrl || "";
  document.getElementById("shippingDateInput").value = order.shipping?.dispatchDate || "";

  // Items Breakdown
  const itemsTbody = document.getElementById("detailItemsTableBody");
  if (itemsTbody) {
    itemsTbody.innerHTML = order.items.map(item => `
      <tr>
        <td><img src="${item.image}" alt="${item.name}" style="width: 36px; height: 36px; object-fit: contain;"></td>
        <td><strong>${item.name}</strong></td>
        <td>₹${item.price}</td>
        <td>${item.qty}</td>
        <td><strong>₹${item.price * item.qty}</strong></td>
      </tr>
    `).join("");
  }

  const finalEl = document.getElementById("detailFinalAmount");
  if (finalEl) finalEl.textContent = `₹${order.amountPaid}`;

  // WhatsApp Alert for Both Numbers (+91 94413 93817 & 9492468817)
  const itemsText = order.items.map(i => `• ${i.qty}x ${i.name} (Rs. ${i.price * i.qty})`).join("\n");
  const alertMsg = 
`📦 *SPR SIRI DHANYA - DISPATCH NOTIFICATION*
*Order ID:* ${order.orderId}
*Customer:* ${order.customer.fullName} (${order.customer.phone})
*Address:* ${order.delivery.village || order.delivery.locality}, ${order.delivery.city || order.delivery.district} - ${order.delivery.pincode}
*Status:* ${order.status}
*Amount Paid:* Rs. ${order.amountPaid} (${order.paymentMethod})
*Courier:* ${order.shipping?.courier || 'Pending'}
*AWB No:* ${order.shipping?.trackingId || 'Pending'}

*Items:*
${itemsText}`;

  const encodedAlert = encodeURIComponent(alertMsg);
  const notifyWa1 = document.getElementById("adminNotifyWa1");
  const notifyWa2 = document.getElementById("adminNotifyWa2");
  if (notifyWa1) notifyWa1.href = `https://wa.me/919441393817?text=${encodedAlert}`;
  if (notifyWa2) notifyWa2.href = `https://wa.me/919492468817?text=${encodedAlert}`;

  document.getElementById("adminOrderDetailsModal")?.classList.add("active");
}

function updateOrderStatus(newStatus) {
  if (!state.currentAdminOrderId) return;
  const order = state.orders.find(o => o.orderId === state.currentAdminOrderId);
  if (!order) return;

  order.status = newStatus;
  if (newStatus === "Payment Verified") {
    order.paymentStatus = "Verified & Paid Online";
  }

  saveOrdersDatabase();
  renderAdminOrdersTable();
  openAdminOrderDetails(state.currentAdminOrderId);
  showToast(`Order status updated to: ${newStatus}`);
}

function saveShippingDetails() {
  if (!state.currentAdminOrderId) return;
  const order = state.orders.find(o => o.orderId === state.currentAdminOrderId);
  if (!order) return;

  const courier = document.getElementById("shippingCourierInput").value.trim();
  const trackingId = document.getElementById("shippingTrackingInput").value.trim();
  const trackingUrl = document.getElementById("shippingUrlInput").value.trim();
  const dispatchDate = document.getElementById("shippingDateInput").value;

  order.shipping = {
    courier,
    trackingId,
    trackingUrl,
    dispatchDate
  };

  if (trackingId && (order.status === "Order Placed" || order.status === "Payment Verified" || order.status === "Confirmed" || order.status === "Processing" || order.status === "Packed")) {
    order.status = "Shipped";
  }

  saveOrdersDatabase();
  renderAdminOrdersTable();
  openAdminOrderDetails(state.currentAdminOrderId);
  showToast("Shipping details saved & synchronized with customer tracking!");
}

function printOrderInvoice() {
  window.print();
}

function exportOrdersCSV() {
  if (state.orders.length === 0) {
    alert("No orders available to export.");
    return;
  }

  const headers = ["Order ID", "Date", "Customer Name", "Phone", "Email", "City", "PIN", "Items", "Amount Paid", "Payment Mode", "Payment Status", "Order Status", "Courier", "AWB"];
  const rows = state.orders.map(o => [
    o.orderId,
    o.createdAt,
    `"${o.customer.fullName}"`,
    o.customer.phone,
    o.customer.email,
    `"${o.delivery.city || o.delivery.district}"`,
    o.delivery.pincode,
    `"${o.items.map(i => `${i.qty}x ${i.name}`).join('; ')}"`,
    o.amountPaid,
    o.paymentMethod,
    o.paymentStatus,
    o.status,
    `"${o.shipping?.courier || ''}"`,
    `"${o.shipping?.trackingId || ''}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `SPR_Siri_Dhanya_Orders_${new Date().toISOString().substring(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --- Contact Chooser Modal (+91 94413 93817 & 9492468817) ---
function openContactChooser(mode) {
  const modal = document.getElementById("contactChooserModal");
  const title = document.getElementById("chooserTitle");
  const line1 = document.getElementById("chooserLine1");
  const line2 = document.getElementById("chooserLine2");

  if (!modal) return;

  if (mode === "whatsapp") {
    if (title) title.textContent = "Connect on WhatsApp";
    if (line1) line1.href = "https://wa.me/919441393817?text=Hello%20SPR%20Siri%20Dhanya,%20I%20would%20like%20to%20order%20millet%20products.";
    if (line2) line2.href = "https://wa.me/919492468817?text=Hello%20SPR%20Siri%20Dhanya,%20I%20would%20like%20to%20order%20millet%20products.";
  } else {
    if (title) title.textContent = "Call S.P.R. Siri Dhanya";
    if (line1) line1.href = "tel:9441393817";
    if (line2) line2.href = "tel:9492468817";
  }

  modal.classList.add("active");
}

// --- Intelligent AI Chatbot Engine ---
function initAiChat() {
  state.chatMessages = [
    {
      sender: "bot",
      time: "Just now",
      text: "🙏 **Namaste! Welcome to S.P.R. Siri Dhanya Official AI Assistant.**\n\nI can help you with:\n1. 📦 **Check Live Stock & Availability**\n2. 💰 **Prices & Wholesale Cartons**\n3. 🩺 **Millet Health Benefits** (Diabetic care, bone density, child nutrition)\n4. ⏱️ **Instant 15-Minute Cooking Instructions**\n5. 🛒 **Direct In-Chat Ordering**\n\nHow can I serve you today?"
    }
  ];
  renderAiChat();
}

function toggleAiChat() {
  const drawer = document.getElementById("aiChatDrawer");
  if (!drawer) return;
  state.chatOpen = !state.chatOpen;
  drawer.classList.toggle("active", state.chatOpen);
  if (state.chatOpen) {
    renderAiChat();
    setTimeout(() => {
      document.getElementById("aiUserInput")?.focus();
    }, 200);
  }
}

function handleAiKeyPress(e) {
  if (e.key === "Enter") {
    handleAiSend();
  }
}

function sendAiQuickPrompt(promptText) {
  const input = document.getElementById("aiUserInput");
  if (input) input.value = promptText;
  handleAiSend();
}

function handleAiSend() {
  const input = document.getElementById("aiUserInput");
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  state.chatMessages.push({
    sender: "user",
    time: "Now",
    text
  });
  input.value = "";
  renderAiChat();

  setTimeout(() => {
    const botReply = generateAiBotResponse(text);
    state.chatMessages.push({
      sender: "bot",
      time: "Just now",
      text: botReply.text,
      actionBtn: botReply.actionBtn
    });
    renderAiChat();
  }, 400);
}

function generateAiBotResponse(query) {
  const q = query.toLowerCase();

  // Stock / Availability
  if (q.includes("stock") || q.includes("available") || q.includes("items") || q.includes("count")) {
    const stockList = PRODUCTS.map(p => `• **${p.name}**: ₹${p.price} (In Stock: Fresh Factory Batch)`).join("\n");
    return {
      text: `📦 **Real-Time Stock Availability at Factory Desk:**\n\n${stockList}\n\n*All items are freshly milled and dispatched within 24 hours directly from our Kamepalli plant.*`,
      actionBtn: { text: "🛒 Add Combo to Cart", action: "addToCart(6); openCartDrawer();" }
    };
  }

  // Price List
  if (q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("mrp") || q.includes("ధర")) {
    return {
      text: `💰 **Official S.P.R. Siri Dhanya Price Catalogue:**\n\n` +
            `1. **Ragi Dosa Mix (500g):** ₹119 (MRP ₹149)\n` +
            `2. **Jowar Dosa Mix (500g):** ₹119 (MRP ₹149)\n` +
            `3. **Pesara Dosa Mix (500g):** ₹129 (MRP ₹159)\n` +
            `4. **Korra Dosa Mix (500g):** ₹129 (MRP ₹160)\n` +
            `5. **Multi Grain Atta (1 KG):** ₹150 (MRP ₹185)\n` +
            `6. **5-in-1 Complete Health Combo:** ₹629 (Save ₹182!)\n` +
            `7. **Wholesale Master Carton (24 Packs):** ₹2,490 (Supermarket Wholesale)`,
      actionBtn: { text: "🎁 View Combo Offer", action: "openProductQuickview(6)" }
    };
  }

  // Health / Diabetes
  if (q.includes("diabetes") || q.includes("sugar") || q.includes("health") || q.includes("weight") || q.includes("benefit") || q.includes("ఆరోగ్యం")) {
    return {
      text: `🌿 **Health Recommendations by Siri Dhanya Nutritionist:**\n\n` +
            `• **For Diabetes & Sugar Control:** Korra Dosa Mix (కొర్రలు - Foxtail Millet) has a very low Glycemic Index (GI), preventing glucose spikes.\n` +
            `• **For Bone Strength & Calcium:** Ragi Dosa Mix (రాగులు) contains 344mg of natural calcium per 100g.\n` +
            `• **For Weight Management & Gut Care:** Jowar Dosa Mix (జొన్నలు) provides high dietary fibre.\n` +
            `• **For Muscle & Pure Plant Protein:** Pesara Dosa Mix (పెసలు) delivers over 22g protein.\n\n` +
            `Would you like to order the Korra Dosa Mix or the 5-in-1 Complete Family Pack?`,
      actionBtn: { text: "Buy Korra Dosa Mix (₹129)", action: "buyNow(4)" }
    };
  }

  // Cooking guide
  if (q.includes("cook") || q.includes("how to") || q.includes("recipe") || q.includes("water") || q.includes("minutes") || q.includes("తయారీ")) {
    return {
      text: `⏱️ **Instant 15-Minute Cooking Guide ("Just Add Water"):**\n\n` +
            `1. **Mix:** Take 1 cup of S.P.R. Dosa Mix in a bowl. Add 1 to 1.25 cups of water.\n` +
            `2. **Rest:** Stir well into a smooth, lump-free batter. Let it rest for **15 minutes** (No overnight fermentation needed!).\n` +
            `3. **Pour & Crisp:** Pour on a medium-hot tawa, spread evenly with gentle strokes, drizzle pure ghee or cold-pressed groundnut oil.\n` +
            `4. **Serve:** Cook until golden crispy and serve hot with coconut chutney, ginger chutney, or sambar!`,
      actionBtn: { text: "Order Ragi Dosa Mix", action: "buyNow(1)" }
    };
  }

  // Ordering in chat
  if (q.includes("order") || q.includes("buy") || q.includes("purchase") || q.includes("కావాలి")) {
    let targetId = 6;
    if (q.includes("ragi")) targetId = 1;
    else if (q.includes("jowar") || q.includes("jonna")) targetId = 2;
    else if (q.includes("pesara")) targetId = 3;
    else if (q.includes("korra")) targetId = 4;
    else if (q.includes("atta")) targetId = 5;
    else if (q.includes("wholesale") || q.includes("carton")) targetId = 7;

    const prod = PRODUCTS.find(p => p.id === targetId);
    addToCart(targetId);

    return {
      text: `🎉 **Item Added to Your Order!**\n\nI have added **${prod.name}** (₹${prod.price}) to your cart.\n\nYou can proceed directly to checkout to enter your address and choose Payment (UPI / Card / Cash on Delivery).`,
      actionBtn: { text: "🚀 Proceed to Checkout Now", action: "openCheckoutModal()" }
    };
  }

  // Track order
  if (q.includes("track") || q.includes("status") || q.includes("my order") || q.includes("where is")) {
    if (state.orders.length > 0) {
      const latest = state.orders[0];
      return {
        text: `🚚 **Latest Order Status:**\n\n` +
              `• **Order ID:** ${latest.orderId}\n` +
              `• **Status:** ${latest.status}\n` +
              `• **Payment:** ${latest.paymentMethod} (${latest.paymentStatus})\n` +
              `• **Courier:** ${latest.shipping.courier} (AWB: ${latest.shipping.trackingId || 'In Preparation'})\n\n` +
              `Click below to view full journey stepper and tracking link:`,
        actionBtn: { text: "📦 Open My Orders Tracker", action: "openMyOrdersModal()" }
      };
    } else {
      return {
        text: `You do not have any active orders right now. Browse our traditional millet products and place your first order with FREE delivery!`,
        actionBtn: { text: "Browse Products", action: "scrollToSection('productsSection')" }
      };
    }
  }

  // Owner phone numbers
  if (q.includes("contact") || q.includes("phone") || q.includes("call") || q.includes("number") || q.includes("whatsapp") || q.includes("owner")) {
    return {
      text: `📞 **S.P.R. Siri Dhanya Official Contacts:**\n\n` +
            `• **Management Line 1:** +91 94413 93817\n` +
            `• **Management Line 2:** 9492468817\n` +
            `• **Factory Desk:** Kamepalli, Santamaguluru Mandal, Bapatla District, A.P.\n\n` +
            `Click below to connect directly via WhatsApp or Phone:`,
      actionBtn: { text: "💬 WhatsApp Management", action: "openContactChooser('whatsapp')" }
    };
  }

  return {
    text: `I'm here to assist you with all S.P.R. Siri Dhanya products! You can ask me:\n• *"What is the price of Ragi Dosa?"*\n• *"Is Foxtail millet good for diabetes?"*\n• *"Order 5-in-1 combo"*\n• *"Check stock availability"*`,
    actionBtn: { text: "📦 View In-Stock Items", action: "sendAiQuickPrompt('What products are currently in stock?')" }
  };
}

function renderAiChat() {
  const container = document.getElementById("aiChatMessages");
  if (!container) return;

  container.innerHTML = state.chatMessages.map(msg => {
    const isBot = msg.sender === "bot";
    const formattedText = msg.text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');

    return `
      <div class="ai-msg ${isBot ? 'ai-msg-bot' : 'ai-msg-user'}" style="margin-bottom: 12px; display: flex; justify-content: ${isBot ? 'flex-start' : 'flex-end'};">
        <div class="msg-bubble" style="max-width: 85%; padding: 10px 14px; border-radius: 12px; background: ${isBot ? '#f0f2f5' : '#2874f0'}; color: ${isBot ? '#111' : '#fff'}; font-size: 13px; line-height: 1.45;">
          <div class="msg-text">${formattedText}</div>
          ${msg.actionBtn ? `
            <div style="margin-top: 8px;">
              <button style="background: #fb641b; color: #fff; border: none; padding: 6px 12px; border-radius: 4px; font-weight: 700; font-size: 11.5px; cursor: pointer;" onclick="${msg.actionBtn.action}">
                ${msg.actionBtn.text}
              </button>
            </div>
          ` : ''}
          <div style="font-size: 10px; opacity: 0.7; text-align: right; margin-top: 4px;">${msg.time}</div>
        </div>
      </div>
    `;
  }).join("");

  container.scrollTop = container.scrollHeight;
}
'''

full_app = orig + "\n" + addon_code

with open(r"c:\Users\LENOVO\Downloads\PDF CATLOG\website\app.js", "w", encoding="utf-8") as f:
    f.write(full_app)

print(f"Generated clean app.js without token errors! Length: {len(full_app)}")
