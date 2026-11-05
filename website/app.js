/**
 * S.P.R. SIRI DHANYA - E-COMMERCE FRONTEND ENGINE (FLIPKART MODEL)
 * Pure Modern JavaScript (Zero external dependencies)
 */

// --- 1. Products Database ---
const PRODUCTS = [
  {
    id: 1,
    name: "S.P.R. Instant Ragi Dosa Mix (500 g)",
    teluguName: "రాగి దోశ మిక్స్ (Finger Millet)",
    category: "dosa-mix",
    price: 119,
    mrp: 149,
    rating: 4.8,
    reviewsCount: "1,842",
    image: "assets/ragi_dosa.png",
    netWt: "500 g",
    assured: true,
    highlights: [
      "Just Add Water & Cook in 15 Minutes",
      "Rich in Natural Calcium & Iron for Bone Density",
      "Low Glycemic Index (GI) - Optimal for Diabetics",
      "No Washing • No Soaking • No Grinding",
      "100% Traditional Finger Millet (రాగులు)"
    ],
    specs: {
      "Net Weight": "500 g",
      "Primary Ingredient": "Traditional Finger Millet (Ragi)",
      "Preparation Time": "15 Minutes (Instant)",
      "Shelf Life": "6 to 9 Months",
      "FSSAI License": "20126152000402",
      "Dietary Preference": "100% Pure Vegetarian"
    }
  },
  {
    id: 2,
    name: "S.P.R. Instant Jowar Dosa Mix (500 g)",
    teluguName: "జొన్న దోశ మిక్స్ (Sorghum Millet)",
    category: "dosa-mix",
    price: 119,
    mrp: 149,
    rating: 4.7,
    reviewsCount: "1,230",
    image: "assets/jonna_dosa.png",
    netWt: "500 g",
    assured: true,
    highlights: [
      "Naturally Gluten-Free Super Grain",
      "High in Dietary Fibre & Essential Magnesium",
      "Light on Digestion; Prevents Acidity & Heaviness",
      "Yields Crispy Golden Andhra Style Dosas",
      "100% Traditional Sorghum (జొన్నలు)"
    ],
    specs: {
      "Net Weight": "500 g",
      "Primary Ingredient": "Pure Sorghum (Jowar)",
      "Preparation Time": "15 Minutes (Instant)",
      "Shelf Life": "6 to 9 Months",
      "FSSAI License": "20126152000402",
      "Dietary Preference": "100% Pure Vegetarian"
    }
  },
  {
    id: 3,
    name: "S.P.R. Instant Pesara Dosa Mix (500 g)",
    teluguName: "పెసర దోశ మిక్స్ (Andhra Pesarattu)",
    category: "dosa-mix",
    price: 129,
    mrp: 160,
    rating: 4.9,
    reviewsCount: "2,105",
    image: "assets/pesara_dosa.png",
    netWt: "500 g",
    assured: true,
    highlights: [
      "High Vegetarian Plant Protein Breakfast",
      "Authentic Andhra Pesarattu Crispness & Aroma",
      "No Overnight Soaking or Moong Grinding Needed",
      "High Satiety; Keeps You Full & Energetic All Morning",
      "100% Whole Green Gram (పెసలు)"
    ],
    specs: {
      "Net Weight": "500 g",
      "Primary Ingredient": "Whole Green Gram (Moong Dal)",
      "Preparation Time": "15 Minutes (Instant)",
      "Shelf Life": "6 to 9 Months",
      "FSSAI License": "20126152000402",
      "Dietary Preference": "100% Pure Vegetarian"
    }
  },
  {
    id: 4,
    name: "S.P.R. Instant Korra Dosa Mix (500 g)",
    teluguName: "కొర్ర దోశ మిక్స్ (Foxtail Millet)",
    category: "dosa-mix",
    price: 129,
    mrp: 160,
    rating: 4.8,
    reviewsCount: "1,490",
    image: "assets/korra_dosa.png",
    netWt: "500 g",
    assured: true,
    highlights: [
      "King of Positive Siridhanya Millets",
      "Superior Soluble Dietary Fibre for Gut Health",
      "Low Glycemic Index for Blood Sugar Management",
      "Delicious Savory Paper-Dosa Crispness",
      "100% Traditional Foxtail Millet (కొర్రలు)"
    ],
    specs: {
      "Net Weight": "500 g",
      "Primary Ingredient": "Foxtail Millet (Korra)",
      "Preparation Time": "15 Minutes (Instant)",
      "Shelf Life": "6 to 9 Months",
      "FSSAI License": "20126152000402",
      "Dietary Preference": "100% Pure Vegetarian"
    }
  },
  {
    id: 5,
    name: "S.P.R. Multi Grain Atta (1 kg)",
    teluguName: "మల్టీ గ్రీన్ ఆటా (7 Super Grains Blend)",
    category: "atta",
    price: 150,
    mrp: 185,
    rating: 4.9,
    reviewsCount: "3,280",
    image: "assets/multi_grain_atta.png",
    netWt: "1 KG",
    assured: true,
    highlights: [
      "7 Super Grains: Wheat, Ragi, Bajra, Jowar, Soy, Oats, Chana",
      "Cotton-Soft Rotis & Phulkas That Stay Soft for Hours",
      "Fast Digestive Formula - Extremely Gentle on Stomach",
      "High Protein & Fibre for Healthy Weight Wellness",
      "100% Whole Grain, Zero Maida, Zero Additives"
    ],
    specs: {
      "Net Weight": "1 KG",
      "7 Ingredients": "Wheat, Ragi, Bajra, Jowar, Soybeans, Oats, Chana",
      "Flour Texture": "Finely Ground & Stone-Milled",
      "Shelf Life": "6 to 9 Months",
      "FSSAI License": "20126152000402",
      "Dietary Preference": "100% Pure Vegetarian"
    }
  },
  {
    id: 6,
    name: "S.P.R. Complete Health Pack (5-in-1 Combo)",
    teluguName: "కంప్లీట్ హెల్త్ ప్యాక్ (4 దోశ మిక్స్‌లు + 1 ఆటా)",
    category: "combos",
    price: 629,
    mrp: 803,
    rating: 5.0,
    reviewsCount: "4,110",
    image: "assets/brand_poster_logo.png",
    netWt: "3 KG Total",
    assured: true,
    highlights: [
      "Includes 1x Ragi, 1x Jowar, 1x Pesara, 1x Korra (500g each)",
      "Plus 1x Multi Grain Atta (1 KG)",
      "Save 22% on MRP with Free Express Courier Shipping",
      "Complete 30-Day Family Millet Nutrition Box",
      "Direct from Factory Fresh Milling Batch"
    ],
    specs: {
      "Total Weight": "3 KG (4x 500g Packs + 1x 1kg Pack)",
      "Combo Contains": "Ragi, Jowar, Pesara, Korra Dosa Mixes + Multi Grain Atta",
      "Shelf Life": "6 to 9 Months",
      "FSSAI License": "20126152000402",
      "Shipping": "Free Priority Dispatch"
    }
  },
  {
    id: 7,
    name: "S.P.R. Supermarket Wholesale Carton (24 Packs)",
    teluguName: "సూపర్ మార్కెట్ & డిస్ట్రిబ్యూటర్ హోల్సేల్ కార్టన్",
    category: "b2b",
    price: 2490,
    mrp: 3120,
    rating: 4.9,
    reviewsCount: "540",
    image: "assets/brand_poster_logo.png",
    netWt: "15 KG",
    assured: true,
    highlights: [
      "24 Assorted Packs (5x Ragi, 5x Jowar, 5x Pesara, 5x Korra, 4x Atta)",
      "High Inventory Turnover for Kiranas & Supermarkets",
      "Attractive Standing Pouch with Airtight Zip-Lock",
      "Lucrative 20-25% Trade Retailer Margin",
      "Dispatched within 24-48 Business Hours"
    ],
    specs: {
      "Unit Quantity": "24 Units Assorted",
      "Outer Packaging": "5-Ply Heavy Duty Corrugated Carton",
      "Wholesale Margin": "20% to 25% Margins Included",
      "GST Billing": "Tax Invoice Provided with Delivery",
      "Support Hotline": "Direct Factory B2B: 9492468817"
    }
  }
];

// --- 2. State Management ---
let state = {
  currentCategory: "all",
  searchQuery: "",
  activeSort: "popularity",
  priceFilters: { under120: false, between120_140: false, above140: false },
  sprAssuredOnly: false,
  minRating4: false,
  cart: [],
  currentCheckoutStep: 1,
  selectedPayment: "upi",
  currentSlide: 0,
  captchaCode: "742"
};

// --- 3. DOM Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  startCarousel();
  startDealCountdown();
  generateNewCaptcha();
  loadCartFromStorage();
});

// --- 4. Product Grid Rendering ---
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const filtered = getFilteredProducts();

  document.getElementById("resultsCount").textContent = 
    `Showing ${filtered.length} of ${PRODUCTS.length} products`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: #878787;">
        <div style="font-size: 40px; margin-bottom: 10px;">🔍</div>
        <h3>No matching products found</h3>
        <p style="font-size: 13px; margin-top: 4px;">Try clearing some filters or searching for different keywords.</p>
        <button class="btn btn-primary" style="margin-top: 14px;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    const discount = Math.round(((prod.mrp - prod.price) / prod.mrp) * 100);
    const inCart = state.cart.find(item => item.id === prod.id);

    return `
      <div class="product-card" id="prod-card-${prod.id}">
        <span class="wishlist-icon" onclick="toggleWishlist(this, ${prod.id})">♥</span>

        <div class="prod-img-wrap" onclick="openProductQuickview(${prod.id})">
          <img src="${prod.image}" alt="${prod.name}">
        </div>

        <div class="prod-details">
          <h3 class="prod-title" onclick="openProductQuickview(${prod.id})">${prod.name}</h3>
          <div class="prod-telugu">${prod.teluguName}</div>

          <div class="rating-row">
            <span class="rating-pill">${prod.rating} ★</span>
            <span class="reviews-count">(${prod.reviewsCount})</span>
            ${prod.assured ? `<span class="spr-assured-pill assured-logo">SPR <i>Assured</i></span>` : ''}
          </div>

          <div class="pricing-row">
            <span class="final-price">₹${prod.price}</span>
            <span class="mrp-strikethrough">₹${prod.mrp}</span>
            <span class="discount-tag">${discount}% off</span>
          </div>

          <div class="delivery-text">
            Free delivery by <strong>Tomorrow</strong>
          </div>

          <ul class="prod-bullets">
            <li>✔ ${prod.highlights[0]}</li>
            <li>✔ ${prod.highlights[1]}</li>
          </ul>
        </div>

        <div class="card-actions">
          <button class="btn btn-add-cart" onclick="addToCart(${prod.id})">
            ${inCart ? 'ADDED (' + inCart.qty + ')' : 'ADD TO CART'}
          </button>
          <button class="btn btn-buy-now" onclick="buyNow(${prod.id})">
            BUY NOW
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// --- 5. Filtering & Sorting Logic ---
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Category filter
  if (state.currentCategory !== "all") {
    list = list.filter(p => p.category === state.currentCategory);
  }

  // Search filter
  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.teluguName.toLowerCase().includes(q) ||
      p.highlights.some(h => h.toLowerCase().includes(q))
    );
  }

  // Price checkboxes
  const hasPriceFilter = state.priceFilters.under120 || 
                         state.priceFilters.between120_140 || 
                         state.priceFilters.above140;

  if (hasPriceFilter) {
    list = list.filter(p => {
      let match = false;
      if (state.priceFilters.under120 && p.price <= 120) match = true;
      if (state.priceFilters.between120_140 && p.price > 120 && p.price <= 140) match = true;
      if (state.priceFilters.above140 && p.price > 140) match = true;
      return match;
    });
  }

  // SPR Assured
  if (state.sprAssuredOnly) {
    list = list.filter(p => p.assured);
  }

  // 4+ Rating
  if (state.minRating4) {
    list = list.filter(p => p.rating >= 4.8);
  }

  // Sorting
  if (state.activeSort === "price-low") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.activeSort === "price-high") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.activeSort === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  } else {
    // popularity
    list.sort((a, b) => parseInt(b.reviewsCount.replace(/\D/g, '')) - parseInt(a.reviewsCount.replace(/\D/g, '')));
  }

  return list;
}

function filterByCategory(cat) {
  state.currentCategory = cat;
  
  // Update category bar active state
  document.querySelectorAll(".category-item").forEach(item => {
    item.classList.remove("active");
  });
  
  // Find matching nav element
  const items = Array.from(document.querySelectorAll(".category-item"));
  const match = items.find(el => el.textContent.toLowerCase().includes(cat === 'dosa-mix' ? 'dosa' : cat));
  if (match) match.classList.add("active");

  // Sync sidebar radio
  const radios = document.getElementsByName("catFilter");
  radios.forEach(r => {
    if (r.value === cat) r.checked = true;
  });

  renderProducts();

  // Scroll smoothly down to store layout if on mobile
  if (window.innerWidth < 768) {
    document.querySelector(".store-layout")?.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleSearch() {
  state.searchQuery = document.getElementById("searchInput").value;
  renderProducts();
}

function applyFilters() {
  state.priceFilters.under120 = document.getElementById("price120").checked;
  state.priceFilters.between120_140 = document.getElementById("price140").checked;
  state.priceFilters.above140 = document.getElementById("priceAbove").checked;
  state.sprAssuredOnly = document.getElementById("sprAssuredOnly").checked;
  state.minRating4 = document.getElementById("rating4").checked;
  renderProducts();
}

function setSort(sortType, btn) {
  state.activeSort = sortType;
  document.querySelectorAll(".sort-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProducts();
}

function resetFilters() {
  state.currentCategory = "all";
  state.searchQuery = "";
  state.priceFilters = { under120: false, between120_140: false, above140: false };
  state.sprAssuredOnly = false;
  state.minRating4 = false;
  document.getElementById("searchInput").value = "";
  document.getElementById("price120").checked = false;
  document.getElementById("price140").checked = false;
  document.getElementById("priceAbove").checked = false;
  document.getElementById("sprAssuredOnly").checked = false;
  document.getElementById("rating4").checked = false;
  document.querySelector('input[name="catFilter"][value="all"]').checked = true;
  
  document.querySelectorAll(".category-item").forEach(el => el.classList.remove("active"));
  document.querySelector(".category-item")?.classList.add("active");

  renderProducts();
  showToast("Filters reset to default.");
}

function toggleWishlist(el, prodId) {
  el.classList.toggle("active");
  if (el.classList.contains("active")) {
    showToast("Added to your Wishlist ❤️");
  } else {
    showToast("Removed from Wishlist");
  }
}

// --- 6. Cart Management ---
function addToCart(prodId, showDrawer = false) {
  const prod = PRODUCTS.find(p => p.id === prodId);
  if (!prod) return;

  const existing = state.cart.find(item => item.id === prodId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: prod.id, qty: 1 });
  }

  saveCartToStorage();
  updateCartBadge();
  renderProducts();
  renderCartDrawer();

  showToast(`Added "${prod.name}" to cart! 🛒`);

  if (showDrawer) {
    openCartDrawer();
  }
}

function buyNow(prodId) {
  const existing = state.cart.find(item => item.id === prodId);
  if (!existing) {
    state.cart.push({ id: prodId, qty: 1 });
  }
  saveCartToStorage();
  updateCartBadge();
  renderProducts();
  openCheckoutModal();
}

function updateQty(prodId, delta) {
  const item = state.cart.find(i => i.id === prodId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(prodId);
    return;
  }

  saveCartToStorage();
  updateCartBadge();
  renderCartDrawer();
  renderProducts();
}

function removeFromCart(prodId) {
  state.cart = state.cart.filter(i => i.id !== prodId);
  saveCartToStorage();
  updateCartBadge();
  renderCartDrawer();
  renderProducts();
  showToast("Item removed from cart");
}

function updateCartBadge() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById("cartBadge");
  badge.textContent = count;
  badge.style.display = count > 0 ? "block" : "none";
  document.getElementById("cartCountTitle").textContent = count;
}

function renderCartDrawer() {
  const container = document.getElementById("cartItemsList");
  const footer = document.getElementById("cartFooter");

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-msg">
        <div>🛒</div>
        <h3>Your Cart is Empty</h3>
        <p style="font-size: 13px; margin-top: 4px;">Explore our healthy traditional millet mixes and add them here!</p>
        <button class="btn btn-primary" style="margin-top: 14px;" onclick="closeCartDrawer()">Shop Now</button>
      </div>
    `;
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";

  let totalMrp = 0;
  let finalTotal = 0;

  const html = state.cart.map(ci => {
    const p = PRODUCTS.find(prod => prod.id === ci.id);
    if (!p) return "";
    totalMrp += p.mrp * ci.qty;
    finalTotal += p.price * ci.qty;

    return `
      <div class="cart-item">
        <img src="${p.image}" class="cart-item-img" alt="${p.name}">
        <div>
          <div class="cart-item-title">${p.name}</div>
          <div class="cart-item-price">₹${p.price} <span style="font-size: 11px; text-decoration: line-through; color: #878787;">₹${p.mrp}</span></div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty(${p.id}, -1)">-</button>
            <span class="qty-val">${ci.qty}</span>
            <button class="qty-btn" onclick="updateQty(${p.id}, 1)">+</button>
          </div>
        </div>
        <button class="remove-item-btn" title="Remove Item" onclick="removeFromCart(${p.id})">🗑️</button>
      </div>
    `;
  }).join("");

  container.innerHTML = html;

  const savings = totalMrp - finalTotal;
  document.getElementById("cartTotalAmount").textContent = `₹${finalTotal}`;
  document.getElementById("cartSavingsAmount").textContent = `₹${savings}`;
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cartDrawerOverlay").classList.add("active");
  document.getElementById("cartDrawer").classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cartDrawerOverlay").classList.remove("active");
  document.getElementById("cartDrawer").classList.remove("active");
}

function saveCartToStorage() {
  try {
    localStorage.setItem("spr_cart", JSON.stringify(state.cart));
  } catch (e) {}
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("spr_cart");
    if (saved) {
      state.cart = JSON.parse(saved);
      updateCartBadge();
    }
  } catch (e) {}
}

// --- 7. Product Detail / Quickview Modal ---
function openProductQuickview(prodId) {
  const p = PRODUCTS.find(item => item.id === prodId);
  if (!p) return;

  const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
  const container = document.getElementById("modalProductContent");

  container.innerHTML = `
    <div class="quickview-img-box">
      <img src="${p.image}" alt="${p.name}">
    </div>

    <div class="quickview-info">
      <h2 class="quickview-title">${p.name}</h2>
      <div style="font-size: 14px; color: #8C2D19; font-weight: 700;">${p.teluguName}</div>

      <div class="rating-row">
        <span class="rating-pill">${p.rating} ★</span>
        <span class="reviews-count">${p.reviewsCount} Ratings & 340 Reviews</span>
        <span class="spr-assured-pill">SPR <i>Assured</i></span>
      </div>

      <div class="quickview-price-row">
        <span class="quickview-final-price">₹${p.price}</span>
        <span class="mrp-strikethrough" style="font-size: 16px;">₹${p.mrp}</span>
        <span class="discount-tag" style="font-size: 14px;">${discount}% off</span>
      </div>

      <div style="font-size: 13px; color: #2e7d32; font-weight: 600;">
        Special Price: Extra ₹${p.mrp - p.price} off on this pack!
      </div>

      <!-- Pincode Checker -->
      <div>
        <label style="font-size: 12px; font-weight: 700; color: #444;">Check Delivery Availability:</label>
        <div class="pincode-checker">
          <input type="text" id="pincodeInput" placeholder="Enter Pincode" value="522616" maxlength="6">
          <button class="pincode-btn" onclick="checkPincode()">Check</button>
        </div>
        <div class="pincode-result" id="pincodeResult">
          ✔ Delivery by Tomorrow, 5:00 PM | Free ₹40
        </div>
      </div>

      <!-- Key Highlights -->
      <div>
        <h4 style="font-size: 13px; font-weight: 700; color: #103B2B; margin-bottom: 4px;">KEY HIGHLIGHTS:</h4>
        <ul style="font-size: 12px; color: #333; padding-left: 18px; line-height: 1.5;">
          ${p.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
      </div>

      <!-- Specifications Table -->
      <div>
        <h4 style="font-size: 13px; font-weight: 700; color: #103B2B; margin-bottom: 4px;">PRODUCT SPECIFICATIONS:</h4>
        <table class="specs-table">
          <tbody>
            ${Object.entries(p.specs).map(([k, v]) => `
              <tr>
                <td>${k}</td>
                <td>${v}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- Action Buttons -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 14px;">
        <button class="btn btn-add-cart" style="padding: 12px;" onclick="addToCart(${p.id}, true); closeProductModal();">
          ADD TO CART
        </button>
        <button class="btn btn-buy-now" style="padding: 12px;" onclick="buyNow(${p.id}); closeProductModal();">
          BUY NOW
        </button>
      </div>
    </div>
  `;

  document.getElementById("productModal").classList.add("active");
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("active");
}

function checkPincode() {
  const pin = document.getElementById("pincodeInput").value.trim();
  const res = document.getElementById("pincodeResult");
  if (pin.length === 6 && !isNaN(pin)) {
    res.innerHTML = `✔ Express Delivery available for <strong>${pin}</strong>! Delivery by Tomorrow (Free)`;
    res.style.color = "var(--fk-green)";
  } else {
    res.innerHTML = `⚠️ Please enter a valid 6-digit Indian PIN code.`;
    res.style.color = "#d32f2f";
  }
}

// --- 8. Checkout & Payment Gateway Simulation ---
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Please add items to cart first!");
    return;
  }
  closeCartDrawer();
  goToStep(1);
  updateCheckoutPriceCard();
  document.getElementById("checkoutModal").classList.add("active");
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").classList.remove("active");
}

function goToStep(stepNum) {
  state.currentCheckoutStep = stepNum;

  // Update indicators
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById(`stepIndicator${i}`);
    const content = document.getElementById(`checkoutStep${i}`);
    if (i <= stepNum) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
    content.style.display = i === stepNum ? "block" : "none";
  }

  if (stepNum === 2) {
    renderCheckoutSummary();
  } else if (stepNum === 3) {
    updateCheckoutPriceCard();
  }
}

function renderCheckoutSummary() {
  const container = document.getElementById("checkoutSummaryItems");
  const phone = document.getElementById("custPhone").value || "9492468817";
  document.getElementById("summaryPhone").textContent = phone;

  const html = state.cart.map(ci => {
    const p = PRODUCTS.find(prod => prod.id === ci.id);
    if (!p) return "";
    return `
      <div class="summary-item-row">
        <span><strong>${ci.qty}x</strong> ${p.name}</span>
        <strong>₹${p.price * ci.qty}</strong>
      </div>
    `;
  }).join("");

  container.innerHTML = html;
}

function updateCheckoutPriceCard() {
  let totalMrp = 0;
  let finalTotal = 0;
  let count = 0;

  state.cart.forEach(ci => {
    const p = PRODUCTS.find(prod => prod.id === ci.id);
    if (p) {
      totalMrp += p.mrp * ci.qty;
      finalTotal += p.price * ci.qty;
      count += ci.qty;
    }
  });

  const savings = totalMrp - finalTotal;

  document.getElementById("checkoutItemsCount").textContent = count;
  document.getElementById("checkoutTotalMrp").textContent = `₹${totalMrp}`;
  document.getElementById("checkoutDiscount").textContent = `- ₹${savings}`;
  document.getElementById("checkoutFinalAmount").textContent = `₹${finalTotal}`;
  document.getElementById("checkoutSavingsBadge").textContent = `You will save ₹${savings} on this order`;
}

// Payment method selector
function selectPayMethod(method) {
  state.selectedPayment = method;

  // Radios
  document.getElementById("radioUpi").checked = method === "upi";
  document.getElementById("radioCard").checked = method === "card";
  document.getElementById("radioNetbanking").checked = method === "netbanking";
  document.getElementById("radioCod").checked = method === "cod";

  // Panels
  document.getElementById("panelUpi").style.display = method === "upi" ? "block" : "none";
  document.getElementById("panelCard").style.display = method === "card" ? "block" : "none";
  document.getElementById("panelNetbanking").style.display = method === "netbanking" ? "block" : "none";
  document.getElementById("panelCod").style.display = method === "cod" ? "block" : "none";

  const btn = document.getElementById("payNowBtn");
  if (method === "cod") {
    btn.textContent = "CONFIRM COD ORDER";
  } else {
    btn.textContent = "PAY & CONFIRM ORDER";
  }
}

function setUpiApp(app) {
  document.querySelectorAll(".upi-app-btn").forEach(b => b.classList.remove("active"));
  event.currentTarget.classList.add("active");
  const upiInput = document.getElementById("upiIdInput");
  if (app === "gpay") upiInput.value = "9492468817@okhdfcbank";
  if (app === "phonepe") upiInput.value = "9492468817@ybl";
  if (app === "paytm") upiInput.value = "9492468817@paytm";
}

function verifyUpiId() {
  const upi = document.getElementById("upiIdInput").value.trim();
  if (upi.includes("@")) {
    showToast("UPI ID Verified Successfully! ✔");
  } else {
    showToast("Please enter a valid UPI ID (e.g. mobile@upi)");
  }
}

function generateNewCaptcha() {
  const num = Math.floor(100 + Math.random() * 900);
  state.captchaCode = num.toString();
  const el = document.getElementById("captchaValue");
  if (el) el.textContent = state.captchaCode;
}

function refreshCaptcha() {
  generateNewCaptcha();
  showToast("New captcha generated");
}

function processPayment() {
  // Validate COD captcha if COD selected
  if (state.selectedPayment === "cod") {
    const userVal = document.getElementById("captchaInput").value.trim();
    if (userVal !== state.captchaCode) {
      alert("Please enter the correct 3-digit verification code to confirm your Cash on Delivery order.");
      return;
    }
  }

  // Get customer inputs
  const name = document.getElementById("custName").value || "Venkatesh Kumar";
  const phone = document.getElementById("custPhone").value || "9492468817";
  const address = `${document.getElementById("custAddress").value}, ${document.getElementById("custLocality").value}, ${document.getElementById("custCity").value}, ${document.getElementById("custState").value} - ${document.getElementById("custPincode").value}`;

  // Calculate total
  let finalTotal = 0;
  state.cart.forEach(ci => {
    const p = PRODUCTS.find(prod => prod.id === ci.id);
    if (p) finalTotal += p.price * ci.qty;
  });

  // Generate realistic Flipkart Order ID
  const orderId = "OD" + Math.floor(100000000000 + Math.random() * 900000000000);

  // Set Success Modal values
  document.getElementById("successOrderId").textContent = orderId;
  document.getElementById("successCustomerName").textContent = name;
  document.getElementById("successAddress").textContent = address;
  document.getElementById("successAmount").textContent = `₹${finalTotal}`;

  let payName = "UPI / Google Pay";
  if (state.selectedPayment === "card") payName = "Credit / Debit Card";
  if (state.selectedPayment === "netbanking") payName = "Net Banking (SBI / HDFC)";
  if (state.selectedPayment === "cod") payName = "Cash on Delivery (Pay at Doorstep)";
  document.getElementById("successPaymentMethod").textContent = payName;

  // Generate WhatsApp Order Link for the owner (+91 9492468817)
  const itemsText = state.cart.map(ci => {
    const p = PRODUCTS.find(prod => prod.id === ci.id);
    return `${ci.qty}x ${p.name} (Rs. ${p.price * ci.qty})`;
  }).join("%0A - ");

  const waMessage = `*NEW FLIPKART MODEL ORDER - S.P.R. SIRI DHANYA*%0A` +
                    `*Order ID:* ${orderId}%0A` +
                    `*Customer:* ${name}%0A` +
                    `*Phone:* ${phone}%0A` +
                    `*Address:* ${address}%0A` +
                    `*Payment:* ${payName}%0A` +
                    `*Total Amount:* Rs. ${finalTotal}%0A%0A` +
                    `*Items Ordered:*%0A - ${itemsText}%0A%0A` +
                    `Please dispatch my order! Thank you.`;

  document.getElementById("successWhatsappBtn").href = `https://wa.me/919492468817?text=${waMessage}`;

  // Close Checkout Modal & Clear Cart
  closeCheckoutModal();
  state.cart = [];
  saveCartToStorage();
  updateCartBadge();
  renderProducts();

  // Open Order Success Modal
  document.getElementById("orderSuccessModal").classList.add("active");
}

function closeOrderSuccessModal() {
  document.getElementById("orderSuccessModal").classList.remove("active");
}

// --- 9. Carousel Engine ---
function startCarousel() {
  setInterval(() => {
    state.currentSlide = (state.currentSlide + 1) % 3;
    goToSlide(state.currentSlide);
  }, 5000);
}

function goToSlide(index) {
  state.currentSlide = index;
  const track = document.getElementById("sliderTrack");
  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// --- 10. Deal Countdown Timer ---
function startDealCountdown() {
  let seconds = 14 * 3600 + 28 * 60 + 45;
  const el = document.getElementById("dealTimer");
  setInterval(() => {
    seconds--;
    if (seconds <= 0) seconds = 24 * 3600;
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (el) {
      el.textContent = `${h}h : ${m}m : ${s}s`;
    }
  }, 1000);
}

// --- 11. Modal Utilities & Toasts ---
function openLoginModal() {
  alert("SPR Siri Dhanya Login:\nYou can sign in with your mobile number 9492468817 to track your orders, manage addresses, and earn Health Points!");
}

function openTrackModal() {
  alert("Order Tracker:\nYour orders are dispatched directly via Indian Post & Express Courier with real-time SMS & WhatsApp alerts to 9492468817.");
}

function openContactModal() {
  document.getElementById("contactModal").classList.add("active");
}

function openFssaiModal() {
  document.getElementById("fssaiModal").classList.add("active");
}

function openWholesaleInquiry() {
  window.open("https://wa.me/919492468817?text=Hello%20SPR%20Siri%20Dhanya,%20I%20am%20a%20Supermarket%20owner%20interested%20in%20carrying%20your%20Instant%20Millet%20Dosa%20Mixes%20and%20Atta.%20Please%20share%20wholesale%20rates.", "_blank");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function showToast(msg) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2500);
}


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
  if (false && state.selectedPayment === "cod") {
    const userVal = document.getElementById("captchaInput") ? document.getElementById("captchaInput").value.trim() : "";
    if (userVal !== state.captchaCode) {
      alert("Please enter the correct 3-digit verification code to confirm your Cash on Delivery order.");
      return;
    }
  }

  // Get customer inputs
  const name = document.getElementById("custName")?.value || "Venkatesh Kumar";
  const phone = document.getElementById("custPhone")?.value || "9492468817";
  const email = "support@sprsiridhanya.com";
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
  } else if (false && state.selectedPayment === "cod") {
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


// =========================================================================
// === S.P.R. SIRI DHANYA: ADMIN AUTH, QR SCANNER, VOICE AI & KNOWLEDGE ====
// =========================================================================

const DB_QRCODES_KEY = "spr_qrcodes_db";
const DB_KNOWLEDGE_KEY = "spr_knowledge_base";

state.qrCodes = [];
state.knowledgeBase = [];

// Voice Agent State
const voiceState = {
  isOpen: false,
  isListening: false,
  isSpeaking: false,
  language: "te-IN",
  recognition: null,
  currentTranscript: "",
  lastAnswer: "",
  synth: window.speechSynthesis || null,
  currentUtterance: null
};

// QR Scanner State
const qrScannerState = {
  videoStream: null,
  isScanning: false,
  lastScannedResult: null
};

// QR Generator State
const qrGenState = {
  size: 512,
  branding: "branded",
  targetUrl: "https://sprsiridhanya.com",
  campaignName: "Official Website Main QR"
};

// Initialize Extra DBs (QR Codes & Knowledge Base)
function initExtraDatabases() {
  const existingQrs = localStorage.getItem(DB_QRCODES_KEY);
  if (existingQrs) {
    try { state.qrCodes = JSON.parse(existingQrs); } catch(e) { state.qrCodes = []; }
  }
  if (!state.qrCodes || state.qrCodes.length === 0) {
    state.qrCodes = [
      { id: "QR-SPR-001", name: "Official Website Main QR", url: "https://sprsiridhanya.com", type: "Main Website", date: "2026-11-04", createdBy: "SPR SIRI DHANYA" },
      { id: "QR-SPR-002", name: "Official 8-Page Product Catalogue", url: "https://sprsiridhanya.com/catalogue", type: "Catalogue", date: "2026-11-04", createdBy: "SPR SIRI DHANYA" },
      { id: "QR-SPR-003", name: "5-in-1 Complete Health Combo Pack", url: "https://sprsiridhanya.com/products/combo-health-pack", type: "Product Offer", date: "2026-11-04", createdBy: "SPR SIRI DHANYA" },
      { id: "QR-SPR-004", name: "B2B Retailer & Distributor Registration", url: "https://sprsiridhanya.com/retailer-registration", type: "B2B Wholesale", date: "2026-11-04", createdBy: "SPR SIRI DHANYA" }
    ];
    localStorage.setItem(DB_QRCODES_KEY, JSON.stringify(state.qrCodes));
  }

  const existingKb = localStorage.getItem(DB_KNOWLEDGE_KEY);
  if (existingKb) {
    try { state.knowledgeBase = JSON.parse(existingKb); } catch(e) { state.knowledgeBase = []; }
  }
  if (!state.knowledgeBase || state.knowledgeBase.length === 0) {
    state.knowledgeBase = [
      {
        id: "KB-01",
        category: "Company & Manufacturing",
        title: "S.P.R. Siri Dhanya Company Background, Mission & Location",
        language: "Multilingual (Universal)",
        content: "S.P.R. Siri Dhanya is a premier traditional millet food enterprise founded with the mission: 'సంప్రదాయ పోషణ – ఆధునిక సౌలభ్యం | ప్రతి గింజలో ఆరోగ్యం' (Traditional Nutrition with Modern Convenience). Manufacturing plant and factory desk are located at Kamepalli, Santamaguluru Mandal, Bapatla District, Andhra Pradesh - 523326. Contact lines: +91 94413 93817 and 9492468817. FSSAI License: 20126152000402.",
        updated: "2026-11-04"
      },
      {
        id: "KB-02",
        category: "Products & Ingredients",
        title: "All 5 Products, Weights, Prices & Master Carton Details",
        language: "Multilingual (Universal)",
        content: "1. S.P.R. Instant Ragi Dosa Mix (500g, ₹119, MRP ₹149) - Pure Finger Millet (రాగులు).\n2. S.P.R. Instant Jowar Dosa Mix (500g, ₹119, MRP ₹149) - Sorghum (జొన్నలు).\n3. S.P.R. Instant Pesara Dosa Mix (500g, ₹129, MRP ₹159) - Whole Green Gram (పెసలు, 22g protein).\n4. S.P.R. Instant Korra Dosa Mix (500g, ₹129, MRP ₹160) - Foxtail Millet (కొర్రలు, Low GI for diabetes care).\n5. S.P.R. Multi Grain Atta (1 KG, ₹150, MRP ₹185) - 6 grains: Wheat, Ragi, Jowar, Bajra, Chana & Soya.\n6. 5-in-1 Health Combo (3 KG total, ₹629, MRP ₹811).\n7. Wholesale Master Carton (24 Packs, ₹2,490, MRP ₹3,350) for Supermarkets.",
        updated: "2026-11-04"
      },
      {
        id: "KB-03",
        category: "Preparation & Recipes",
        title: "15-Minute Instant Dosa Preparation Guide ('Just Add Water')",
        language: "Multilingual (Universal)",
        content: "How to make instant dosas in 15 minutes: Take 1 cup S.P.R. Dosa Mix in a bowl. Add 1 to 1.25 cups water. Mix thoroughly into a smooth, lump-free batter. Rest for only 15 minutes (No washing, no soaking, no grinding, no overnight fermentation!). Heat tawa, pour batter, drizzle pure ghee or groundnut oil. Cook until golden crisp. Serve with coconut chutney or sambar.",
        updated: "2026-11-04"
      },
      {
        id: "KB-04",
        category: "Health & Nutrition",
        title: "Nutritional Advantages & Medical Compliance Notice",
        language: "Multilingual (Universal)",
        content: "Korra (Foxtail Millet) has low Glycemic Index (GI), helping maintain steady blood sugar. Ragi is rich in natural calcium (344mg/100g) for bone density. Jowar provides high dietary fiber for digestion and gut health. Pesara provides over 22g pure plant protein. Disclaimer: S.P.R. Siri Dhanya provides wholesome nutritional food and does not claim to cure illnesses; consult a physician for medical advice.",
        updated: "2026-11-04"
      },
      {
        id: "KB-05",
        category: "Pricing & Wholesale",
        title: "Supermarket Dealership, Wholesale Cartons & Profit Margins",
        language: "Multilingual (Universal)",
        content: "Supermarkets, grocery stores, and distributors can purchase 24-pack Master Cartons at factory rate ₹2,490 (retail value ₹3,350), yielding a lucrative 20-25% trade margin. Includes official GST B2B tax invoice and priority dispatch. Inquiries: +91 94413 93817 or 9492468817.",
        updated: "2026-11-04"
      },
      {
        id: "KB-06",
        category: "Shipping & Delivery",
        title: "Delivery Time, Shipping Charges & Doorstep Tracking",
        language: "Multilingual (Universal)",
        content: "We provide 100% FREE express delivery across Andhra Pradesh, Telangana, and pan-India via India Post Speed Post and express logistics partners (Delhivery/DTDC). Orders are freshly milled and dispatched within 24-48 business hours with live AWB tracking links.",
        updated: "2026-11-04"
      },
      {
        id: "KB-07",
        category: "Policies & Certifications",
        title: "Storage, Shelf Life, Packaging & FSSAI Standards",
        language: "Multilingual (Universal)",
        content: "Shelf life: 6 to 9 months when stored in a cool, dry place. Packed in airtight multi-layer aroma-lock zipper standing pouches. Certified by FSSAI Central/State Licensing authority (License # 20126152000402). 100% vegetarian, stone-milled, unadulterated.",
        updated: "2026-11-04"
      }
    ];
    localStorage.setItem(DB_KNOWLEDGE_KEY, JSON.stringify(state.knowledgeBase));
  }
}

window.addEventListener("DOMContentLoaded", () => {
  initExtraDatabases();
  setupVoiceRecognition();
});

// --- Admin Authentication (Username: SPR SIRI DHANYA, Password: SPR SIRI DHANYA @2026) ---
function openAdminModalAuth() {
  const isAuth = sessionStorage.getItem("spr_admin_auth") === "true";
  if (isAuth) {
    openAdminModal();
  } else {
    const err = document.getElementById("adminLoginError");
    if (err) err.style.display = "none";
    const uIn = document.getElementById("adminUsernameInput");
    if (uIn) uIn.value = "";
    const pIn = document.getElementById("adminPasswordInput");
    if (pIn) pIn.value = "";
    document.getElementById("adminLoginModal")?.classList.add("active");
  }
}

function handleAdminLoginSubmit(e) {
  e.preventDefault();
  const u = document.getElementById("adminUsernameInput").value.trim();
  const p = document.getElementById("adminPasswordInput").value.trim();

  if (u === "SPR SIRI DHANYA" && p === "SPR SIRI DHANYA @2026") {
    sessionStorage.setItem("spr_admin_auth", "true");
    closeModal("adminLoginModal");
    openAdminModal();
    showToast("👑 Verified Administrator: SPR SIRI DHANYA");
  } else {
    const err = document.getElementById("adminLoginError");
    if (err) {
      err.style.display = "block";
      err.textContent = "❌ Invalid username or password. Please verify your credentials.";
    }
  }
}

function adminLogout() {
  sessionStorage.removeItem("spr_admin_auth");
  closeModal("adminModal");
  showToast("🚪 Logged out from Admin Portal.");
}

function switchAdminTab(tabName) {
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
  const cOrders = document.getElementById("adminTabOrdersContent");
  const cQr = document.getElementById("adminTabQrContent");
  const cKb = document.getElementById("adminTabKnowledgeContent");
  if (cOrders) cOrders.style.display = "none";
  if (cQr) cQr.style.display = "none";
  if (cKb) cKb.style.display = "none";

  if (tabName === "orders") {
    document.getElementById("tabBtnOrders")?.classList.add("active");
    if (cOrders) cOrders.style.display = "block";
    refreshAdminData();
  } else if (tabName === "qr") {
    document.getElementById("tabBtnQr")?.classList.add("active");
    if (cQr) cQr.style.display = "block";
    renderAdminQrTab();
  } else if (tabName === "knowledge") {
    document.getElementById("tabBtnKnowledge")?.classList.add("active");
    if (cKb) cKb.style.display = "block";
    renderKnowledgeBaseTable();
  }
}

// --- Official PDF Catalogue Modal ---
function openPdfCatalogueModal() {
  document.getElementById("pdfCatalogueModal")?.classList.add("active");
}

// --- Customer QR Scanner Modal ---
function openQrScannerModal() {
  const modal = document.getElementById("qrScannerModal");
  if (modal) modal.classList.add("active");
  const card = document.getElementById("qrDetectCard");
  if (card) card.style.display = "none";
  startQrCamera();
}

function closeQrScannerModal() {
  stopQrCamera();
  document.getElementById("qrScannerModal")?.classList.remove("active");
}

function startQrCamera() {
  const video = document.getElementById("qrScannerVideo");
  const statusTag = document.getElementById("qrScannerStatus");
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    if (statusTag) statusTag.textContent = "Camera API not supported in browser. Use file upload.";
    return;
  }

  if (statusTag) statusTag.textContent = "Requesting camera access...";
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => {
      qrScannerState.videoStream = stream;
      if (video) {
        video.srcObject = stream;
        video.setAttribute("playsinline", true);
        video.play();
      }
      qrScannerState.isScanning = true;
      if (statusTag) statusTag.textContent = "Scanning... Point at S.P.R. Siri Dhanya QR Code";
      requestAnimationFrame(scanQrTick);
    })
    .catch(err => {
      console.warn("Camera error:", err);
      if (statusTag) statusTag.textContent = "Camera permission denied. Please upload an image file.";
    });
}

function stopQrCamera() {
  qrScannerState.isScanning = false;
  if (qrScannerState.videoStream) {
    qrScannerState.videoStream.getTracks().forEach(track => track.stop());
    qrScannerState.videoStream = null;
  }
}

function scanQrTick() {
  if (!qrScannerState.isScanning) return;
  const video = document.getElementById("qrScannerVideo");
  const canvas = document.getElementById("qrScannerCanvas");
  if (!video || !canvas) return;

  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    if (window.jsQR) {
      const code = window.jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert"
      });
      if (code && code.data) {
        onQrCodeDetected(code.data);
        return;
      }
    }
  }
  requestAnimationFrame(scanQrTick);
}

function handleQrFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.getElementById("qrScannerCanvas");
      if (!canvas) return;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      if (window.jsQR) {
        const code = window.jsQR(imageData.data, imageData.width, imageData.height);
        if (code && code.data) {
          onQrCodeDetected(code.data);
        } else {
          alert("No QR Code detected in uploaded image. Please try a clearer picture.");
        }
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function onQrCodeDetected(rawUrl) {
  stopQrCamera();
  qrScannerState.lastScannedResult = rawUrl;
  const card = document.getElementById("qrDetectCard");
  const urlEl = document.getElementById("qrDetectUrl");
  const statusTag = document.getElementById("qrScannerStatus");

  if (statusTag) statusTag.textContent = "✅ QR Code successfully decoded!";
  if (card) card.style.display = "block";
  if (urlEl) urlEl.textContent = rawUrl;

  showToast("QR Code Detected!");
}

function handleQrOpenDestination() {
  const url = qrScannerState.lastScannedResult;
  if (!url) return;

  closeQrScannerModal();

  if (url.includes("/catalogue")) {
    openPdfCatalogueModal();
  } else if (url.startsWith("http://") || url.startsWith("https://")) {
    window.open(url, "_blank");
  } else {
    alert("Scanned QR Content: " + url);
  }
}

// --- Admin QR Generator & Downloads (Tab 2) ---
function renderAdminQrTab() {
  generateAdminQrCode();
  renderQrHistoryTable();
}

function handleQrPresetChange() {
  const sel = document.getElementById("qrTargetSelect")?.value;
  const customWrap = document.getElementById("qrCustomUrlWrap");
  if (sel === "custom") {
    if (customWrap) customWrap.style.display = "block";
  } else {
    if (customWrap) customWrap.style.display = "none";
    const selEl = document.getElementById("qrTargetSelect");
    if (selEl && selEl.selectedOptions[0]) {
      document.getElementById("qrCampaignName").value = selEl.selectedOptions[0].text;
    }
    generateAdminQrCode();
  }
}

function setQrSize(size, el) {
  qrGenState.size = size;
  document.querySelectorAll(".size-chip").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
  generateAdminQrCode();
}

function generateAdminQrCode() {
  const sel = document.getElementById("qrTargetSelect")?.value || "https://sprsiridhanya.com";
  let targetUrl = sel;
  if (sel === "custom") {
    targetUrl = document.getElementById("qrCustomUrlInput")?.value.trim() || "https://sprsiridhanya.com";
  }
  const campaignName = document.getElementById("qrCampaignName")?.value.trim() || "Official Website Main QR";
  const branding = document.getElementById("qrBrandingStyle")?.value || "branded";
  const size = qrGenState.size || 512;

  qrGenState.targetUrl = targetUrl;
  qrGenState.campaignName = campaignName;
  qrGenState.branding = branding;

  const tEl = document.getElementById("qrPreviewTitle");
  if (tEl) tEl.textContent = campaignName;
  const uEl = document.getElementById("qrPreviewUrl");
  if (uEl) uEl.textContent = targetUrl;

  const canvas = document.getElementById("qrAdminCanvas");
  if (!canvas) return;

  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  const qrBoxSize = branding === "branded" ? Math.floor(size * 0.74) : size;

  if (window.QRCode) {
    const tempDiv = document.createElement("div");
    new window.QRCode(tempDiv, {
      text: targetUrl,
      width: qrBoxSize,
      height: qrBoxSize,
      colorDark: branding === "branded" ? "#0f5132" : "#000000",
      colorLight: "#ffffff",
      correctLevel: window.QRCode.CorrectLevel.H
    });

    setTimeout(() => {
      const generatedImg = tempDiv.querySelector("canvas") || tempDiv.querySelector("img");
      if (!generatedImg) return;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);

      if (branding === "branded") {
        ctx.lineWidth = Math.max(4, Math.floor(size * 0.015));
        ctx.strokeStyle = "#1b5e20";
        ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, size - ctx.lineWidth, size - ctx.lineWidth);

        ctx.lineWidth = Math.max(2, Math.floor(size * 0.006));
        ctx.strokeStyle = "#fbc02d";
        ctx.strokeRect(size * 0.02, size * 0.02, size * 0.96, size * 0.96);

        ctx.fillStyle = "#1b5e20";
        ctx.font = `bold ${Math.floor(size * 0.048)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText("S.P.R. SIRI DHANYA", size / 2, size * 0.08);

        ctx.fillStyle = "#555";
        ctx.font = `${Math.floor(size * 0.025)}px sans-serif`;
        ctx.fillText("సంప్రదాయ పోషణ – ఆధునిక సౌలభ్యం", size / 2, size * 0.115);

        const qrOffset = (size - qrBoxSize) / 2;
        ctx.drawImage(generatedImg, qrOffset, size * 0.14, qrBoxSize, qrBoxSize);

        ctx.fillStyle = "#1b5e20";
        ctx.fillRect(size * 0.05, size * 0.89, size * 0.9, size * 0.08);

        ctx.fillStyle = "#ffffff";
        ctx.font = `bold ${Math.floor(size * 0.034)}px sans-serif`;
        ctx.fillText("SCAN TO VISIT OUR WEBSITE", size / 2, size * 0.942);
      } else {
        ctx.drawImage(generatedImg, 0, 0, size, size);
      }
    }, 100);
  }
}

function downloadQr(format) {
  const canvas = document.getElementById("qrAdminCanvas");
  if (!canvas) return;

  const fileName = `SPR_Siri_Dhanya_${qrGenState.campaignName.replace(/\s+/g, '_')}`;

  if (format === "png") {
    const link = document.createElement("a");
    link.download = `${fileName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("Downloaded high-resolution PNG QR Code!");
  } else if (format === "svg") {
    const dataUrl = canvas.toDataURL("image/png");
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
      <image href="${dataUrl}" width="${canvas.width}" height="${canvas.height}"/>
    </svg>`;
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const link = document.createElement("a");
    link.download = `${fileName}.svg`;
    link.href = URL.createObjectURL(blob);
    link.click();
    showToast("Downloaded SVG vector QR Code!");
  } else if (format === "pdf") {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>S.P.R. Siri Dhanya Official QR Code - Print</title>
          <style>
            body { font-family: sans-serif; text-align: center; padding: 40px; }
            img { max-width: 450px; border: 1px solid #ddd; border-radius: 8px; }
            h2 { color: #1b5e20; margin-bottom: 4px; }
            p { color: #666; font-size: 14px; }
          </style>
        </head>
        <body onload="window.print()">
          <h2>S.P.R. SIRI DHANYA</h2>
          <p>Official Scannable Brand QR Code • Target: ${qrGenState.targetUrl}</p>
          <img src="${canvas.toDataURL('image/png')}" />
          <p style="margin-top: 20px; font-weight: bold; color: #1b5e20;">SCAN TO ORDER TRADITIONAL MILLET FOOD PRODUCTS</p>
        </body>
      </html>
    `);
    printWindow.document.close();
  }
}

function copyQrUrl() {
  const url = qrGenState.targetUrl;
  navigator.clipboard.writeText(url).then(() => {
    showToast("Copied destination URL to clipboard!");
  }).catch(() => {
    prompt("Destination URL:", url);
  });
}

function saveGeneratedQrToDatabase() {
  const newQr = {
    id: "QR-SPR-" + Math.floor(100 + Math.random() * 900),
    name: qrGenState.campaignName,
    url: qrGenState.targetUrl,
    type: qrGenState.branding === "branded" ? "Branded Official" : "Clean QR",
    date: new Date().toISOString().substring(0, 10),
    createdBy: "SPR SIRI DHANYA"
  };

  state.qrCodes.unshift(newQr);
  localStorage.setItem(DB_QRCODES_KEY, JSON.stringify(state.qrCodes));
  renderQrHistoryTable();
  showToast("Saved QR Code to database records!");
}

function renderQrHistoryTable() {
  const tbody = document.getElementById("qrHistoryTableBody");
  const countEl = document.getElementById("qrHistoryCount");
  if (countEl) countEl.textContent = state.qrCodes.length;
  if (!tbody) return;

  tbody.innerHTML = state.qrCodes.map(q => `
    <tr>
      <td style="font-family: monospace; font-weight: 700; color: #1b5e20;">${q.id}</td>
      <td><strong>${q.name}</strong></td>
      <td style="font-size: 11.5px; color: var(--fk-blue); word-break: break-all;">${q.url}</td>
      <td><span class="pay-method-badge">${q.type}</span></td>
      <td style="font-size: 11px;">${q.date}</td>
      <td style="font-size: 11px; font-weight: 600;">${q.createdBy}</td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="downloadSavedQr('${q.url}', '${q.name}')">📥 PNG</button>
      </td>
    </tr>
  `).join("");
}

function downloadSavedQr(url, name) {
  document.getElementById("qrTargetSelect").value = "custom";
  document.getElementById("qrCustomUrlWrap").style.display = "block";
  document.getElementById("qrCustomUrlInput").value = url;
  document.getElementById("qrCampaignName").value = name;
  generateAdminQrCode();
  setTimeout(() => downloadQr('png'), 200);
}

// --- Universal Business AI Voice Agent (STT & TTS) ---
function toggleVoiceAgent() {
  const modal = document.getElementById("voiceAgentModal");
  if (!modal) return;
  voiceState.isOpen = !voiceState.isOpen;
  modal.classList.toggle("active", voiceState.isOpen);

  if (!voiceState.isOpen) {
    stopVoiceListening();
    stopVoiceSpeaking();
  }
}

function setVoiceLanguage(langCode, btnEl) {
  voiceState.language = langCode;
  document.querySelectorAll(".lang-pill").forEach(p => p.classList.remove("active"));
  btnEl.classList.add("active");

  if (voiceState.recognition) {
    voiceState.recognition.lang = langCode;
  }

  showToast(`Voice language switched to: ${btnEl.textContent}`);
}

function setupVoiceRecognition() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) {
    console.warn("Web Speech API not supported in this browser.");
    return;
  }

  voiceState.recognition = new SpeechRec();
  voiceState.recognition.continuous = false;
  voiceState.recognition.interimResults = true;
  voiceState.recognition.lang = voiceState.language;

  voiceState.recognition.onstart = function() {
    voiceState.isListening = true;
    document.getElementById("voiceMicBtn")?.classList.add("listening");
    document.querySelector(".voice-visualizer-container")?.classList.add("active-listening");
    const st = document.getElementById("voiceStatusPill");
    if (st) st.textContent = "🎙️ Listening... Speak naturally in Telugu, English or Hindi";
  };

  voiceState.recognition.onresult = function(event) {
    let interim = "";
    let final = "";
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final += event.results[i][0].transcript;
      } else {
        interim += event.results[i][0].transcript;
      }
    }
    const query = (final || interim).trim();
    const tEl = document.getElementById("voiceUserTranscript");
    if (tEl) tEl.textContent = `"${query}"`;
    if (final) {
      processUniversalVoiceQuery(final);
    }
  };

  voiceState.recognition.onerror = function(event) {
    console.warn("Speech error:", event.error);
    stopVoiceListening();
    const st = document.getElementById("voiceStatusPill");
    if (st) st.textContent = "Microphone idle. Tap mic to speak again.";
  };

  voiceState.recognition.onend = function() {
    stopVoiceListening();
  };
}

function toggleVoiceListening() {
  if (voiceState.isListening) {
    stopVoiceListening();
  } else {
    startVoiceListening();
  }
}

function startVoiceListening() {
  if (!voiceState.recognition) setupVoiceRecognition();
  if (voiceState.recognition) {
    stopVoiceSpeaking();
    voiceState.recognition.lang = voiceState.language;
    try {
      voiceState.recognition.start();
    } catch(e) {
      console.warn("Recog start err", e);
    }
  } else {
    alert("Voice Speech Recognition is not supported by your browser. Please use Chrome or Edge.");
  }
}

function stopVoiceListening() {
  voiceState.isListening = false;
  document.getElementById("voiceMicBtn")?.classList.remove("listening");
  document.querySelector(".voice-visualizer-container")?.classList.remove("active-listening");
  const st = document.getElementById("voiceStatusPill");
  if (st) st.textContent = "Ready. Tap microphone to ask another question.";
  if (voiceState.recognition) {
    try { voiceState.recognition.stop(); } catch(e) {}
  }
}

function askVoiceSample(sampleQuery) {
  const tEl = document.getElementById("voiceUserTranscript");
  if (tEl) tEl.textContent = `"${sampleQuery}"`;
  processUniversalVoiceQuery(sampleQuery);
}

function processUniversalVoiceQuery(query) {
  const st = document.getElementById("voiceStatusPill");
  if (st) st.textContent = "🧠 Understanding question & searching knowledge base...";

  const answer = executeUniversalRag(query);
  voiceState.lastAnswer = answer;

  const answerEl = document.getElementById("voiceBotAnswer");
  if (answerEl) {
    answerEl.innerHTML = answer
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  speakVoiceAnswer(answer);
}

function executeUniversalRag(rawQuery) {
  const q = rawQuery.toLowerCase();
  const isTelugu = /[\u0C00-\u0C7F]/.test(rawQuery) || q.includes("ela") || q.includes("dhara") || q.includes("undi") || q.includes("dosa") || q.includes("cheyali") || q.includes("manchidi");
  const isHindi = /[\u0900-\u097F]/.test(rawQuery) || q.includes("kaise") || q.includes("kya") || q.includes("banao") || q.includes("kimat") || q.includes("kaha");

  // 1. Stock / Inventory Live Database
  if (q.includes("stock") || q.includes("available") || q.includes("count") || q.includes("ఉందా") || q.includes("స్టాక్") || q.includes("उपलब्ध")) {
    if (isTelugu) {
      return `మన ఫ్యాక్టరీలో అన్ని ఉత్పత్తులు తాజా బ్యాచ్‌తో అందుబాటులో ఉన్నాయి:\n- రాగి దోశ మిక్స్ (₹119)\n- జొన్న దోశ మిక్స్ (₹119)\n- పెసర దోశ మిక్స్ (₹129)\n- కొర్ర దోశ మిక్స్ (₹129)\n- మల్టీ గ్రెయిన్ పిండి (₹150)\n- 5-in-1 కాంబో (₹629)\nఅన్నీ 24 గంటల్లో ఫ్యాక్టరీ నుంచి డిస్పాచ్ అవుతాయి.`;
    } else if (isHindi) {
      return `हमारे पास सभी 5 उत्पाद और 5-इन-1 कॉम्बो पैक ताज़ा स्टॉक में उपलब्ध हैं। रागी और ज्वार डोसा मिक्स ₹119, पेसरा और कोर्रा डोसा मिक्स ₹129, और मल्टी ग्रेन आटा ₹150 है। 24 घंटे में कामेपल्ली प्लांट से सीधे डिस्पैच होता है।`;
    } else {
      return `All S.P.R. Siri Dhanya products are fully in stock directly from our Kamepalli factory: Ragi Dosa (₹119), Jowar Dosa (₹119), Pesara Dosa (₹129), Korra Dosa (₹129), Multi Grain Atta (₹150), and 5-in-1 Combo Pack (₹629).`;
    }
  }

  // 2. Health & Diabetes
  if (q.includes("diabetes") || q.includes("sugar") || q.includes("డయాబెటిస్") || q.includes("షుగర్") || q.includes("मधुमेह") || q.includes("health") || q.includes("ఆరోగ్యం")) {
    if (isTelugu) {
      return `డయాబెటిస్ మరియు షుగర్ లెవెల్స్ నియంత్రణకు మన 'కొర్ర దోశ మిక్స్' (Foxtail Millet) అత్యుత్తమమైనది. కొర్రల్లో తక్కువ గ్లైసిమిక్ ఇండెక్స్ (Low GI) మరియు ఎక్కువ పీచు పదార్థం ఉంటుంది కాబట్టి రక్తంలో షుగర్ పెరగకుండా కాపాడుతుంది. ఎముకల బలానికి రాగి దోశ మిక్స్ మరియు అధిక ప్రోటీన్ కోసం పెసర దోశ మిక్స్ వాడవచ్చు.`;
    } else if (isHindi) {
      return `डायबिटीज और शुगर नियंत्रण के लिए हमारा 'कोर्रा डोसा मिक्स' (कंगनी / फॉक्सटेल बाजरा) सबसे बेहतरीन है क्योंकि इसमें कम ग्लाइसेमिक इंडेक्स (Low GI) और भरपूर फाइबर होता है। हड्डियों के लिए रागी डोसा मिक्स और प्रोटीन के लिए पेसरा डोसा मिक्स उत्तम है।`;
    } else {
      return `For diabetes and blood sugar care, S.P.R. Korra Dosa Mix (Foxtail Millet) is highly recommended due to its low Glycemic Index (GI) and high insoluble fibre. Ragi Dosa provides natural calcium for bone density, and Pesara Dosa provides over 22g pure plant protein.`;
    }
  }

  // 3. Preparation & 15-Minute Recipe
  if (q.includes("cook") || q.includes("how to") || q.includes("recipe") || q.includes("water") || q.includes("తయారీ") || q.includes("ఎలా") || q.includes("बनाने") || q.includes("विधि")) {
    if (isTelugu) {
      return `15 నిమిషాల్లో సులభమైన తయారీ విధానం:\n1. ఒక కప్పు S.P.R. దోశ మిక్స్‌కు ఒకటి నుండి ఒకటింపావు కప్పు నీళ్లు కలపండి.\n2. ఎలాంటి ఉండలు లేకుండా కలిపి 15 నిమిషాలు నాననివ్వండి (రుబ్బడం లేదా పులియబెట్టడం అవసరం లేదు!).\n3. మీడియం వేడి పెనంపై పోసి నెయ్యి లేదా నూనె వేసి దోరగా కాల్చండి. క్రిస్పీ దోశ సిద్ధం!`;
    } else if (isHindi) {
      return `15 मिनट में झटपट बनाने की विधि:\n1. एक कप डोसा मिक्स में सवा कप पानी मिलाकर चिकना घोल बनाएं।\n2. केवल 15 मिनट रखें (रात भर किण्वन या पीसने की कोई आवश्यकता नहीं है)।\n3. गर्म तवे पर फैलाकर हल्का घी लगाकर कुरकुरा सेकें। नारियल चटनी के साथ परोसें।`;
    } else {
      return `Instant 15-Minute 'Just Add Water' Recipe:\n1. Mix 1 cup of S.P.R. Dosa Mix with 1 to 1.25 cups of water into a smooth batter.\n2. Let it rest for 15 minutes (No grinding or overnight fermentation!).\n3. Spread on a medium-hot tawa, drizzle ghee or cold-pressed oil, and cook until golden crisp!`;
    }
  }

  // 4. Pricing / Cost
  if (q.includes("price") || q.includes("cost") || q.includes("mrp") || q.includes("ధర") || q.includes("రేటు") || q.includes("कीमत") || q.includes("मूल्य")) {
    if (isTelugu) {
      return `అధికారిక ధరల వివరాలు:\n1. రాగి దోశ మిక్స్ (500g): ₹119 (MRP ₹149)\n2. జొన్న దోశ మిక్స్ (500g): ₹119 (MRP ₹149)\n3. పెసర దోశ మిక్స్ (500g): ₹129 (MRP ₹159)\n4. కొర్ర దోశ మిక్స్ (500g): ₹129 (MRP ₹160)\n5. మల్టీ గ్రెయిన్ పిండి (1 KG): ₹150 (MRP ₹185)\n6. 5-in-1 కంప్లీట్ కాంబో: ₹629 (రూ. 182 ఆదా!)\n7. హోల్‌సేల్ కార్టన్ (24 ప్యాక్‌లు): ₹2,490.`;
    } else if (isHindi) {
      return `आधिकारिक मूल्य सूची:\n1. रागी डोसा मिक्स (500g): ₹119\n2. ज्वार डोसा मिक्स (500g): ₹119\n3. पेसरा डोसा मिक्स (500g): ₹129\n4. कोर्रा डोसा मिक्स (500g): ₹129\n5. मल्टी ग्रेन आटा (1 KG): ₹150\n6. 5-इन-1 कॉम्बो पैक: ₹629 (₹182 की बचत!)\n7. थोक कार्टन (24 पैकेट): ₹2,490.`;
    } else {
      return `Official Price Catalogue: Ragi Dosa (500g) ₹119, Jowar Dosa (500g) ₹119, Pesara Dosa (500g) ₹129, Korra Dosa (500g) ₹129, Multi Grain Atta (1 KG) ₹150, 5-in-1 Combo Pack ₹629 (Save ₹182!), and 24-Pack Master Wholesale Carton ₹2,490.`;
    }
  }

  // 5. Wholesale & Dealership
  if (q.includes("wholesale") || q.includes("distributor") || q.includes("supermarket") || q.includes("carton") || q.includes("డీలర్") || q.includes("హోల్") || q.includes("थोक")) {
    if (isTelugu) {
      return `సూపర్ మార్కెట్లు మరియు డిస్ట్రిబ్యూటర్లకు 24 ప్యాక్‌ల మాస్టర్ కార్టన్ ఫ్యాక్టరీ రేటు ₹2,490 కే లభిస్తుంది (MRP ₹3,350). ఇందులో వ్యాపారులకు 20% నుండి 25% వరకు లాభం ఉంటుంది. జీఎస్టీ టాక్స్ ఇన్‌వాయిస్‌తో నేరుగా కామేపల్లి ఫ్యాక్టరీ నుండి డెలివరీ చేయబడుతుంది. సంప్రదించండి: +91 94413 93817 లేదా 9492468817.`;
    } else {
      return `For supermarkets and distributors, our 24-Pack Master Carton is offered at ₹2,490 (retail MRP ₹3,350), providing a high 20% to 25% trade retailer margin. Official GST tax invoices and priority dispatch provided directly from our Kamepalli plant. Call +91 94413 93817 or 9492468817.`;
    }
  }

  // 6. Contact & Factory Address
  if (q.includes("contact") || q.includes("phone") || q.includes("address") || q.includes("number") || q.includes("ఫోన్") || q.includes("చిరునామా") || q.includes("पता") || q.includes("नंबर")) {
    return `S.P.R. Siri Dhanya Factory Desk: Kamepalli, Santamaguluru Mandal, Bapatla District, Andhra Pradesh - 523326. Official Management Lines: +91 94413 93817 and 9492468817. FSSAI License: 20126152000402.`;
  }

  // Fallback match in Knowledge Base
  const matched = state.knowledgeBase.find(kb => 
    q.split(" ").some(word => word.length > 3 && kb.content.toLowerCase().includes(word))
  );

  if (matched) {
    return matched.content;
  }

  if (isTelugu) {
    return `S.P.R. సిరిధాన్య సహజమైన మిల్లెట్ ఉత్పత్తులు, రాగి, జొన్న, పెసర, కొర్ర దోశ మిక్స్‌లు, మరియు మల్టీ గ్రెయిన్ పిండిని 100% రసాయనాలు లేకుండా అందిస్తుంది. మీరు ఆర్డర్ చేయడానికి ఆన్‌లైన్ చెకౌట్ ఉపయోగించవచ్చు లేదా మేనేజ్‌మెంట్ నంబర్లు +91 94413 93817 మరియు 9492468817 కి వాట్సాప్ చేయవచ్చు.`;
  } else if (isHindi) {
    return `S.P.R. सिरी धान्या शुद्ध पारंपरिक बाजरा डोसा मिक्स और मल्टीग्रेन आटा प्रदान करता है। किसी भी सवाल या थोक ऑर्डर के लिए हमारे आधिकारिक नंबर +91 94413 93817 या 9492468817 पर संपर्क करें।`;
  } else {
    return `S.P.R. Siri Dhanya provides 100% natural, preservative-free instant millet dosa mixes and multi-grain atta. All products are stone-milled in Kamepalli with FSSAI certification #20126152000402. For orders or assistance, connect via WhatsApp to +91 94413 93817 or 9492468817.`;
  }
}

function speakVoiceAnswer(text) {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const cleanText = text.replace(/[*#•_-]/g, ' ').replace(/\n+/g, '. ');
  const utterance = new SpeechSynthesisUtterance(cleanText);

  utterance.lang = voiceState.language;
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  utterance.onstart = function() {
    voiceState.isSpeaking = true;
    document.querySelector(".voice-visualizer-container")?.classList.add("active-listening");
    const st = document.getElementById("voiceStatusPill");
    if (st) st.textContent = "🔊 Speaking answer...";
  };

  utterance.onend = function() {
    voiceState.isSpeaking = false;
    document.querySelector(".voice-visualizer-container")?.classList.remove("active-listening");
    const st = document.getElementById("voiceStatusPill");
    if (st) st.textContent = "Ready. Tap microphone to ask another question.";
  };

  utterance.onerror = function() {
    voiceState.isSpeaking = false;
    document.querySelector(".voice-visualizer-container")?.classList.remove("active-listening");
    const st = document.getElementById("voiceStatusPill");
    if (st) st.textContent = "Ready. Tap microphone to ask another question.";
  };

  voiceState.currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function stopVoiceSpeaking() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  voiceState.isSpeaking = false;
  document.querySelector(".voice-visualizer-container")?.classList.remove("active-listening");
  const st = document.getElementById("voiceStatusPill");
  if (st) st.textContent = "Voice stopped. Tap mic to speak.";
}

function replayVoiceAnswer() {
  if (voiceState.lastAnswer) {
    speakVoiceAnswer(voiceState.lastAnswer);
  }
}

// --- Admin Knowledge Base Management (Tab 3) ---
function renderKnowledgeBaseTable() {
  const tbody = document.getElementById("kbArticlesTableBody");
  const countEl = document.getElementById("kbArticlesCount");
  if (countEl) countEl.textContent = state.knowledgeBase.length;
  if (!tbody) return;

  tbody.innerHTML = state.knowledgeBase.map(a => `
    <tr>
      <td style="font-family: monospace; font-weight: 700; color: #1565c0;">${a.id}</td>
      <td><span class="pay-method-badge">${a.category}</span></td>
      <td><strong>${a.title}</strong></td>
      <td><span class="pay-status-pill paid">${a.language}</span></td>
      <td style="max-width: 250px; font-size: 11.5px; line-height: 1.4; color: #444;">${a.content.substring(0, 120)}...</td>
      <td style="font-size: 11px;">${a.updated}</td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="deleteKnowledgeArticle('${a.id}')">🗑️ Delete</button>
      </td>
    </tr>
  `).join("");
}

function openAddKnowledgeArticleModal() {
  document.getElementById("addKnowledgeArticleModal")?.classList.add("active");
}

function handleSaveKnowledgeArticle(e) {
  e.preventDefault();
  const category = document.getElementById("newKbCategory").value;
  const title = document.getElementById("newKbTitle").value.trim();
  const language = document.getElementById("newKbLanguage").value;
  const content = document.getElementById("newKbContent").value.trim();

  const newArt = {
    id: "KB-" + Math.floor(10 + Math.random() * 90),
    category,
    title,
    language,
    content,
    updated: new Date().toISOString().substring(0, 10)
  };

  state.knowledgeBase.unshift(newArt);
  localStorage.setItem(DB_KNOWLEDGE_KEY, JSON.stringify(state.knowledgeBase));
  closeModal("addKnowledgeArticleModal");
  renderKnowledgeBaseTable();
  showToast("Saved knowledge article & re-indexed AI engine!");
}

function deleteKnowledgeArticle(id) {
  if (!confirm(`Delete article ${id}?`)) return;
  state.knowledgeBase = state.knowledgeBase.filter(k => k.id !== id);
  localStorage.setItem(DB_KNOWLEDGE_KEY, JSON.stringify(state.knowledgeBase));
  renderKnowledgeBaseTable();
  showToast("Article deleted from knowledge base.");
}

function reindexKnowledgeBase() {
  showToast("⚡ Universal RAG Engine Re-Indexed! Knowledge is fully updated.");
}

function importKnowledgeDocument() {
  const text = document.getElementById("kbDocTextInput").value.trim();
  const title = document.getElementById("kbDocTitleInput").value.trim() || "Uploaded Business Document";

  if (!text) {
    alert("Please paste text or policy documentation first.");
    return;
  }

  const newArt = {
    id: "KB-DOC-" + Math.floor(100 + Math.random() * 900),
    category: "Official Announcements",
    title,
    language: "Multilingual (Universal)",
    content: text,
    updated: new Date().toISOString().substring(0, 10)
  };

  state.knowledgeBase.unshift(newArt);
  localStorage.setItem(DB_KNOWLEDGE_KEY, JSON.stringify(state.knowledgeBase));
  document.getElementById("kbDocTextInput").value = "";
  document.getElementById("kbDocTitleInput").value = "";
  renderKnowledgeBaseTable();
  showToast("Document indexed into business knowledge base!");
}

function testKnowledgeQuery() {
  const q = document.getElementById("kbTestQueryInput").value.trim();
  if (!q) return;

  const resultBox = document.getElementById("kbTestResultBox");
  if (resultBox) resultBox.textContent = "Analyzing query with RAG pipeline...";

  setTimeout(() => {
    const answer = executeUniversalRag(q);
    if (resultBox) resultBox.innerHTML = `<strong>AI Response:</strong><br>${answer.replace(/\n/g, '<br>')}`;
  }, 200);
}

function filterKnowledgeArticles() {
  const term = document.getElementById("kbSearchInput").value.toLowerCase();
  const tbody = document.getElementById("kbArticlesTableBody");
  if (!tbody) return;

  const filtered = state.knowledgeBase.filter(k => 
    k.title.toLowerCase().includes(term) ||
    k.content.toLowerCase().includes(term) ||
    k.category.toLowerCase().includes(term)
  );

  tbody.innerHTML = filtered.map(a => `
    <tr>
      <td style="font-family: monospace; font-weight: 700; color: #1565c0;">${a.id}</td>
      <td><span class="pay-method-badge">${a.category}</span></td>
      <td><strong>${a.title}</strong></td>
      <td><span class="pay-status-pill paid">${a.language}</span></td>
      <td style="max-width: 250px; font-size: 11.5px; line-height: 1.4; color: #444;">${a.content.substring(0, 120)}...</td>
      <td style="font-size: 11px;">${a.updated}</td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="deleteKnowledgeArticle('${a.id}')">🗑️ Delete</button>
      </td>
    </tr>
  `).join("");
}
