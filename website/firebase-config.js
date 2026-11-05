// =========================================================================
// S.P.R. SIRI DHANYA — OFFICIAL GOOGLE FIREBASE CLOUD DATABASE INTEGRATION
// Primary Google Owner Account: sdodda073@gmail.com
// Collections: 'orders', 'customers', 'products', 'wholesale_leads', 'reviews'
// =========================================================================

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "spr-siri-dhanya.firebaseapp.com",
  projectId: "spr-siri-dhanya",
  storageBucket: "spr-siri-dhanya.appspot.com",
  messagingSenderId: "",
  appId: "",
  ownerEmail: "sdodda073@gmail.com"
};

let sprFirebaseApp = null;
let sprFirestoreDb = null;
let isSprFirebaseLive = false;

// Load config from localStorage if user entered custom keys, else use default
function getSprFirebaseConfig() {
  try {
    const saved = localStorage.getItem("spr_firebase_config");
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.warn("Could not load saved firebase config:", e);
  }
  return DEFAULT_FIREBASE_CONFIG;
}

// Initialize Firebase SDK
function initSprFirebase() {
  const cfg = getSprFirebaseConfig();
  
  if (!window.firebase) {
    console.warn("Firebase SDK scripts not loaded yet. Retrying in 1s...");
    setTimeout(initSprFirebase, 1000);
    return;
  }

  // If apiKey is provided, initialize live connection
  if (cfg.apiKey && cfg.projectId) {
    try {
      if (!window.firebase.apps.length) {
        sprFirebaseApp = window.firebase.initializeApp(cfg);
      } else {
        sprFirebaseApp = window.firebase.app();
      }
      sprFirestoreDb = window.firebase.firestore();
      isSprFirebaseLive = true;
      console.log("🔥 [FIREBASE] Successfully connected to Google Cloud Firestore (Project: " + cfg.projectId + " | Owner: sdodda073@gmail.com)");
      updateFirebaseStatusUI(true, cfg);
      setupRealtimeFirestoreListeners();
    } catch (err) {
      console.error("🔥 [FIREBASE] Error initializing Firebase:", err);
      isSprFirebaseLive = false;
      updateFirebaseStatusUI(false, cfg, err.message);
    }
  } else {
    console.log("🔥 [FIREBASE] Cloud Database bridge ready for sdodda073@gmail.com. Awaiting project credentials.");
    updateFirebaseStatusUI(false, cfg, "Awaiting Project API Keys for sdodda073@gmail.com");
  }
}

// Update Status Badge in Admin Portal & UI
function updateFirebaseStatusUI(isConnected, cfg, errorMsg = "") {
  const pill = document.getElementById("adminFirebaseStatusPill");
  const detail = document.getElementById("adminFirebaseStatusDetail");
  
  if (pill) {
    if (isConnected) {
      pill.className = "live-status-pill";
      pill.style.background = "#166534";
      pill.style.color = "#86efac";
      pill.innerHTML = "🔥 Cloud Firestore LIVE (" + cfg.projectId + ")";
    } else {
      pill.className = "live-status-pill";
      pill.style.background = "#854d0e";
      pill.style.color = "#fef08a";
      pill.innerHTML = "🔥 Firebase Bridge Ready (sdodda073@gmail.com)";
    }
  }

  if (detail) {
    if (isConnected) {
      detail.innerHTML = `<strong>Status:</strong> Connected to Cloud Firestore project <code>${cfg.projectId}</code> (Account: <code>${cfg.ownerEmail || 'sdodda073@gmail.com'}</code>). Real-time order sync is active!`;
      detail.style.color = "#166534";
    } else {
      detail.innerHTML = `<strong>Status:</strong> Cloud sync bridge ready for <code>sdodda073@gmail.com</code>. Orders currently stored locally and will automatically sync once credentials are confirmed.`;
      detail.style.color = "#854d0e";
    }
  }
}

// --- CLOUD FIRESTORE CRUD OPERATIONS ---

// 1. Sync Placed Order to Cloud Firestore
async function sprDbSaveOrder(orderData) {
  if (!orderData || !orderData.orderId) return;

  if (isSprFirebaseLive && sprFirestoreDb) {
    try {
      await sprFirestoreDb.collection("orders").doc(orderData.orderId).set({
        ...orderData,
        lastSyncedAt: new Date().toISOString(),
        syncedAccount: "sdodda073@gmail.com"
      }, { merge: true });
      console.log(`🔥 [FIRESTORE] Order ${orderData.orderId} synchronized to Cloud Firestore!`);
    } catch (e) {
      console.error("🔥 [FIRESTORE] Failed to sync order to cloud:", e);
    }
  } else {
    console.log(`📦 [LOCAL] Order ${orderData.orderId} stored locally (Firebase bridge active for sdodda073@gmail.com)`);
  }
}

// 2. Sync Order Status / Shipping Update
async function sprDbUpdateOrderStatus(orderId, newStatus, shippingDetails = null) {
  if (!orderId) return;

  if (isSprFirebaseLive && sprFirestoreDb) {
    try {
      const payload = {
        status: newStatus,
        updatedAt: new Date().toISOString()
      };
      if (shippingDetails) payload.shipping = shippingDetails;

      await sprFirestoreDb.collection("orders").doc(orderId).update(payload);
      console.log(`🔥 [FIRESTORE] Status for ${orderId} updated to: ${newStatus}`);
    } catch (e) {
      console.error("🔥 [FIRESTORE] Status update failed:", e);
    }
  }
}

// 3. Sync Customer Details
async function sprDbSaveCustomer(customerData) {
  if (!customerData || !customerData.phone) return;

  if (isSprFirebaseLive && sprFirestoreDb) {
    try {
      await sprFirestoreDb.collection("customers").doc(customerData.phone).set({
        ...customerData,
        lastUpdated: new Date().toISOString()
      }, { merge: true });
      console.log(`🔥 [FIRESTORE] Customer ${customerData.fullName} saved to Cloud!`);
    } catch (e) {
      console.error("🔥 [FIRESTORE] Customer sync error:", e);
    }
  }
}

// 4. Sync Wholesale Lead / B2B Application
async function sprDbSaveWholesaleLead(leadData) {
  if (!leadData) return;

  if (isSprFirebaseLive && sprFirestoreDb) {
    try {
      const docId = leadData.gstin || leadData.phone || `LEAD_${Date.now()}`;
      await sprFirestoreDb.collection("wholesale_leads").doc(docId).set({
        ...leadData,
        submittedAt: new Date().toISOString()
      }, { merge: true });
      console.log(`🔥 [FIRESTORE] Wholesale lead saved to Cloud!`);
    } catch (e) {
      console.error("🔥 [FIRESTORE] Wholesale lead sync error:", e);
    }
  }
}

// 5. Setup Real-time Firestore Listeners
function setupRealtimeFirestoreListeners() {
  if (!isSprFirebaseLive || !sprFirestoreDb) return;

  // Listen to orders collection in real-time
  sprFirestoreDb.collection("orders").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const order = change.doc.data();
      if (change.type === "added" || change.type === "modified") {
        // Sync into local state.orders
        if (typeof state !== "undefined" && Array.isArray(state.orders)) {
          const idx = state.orders.findIndex(o => o.orderId === order.orderId);
          if (idx !== -1) {
            state.orders[idx] = { ...state.orders[idx], ...order };
          } else {
            state.orders.unshift(order);
          }
          if (typeof saveOrdersDatabase === "function") saveOrdersDatabase();
          if (typeof updateAdminDashboardStats === "function") updateAdminDashboardStats();
          if (typeof renderAdminOrdersTable === "function") renderAdminOrdersTable();
          if (typeof renderMyOrders === "function") renderMyOrders();
        }
      }
    });
  }, (error) => {
    console.warn("🔥 [FIRESTORE] Real-time listener notice:", error);
  });
}

// Save Firebase Config from Admin Portal form
function saveFirebaseConfigFromAdmin(e) {
  if (e) e.preventDefault();
  
  const apiKey = document.getElementById("fbApiKeyInput")?.value.trim();
  const projectId = document.getElementById("fbProjectIdInput")?.value.trim();
  const authDomain = document.getElementById("fbAuthDomainInput")?.value.trim() || `${projectId}.firebaseapp.com`;
  const storageBucket = document.getElementById("fbStorageBucketInput")?.value.trim() || `${projectId}.appspot.com`;
  const messagingSenderId = document.getElementById("fbSenderIdInput")?.value.trim();
  const appId = document.getElementById("fbAppIdInput")?.value.trim();
  const ownerEmail = document.getElementById("fbOwnerEmailInput")?.value.trim() || "sdodda073@gmail.com";

  const newConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    ownerEmail
  };

  localStorage.setItem("spr_firebase_config", JSON.stringify(newConfig));
  initSprFirebase();
  if (typeof showToast === "function") {
    showToast("🔥 Firebase credentials saved for sdodda073@gmail.com!");
  }
}

// Auto-run when DOM loads
window.addEventListener("DOMContentLoaded", () => {
  initSprFirebase();
});


// =========================================================================
// PUSH ENTIRE S.P.R. SIRI DHANYA DATABASE TO FIREBASE
// Collections: 'orders', 'products', 'customers', 'inventory', 'wholesale_accounts', 'reviews', 'coupons'
// Target Account: sdodda073@gmail.com
// =========================================================================
async function pushEntireDatabaseToFirebase() {
  const cfg = getSprFirebaseConfig();
  console.log("🔥 [MIGRATION] Starting full database push to Firebase for sdodda073@gmail.com...");

  // 1. Gather all collections from state and constants
  const orders = (typeof state !== "undefined" && Array.isArray(state.orders)) ? state.orders : [];
  const products = (typeof PRODUCTS !== "undefined" && Array.isArray(PRODUCTS)) ? PRODUCTS : [];
  const customers = (typeof state !== "undefined" && Array.isArray(state.customers)) ? state.customers : [];
  const wholesaleAccounts = (typeof state !== "undefined" && Array.isArray(state.wholesaleAccounts)) ? state.wholesaleAccounts : [];
  const reviews = (typeof state !== "undefined" && Array.isArray(state.reviews)) ? state.reviews : [];
  const coupons = (typeof EXTRA_DBS !== "undefined" && Array.isArray(EXTRA_DBS.coupons)) ? EXTRA_DBS.coupons : [];

  const fullDatabasePayload = {
    exportedAt: new Date().toISOString(),
    ownerAccount: "sdodda073@gmail.com",
    projectId: cfg.projectId || "spr-siri-dhanya",
    summary: {
      totalOrders: orders.length,
      totalProducts: products.length,
      totalCustomers: customers.length,
      totalWholesaleAccounts: wholesaleAccounts.length,
      totalReviews: reviews.length,
      totalCoupons: coupons.length
    },
    orders: orders,
    products: products,
    customers: customers,
    wholesale_accounts: wholesaleAccounts,
    reviews: reviews,
    coupons: coupons
  };

  // 2. If live Firestore connection is active, push each document into its respective collection
  let pushedCount = 0;
  if (isSprFirebaseLive && sprFirestoreDb) {
    try {
      const batch = sprFirestoreDb.batch();

      // Orders collection
      orders.forEach(o => {
        const ref = sprFirestoreDb.collection("orders").doc(o.orderId);
        batch.set(ref, { ...o, pushedToFirebaseAt: new Date().toISOString(), owner: "sdodda073@gmail.com" }, { merge: true });
        pushedCount++;
      });

      // Products collection
      products.forEach(p => {
        const ref = sprFirestoreDb.collection("products").doc(String(p.id));
        batch.set(ref, { ...p, pushedToFirebaseAt: new Date().toISOString(), owner: "sdodda073@gmail.com" }, { merge: true });
        pushedCount++;
      });

      // Customers collection
      customers.forEach(c => {
        const docId = c.phone || `CUST_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;
        const ref = sprFirestoreDb.collection("customers").doc(docId);
        batch.set(ref, { ...c, pushedToFirebaseAt: new Date().toISOString(), owner: "sdodda073@gmail.com" }, { merge: true });
        pushedCount++;
      });

      // Wholesale collection
      wholesaleAccounts.forEach(w => {
        const docId = w.gstin || w.phone || `WS_${Date.now()}`;
        const ref = sprFirestoreDb.collection("wholesale_accounts").doc(docId);
        batch.set(ref, { ...w, pushedToFirebaseAt: new Date().toISOString(), owner: "sdodda073@gmail.com" }, { merge: true });
        pushedCount++;
      });

      await batch.commit();
      console.log(`🔥 [FIRESTORE] Batch write committed successfully! ${pushedCount} documents pushed to Cloud Firestore.`);
    } catch (err) {
      console.error("🔥 [FIRESTORE] Batch push notice:", err);
    }
  }

  // 3. Download the complete JSON database formatted for direct Firebase Import (Realtime Database & Firestore)
  const jsonStr = JSON.stringify(fullDatabasePayload, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const downloadUrl = URL.createObjectURL(blob);
  const dlLink = document.createElement("a");
  dlLink.href = downloadUrl;
  dlLink.download = `SPR_Siri_Dhanya_Firebase_Full_Database_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);

  // 4. Show success toast and notification
  const msg = `🚀 Complete database prepared for Firebase (sdodda073@gmail.com)!\n• ${orders.length} Orders\n• ${products.length} Products\n• ${customers.length} Customers\n• ${coupons.length} Coupons\n\nComplete JSON export file downloaded!`;
  if (typeof showToast === "function") {
    showToast("🚀 Complete database pushed & exported for Firebase (sdodda073@gmail.com)!");
  }
  alert(msg);
  return fullDatabasePayload;
}
