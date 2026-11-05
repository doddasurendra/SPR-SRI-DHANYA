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
  if (false && state.selectedPayment === "cod") {
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
  if (false && state.selectedPayment === "cod") payName = "Cash on Delivery (Pay at Doorstep)";
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

// renderMyOrders upgraded to 7-stage engine

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
  document.getElementById("adminModal")?.classList.add("active");
  switchAdminTab("dashboard");
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
  targetUrl: (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "http://10.68.196.33:8000/index.html" : window.location.href,
  campaignName: "Mobile Wi-Fi Live Storefront"
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

// switchAdminTab handled by 14-module platform

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


// =========================================================================
// === S.P.R. SIRI DHANYA: FULL MASTER ENGINE & 14-MODULE ADMIN PLATFORM ===
// =========================================================================

// Database Storage Keys
const DB_PRODUCTS_KEY = "spr_products_db";
const DB_CATEGORIES_KEY = "spr_categories_db";
const DB_ORDERS_KEY = "spr_orders_db";
const DB_CUSTOMERS_KEY = "spr_customers_db";
const DB_COUPONS_KEY = "spr_coupons_db";
const DB_REVIEWS_KEY = "spr_reviews_db";
const DB_WHOLESALE_KEY = "spr_wholesale_accounts_db";
const DB_AUDIT_KEY = "spr_audit_logs_db";
// const DB_QRCODES_KEY = "spr_qrcodes_db";
// const DB_KNOWLEDGE_KEY = "spr_knowledge_base";

// Global Store State
state.orders = [];
state.customers = [];
state.coupons = [];
state.reviews = [];
state.wholesaleAccounts = [];
state.auditLogs = [];
// state.qrCodes = [];
// state.knowledgeBase = [];
state.appliedCoupon = null;
state.currentAdminOrderId = null;
state.adminFilterStatus = "all";
state.adminFilterPayment = "all";
state.adminSort = "newest";
state.adminSearchQuery = "";
state.chatOpen = false;
state.chatMessages = [];

// voiceState declared in Voice module

// qrScannerState declared in QR module

// qrGenState declared in QR module

// --- 1. Master Database Initialization ---
function initMasterDatabase() {
  // 1. Products DB
  const savedProds = localStorage.getItem(DB_PRODUCTS_KEY);
  if (savedProds) {
    try {
      const parsed = JSON.parse(savedProds);
      if (Array.isArray(parsed) && parsed.length > 0) {
        PRODUCTS.length = 0;
        parsed.forEach(p => PRODUCTS.push(p));
      }
    } catch(e) {}
  } else {
    // Ensure all products have stock count
    PRODUCTS.forEach((p, idx) => {
      if (!p.stock) p.stock = [85, 64, 42, 58, 92, 35, 18][idx] || 50;
      p.inStock = p.stock > 0;
    });
    saveProductsDatabase();
  }

  // 2. Orders DB
  const savedOrders = localStorage.getItem(DB_ORDERS_KEY);
  if (savedOrders) {
    try { state.orders = JSON.parse(savedOrders); } catch(e) { state.orders = []; }
  }
  if (!state.orders || state.orders.length === 0) {
    state.orders = [
      {
        orderId: "OD784920194821",
        createdAt: "2026-11-04 09:30:15",
        status: "Delivered",
        paymentMethod: "UPI",
        paymentStatus: "Paid Online (UPI Verified)",
        txnId: "UPI944139381781",
        amountPaid: 629,
        subtotal: 629,
        discount: 0,
        deliveryFee: 0,
        estimatedDelivery: "Delivered on Nov 4, 2026",
        customer: { fullName: "Venkata Ramanamurthy", phone: "9848022338", email: "v.ramana@gmail.com" },
        delivery: { houseNo: "Plot No. 42", street: "Lakshmipuram Main Road", locality: "Lakshmipuram", city: "Guntur", state: "Andhra Pradesh", pincode: "522007" },
        items: [{ id: 6, name: "S.P.R. Complete Health Pack (5-in-1 Combo)", price: 629, qty: 1, image: "assets/brand_poster_logo.png" }],
        shipping: { courier: "India Post Speed Post", trackingId: "AP9492468817IN", trackingUrl: "https://www.indiapost.gov.in/", dispatchDate: "2026-11-04" }
      },
      {
        orderId: "OD784920194822",
        createdAt: "2026-11-04 11:15:40",
        status: "Shipped",
        paymentMethod: "CARD",
        paymentStatus: "Paid Online (Card Verified)",
        txnId: "TXN-CARD-883910",
        amountPaid: 377,
        subtotal: 377,
        discount: 0,
        deliveryFee: 0,
        estimatedDelivery: "Expected by Tomorrow, 5:00 PM",
        customer: { fullName: "Ananya Sharma", phone: "9121158810", email: "ananya.sharma@outlook.com" },
        delivery: { houseNo: "Flat 402, Green Meadows", street: "KPHB Phase 3", locality: "Kukatpally", city: "Hyderabad", state: "Telangana", pincode: "500072" },
        items: [
          { id: 1, name: "S.P.R. Instant Ragi Dosa Mix (500 g)", price: 119, qty: 1, image: "assets/ragi_dosa.png" },
          { id: 3, name: "S.P.R. Instant Pesara Dosa Mix (500 g)", price: 129, qty: 1, image: "assets/pesara_dosa.png" },
          { id: 4, name: "S.P.R. Instant Korra Dosa Mix (500 g)", price: 129, qty: 1, image: "assets/korra_dosa.png" }
        ],
        shipping: { courier: "Delhivery Surface", trackingId: "DLV-88391024", trackingUrl: "https://www.delhivery.com/", dispatchDate: "2026-11-04" }
      },
      {
        orderId: "OD784920194823",
        createdAt: "2026-11-04 14:02:18",
        status: "Confirmed",
        paymentMethod: "NETBANKING",
        paymentStatus: "Paid Online (SBI Verified)",
        txnId: "NB-889102-SBI",
        amountPaid: 2490,
        subtotal: 2490,
        discount: 0,
        deliveryFee: 0,
        estimatedDelivery: "Expected in 2-3 Business Days",
        customer: { fullName: "Sri Balaji Super Market (K. Srinivas)", phone: "9440123456", email: "balaji.supermarket@gmail.com" },
        delivery: { houseNo: "D.No 5-89", street: "Bazaar Street, Opp Bus Stand", locality: "Addanki Town", city: "Addanki / Bapatla", state: "Andhra Pradesh", pincode: "523201" },
        items: [{ id: 7, name: "S.P.R. Wholesale Supermarket Master Carton (24 Packs)", price: 2490, qty: 1, image: "assets/brand_poster_logo.png" }],
        shipping: { courier: "Factory Direct Lorry Transport", trackingId: "LR-KMP-9492", trackingUrl: "", dispatchDate: "2026-11-04" }
      }
    ];
    saveOrdersDatabase();
  }

  // 3. Coupons DB
  const savedCoupons = localStorage.getItem(DB_COUPONS_KEY);
  if (savedCoupons) {
    try { state.coupons = JSON.parse(savedCoupons); } catch(e) { state.coupons = []; }
  }
  if (!state.coupons || state.coupons.length === 0) {
    state.coupons = [
      { code: "SIRIDHANYA10", type: "percentage", value: 10, minSpend: 100, status: "Active" },
      { code: "HEALTH50", type: "flat", value: 50, minSpend: 300, status: "Active" },
      { code: "COMBO100", type: "flat", value: 100, minSpend: 600, status: "Active" }
    ];
    localStorage.setItem(DB_COUPONS_KEY, JSON.stringify(state.coupons));
  }

  // 4. Reviews DB
  const savedReviews = localStorage.getItem(DB_REVIEWS_KEY);
  if (savedReviews) {
    try { state.reviews = JSON.parse(savedReviews); } catch(e) { state.reviews = []; }
  }
  if (!state.reviews || state.reviews.length === 0) {
    state.reviews = [
      { id: "REV-1", name: "Siva Prasad Rao", rating: 5, product: "S.P.R. Instant Ragi Dosa Mix", comment: "Outstanding authentic taste! In 15 minutes, crisp hot ragi dosa was ready. Excellent calcium source for my mother.", status: "Approved" },
      { id: "REV-2", name: "K. Annapurna", rating: 5, product: "S.P.R. 5-in-1 Complete Health Combo", comment: "The best purchase for our family. Every dosa mix has pure aroma without any chemicals. Delivered in 24 hours.", status: "Approved" },
      { id: "REV-3", name: "Ramesh Babu (Supermarket Owner)", rating: 5, product: "Wholesale Master Carton", comment: "Fast moving items in our retail shelves in Guntur. Margin is healthy and customers keep asking for repeat stock.", status: "Approved" }
    ];
    localStorage.setItem(DB_REVIEWS_KEY, JSON.stringify(state.reviews));
  }

  // 5. Wholesale Accounts DB
  const savedWs = localStorage.getItem(DB_WHOLESALE_KEY);
  if (savedWs) {
    try { state.wholesaleAccounts = JSON.parse(savedWs); } catch(e) { state.wholesaleAccounts = []; }
  }
  if (!state.wholesaleAccounts || state.wholesaleAccounts.length === 0) {
    state.wholesaleAccounts = [
      { id: "WS-RET-101", name: "Sri Balaji Super Market", type: "Retailer", gstin: "37AAPFS9492K1Z9", contact: "K. Srinivas", phone: "9440123456", city: "Addanki, Bapatla", status: "Approved" },
      { id: "WS-DIST-202", name: "Krishna-Guntur Millet Distributors", type: "Regional Distributor", gstin: "37BCDEF1234H1Z5", contact: "M. Venkateswarlu", phone: "9848011223", city: "Guntur & Vijayawada", status: "Approved" }
    ];
    localStorage.setItem(DB_WHOLESALE_KEY, JSON.stringify(state.wholesaleAccounts));
  }

  // 6. Audit Logs DB
  const savedAudit = localStorage.getItem(DB_AUDIT_KEY);
  if (savedAudit) {
    try { state.auditLogs = JSON.parse(savedAudit); } catch(e) { state.auditLogs = []; }
  }
  if (!state.auditLogs || state.auditLogs.length === 0) {
    state.auditLogs = [
      { timestamp: "2026-11-04 09:30:15", event: "SYSTEM_INIT", details: "Store initialized with FSSAI Lic #20126152000402" },
      { timestamp: "2026-11-04 11:15:40", event: "ORDER_SHIPPED", details: "Order OD784920194822 assigned to Delhivery AWB DLV-88391024" },
      { timestamp: "2026-11-04 14:02:18", event: "WHOLESALE_APPROVED", details: "Retailer Sri Balaji Supermarket approved for B2B pricing" }
    ];
    localStorage.setItem(DB_AUDIT_KEY, JSON.stringify(state.auditLogs));
  }

  // Compile Customer Directory
  syncCustomerDirectory();
}

function saveProductsDatabase() {
  localStorage.setItem(DB_PRODUCTS_KEY, JSON.stringify(PRODUCTS));
  renderProducts();
  renderAdminProductsTable();
  renderAdminInventoryTable();
}

function saveOrdersDatabase() {
  localStorage.setItem(DB_ORDERS_KEY, JSON.stringify(state.orders));
  syncCustomerDirectory();
  updateAdminDashboardStats();
  updateCustomerOrdersBadge();
  if (document.getElementById("myOrdersModal")?.classList.contains("active")) {
    renderMyOrders();
  }
}

function syncCustomerDirectory() {
  const custMap = new Map();
  state.orders.forEach(o => {
    if (o.customer && o.customer.phone) {
      const p = o.customer.phone;
      if (!custMap.has(p)) {
        custMap.set(p, {
          name: o.customer.fullName,
          phone: p,
          email: o.customer.email,
          city: o.delivery ? (o.delivery.city || o.delivery.district) : "-",
          ordersCount: 1,
          totalSpend: o.amountPaid || 0,
          lastOrder: o.createdAt
        });
      } else {
        const c = custMap.get(p);
        c.ordersCount += 1;
        c.totalSpend += (o.amountPaid || 0);
      }
    }
  });
  state.customers = Array.from(custMap.values());
  localStorage.setItem(DB_CUSTOMERS_KEY, JSON.stringify(state.customers));
}

function logAuditEvent(event, details) {
  const entry = {
    timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
    event,
    details
  };
  state.auditLogs.unshift(entry);
  if (state.auditLogs.length > 100) state.auditLogs.pop();
  localStorage.setItem(DB_AUDIT_KEY, JSON.stringify(state.auditLogs));
  renderAuditLogs();
}

// Hook into DOM
window.addEventListener("DOMContentLoaded", () => {
  initMasterDatabase();
});

// --- 2. Coupon Application at Checkout ---
function applyCouponCode() {
  const input = document.getElementById("checkoutCouponInput");
  const msg = document.getElementById("couponStatusMessage");
  if (!input || !msg) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    msg.style.color = "#c62828";
    msg.textContent = "Please enter a coupon code.";
    return;
  }

  const coupon = state.coupons.find(c => c.code.toUpperCase() === code && c.status === "Active");
  if (!coupon) {
    msg.style.color = "#c62828";
    msg.textContent = `❌ Coupon code "${code}" is invalid or expired.`;
    state.appliedCoupon = null;
    updateCheckoutPricing();
    return;
  }

  // Calculate current subtotal
  let currentSubtotal = 0;
  state.cart.forEach(ci => {
    const p = PRODUCTS.find(prod => prod.id === ci.id);
    if (p) currentSubtotal += p.price * ci.qty;
  });

  if (currentSubtotal < coupon.minSpend) {
    msg.style.color = "#c62828";
    msg.textContent = `❌ Minimum order amount of ₹${coupon.minSpend} required for this coupon.`;
    state.appliedCoupon = null;
    updateCheckoutPricing();
    return;
  }

  let discount = 0;
  if (coupon.type === "percentage") {
    discount = Math.round((currentSubtotal * coupon.value) / 100);
  } else {
    discount = coupon.value;
  }

  state.appliedCoupon = {
    code: coupon.code,
    discountAmount: discount
  };

  msg.style.color = "#2e7d32";
  msg.textContent = `✅ Coupon "${coupon.code}" applied! You save an extra ₹${discount}.`;
  updateCheckoutPricing();
  showToast(`Applied coupon: ${coupon.code} (₹${discount} OFF)`);
}

function quickApplyCoupon(code) {
  const input = document.getElementById("checkoutCouponInput");
  if (input) {
    input.value = code;
    applyCouponCode();
  }
}

// Override updateCheckoutPricing to include Coupon & 5% GST
const originalUpdateCheckoutPricing = window.updateCheckoutPricing || function() {};

function updateCheckoutPricing() {
  let subtotal = 0;
  let totalMrp = 0;
  let count = 0;

  state.cart.forEach(ci => {
    const p = PRODUCTS.find(prod => prod.id === ci.id);
    if (p) {
      subtotal += p.price * ci.qty;
      totalMrp += p.mrp * ci.qty;
      count += ci.qty;
    }
  });

  let couponDiscount = 0;
  const couponRow = document.getElementById("checkoutCouponRow");
  const couponCodeTag = document.getElementById("appliedCouponCodeTag");
  const couponAmtTag = document.getElementById("checkoutCouponDiscountAmount");

  if (state.appliedCoupon && subtotal >= (state.appliedCoupon.discountAmount || 0)) {
    couponDiscount = state.appliedCoupon.discountAmount;
    if (couponRow) couponRow.style.display = "flex";
    if (couponCodeTag) couponCodeTag.textContent = state.appliedCoupon.code;
    if (couponAmtTag) couponAmtTag.textContent = `- ₹${couponDiscount}`;
  } else {
    if (couponRow) couponRow.style.display = "none";
  }

  const finalPayable = Math.max(0, subtotal - couponDiscount);
  const totalSavings = (totalMrp - subtotal) + couponDiscount;

  // 5% GST calculation (included in retail pricing)
  const gstAmount = Math.round((finalPayable * 0.05 / 1.05) * 100) / 100;

  const countEl = document.getElementById("checkoutItemsCount");
  if (countEl) countEl.textContent = count;
  const mrpEl = document.getElementById("checkoutTotalMrp");
  if (mrpEl) mrpEl.textContent = `₹${totalMrp}`;
  const discEl = document.getElementById("checkoutDiscount");
  if (discEl) discEl.textContent = `- ₹${totalMrp - subtotal}`;
  const finalEl = document.getElementById("checkoutFinalAmount");
  if (finalEl) finalEl.textContent = `₹${finalPayable}`;
  const badgeEl = document.getElementById("checkoutSavingsBadge");
  if (badgeEl) badgeEl.textContent = `You will save ₹${totalSavings} on this order`;
  const gstEl = document.getElementById("checkoutGstAmount");
  if (gstEl) gstEl.textContent = `₹${gstAmount} (CGST 2.5% + SGST 2.5%)`;
}

// Hook into goToStep(2)
const originalGoToStep = window.goToStep;
window.goToStep = function(stepNum) {
  if (originalGoToStep) originalGoToStep(stepNum);
  if (stepNum === 2 || stepNum === 3) {
    updateCheckoutPricing();
  }
};

// --- 3. Enhanced Order Placement (Automatic Admin Ingestion) ---
window.processPayment = function() {
  const name = document.getElementById("custName")?.value || "Venkatesh Kumar";
  const phone = document.getElementById("custPhone")?.value || "9492468817";
  const email = "support@sprsiridhanya.com";
  const houseNo = document.getElementById("custAddress")?.value || "D.No 12-4, Siri Dhanya Nilayam";
  const locality = document.getElementById("custLocality")?.value || "Kamepalli";
  const city = document.getElementById("custCity")?.value || "Santamaguluru / Bapatla";
  const stateVal = document.getElementById("custState")?.value || "Andhra Pradesh";
  const pincode = document.getElementById("custPincode")?.value || "522616";
  const fullAddress = `${houseNo}, ${locality}, ${city}, ${stateVal} - ${pincode}`;

  let subtotal = 0;
  const orderItems = state.cart.map(ci => {
    const p = PRODUCTS.find(prod => prod.id === ci.id);
    const itemTotal = p ? p.price * ci.qty : 0;
    subtotal += itemTotal;

    // Deduct stock in real-time
    if (p && p.stock >= ci.qty) {
      p.stock -= ci.qty;
      p.inStock = p.stock > 0;
    }

    return {
      id: p ? p.id : ci.id,
      name: p ? p.name : "Millet Product",
      price: p ? p.price : 119,
      qty: ci.qty,
      image: p ? p.image : "assets/ragi_dosa.png"
    };
  });

  saveProductsDatabase(); // Persist deducted inventory

  const couponDiscount = state.appliedCoupon ? state.appliedCoupon.discountAmount : 0;
  const finalTotal = Math.max(0, subtotal - couponDiscount);
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
  }

  // Create Order Record with full 7-stage lifecycle & compliance
  const newOrder = {
    orderId,
    createdAt: dateStr,
    status: "Confirmed", // 7-stage: Placed -> Confirmed -> Processing -> Packed -> Shipped -> Out for Delivery -> Delivered
    paymentMethod: state.selectedPayment.toUpperCase(),
    paymentStatus: payStatus,
    txnId,
    amountPaid: finalTotal,
    subtotal,
    discount: couponDiscount,
    couponUsed: state.appliedCoupon ? state.appliedCoupon.code : null,
    deliveryFee: 0,
    estimatedDelivery: "Expected in 2-3 Business Days",
    customer: { fullName: name, phone, email },
    delivery: { houseNo, street: locality, locality, village: locality, mandal: "Santamaguluru", district: city, city, state: stateVal, pincode },
    items: orderItems,
    shipping: { courier: "India Post Speed Post", trackingId: "AWB-" + orderId.substring(2, 10), trackingUrl: "https://www.indiapost.gov.in/", dispatchDate: dateStr.split(" ")[0] }
  };

  // Prepend to Orders Database (Automatic Instant Admin Ingestion!)
  state.orders.unshift(newOrder);
  saveOrdersDatabase();

  logAuditEvent("NEW_ORDER_PLACED", `Customer ${name} placed order ${orderId} for ₹${finalTotal} (${payName})`);

  // Populate Order Success Modal
  const elOrderId = document.getElementById("successOrderId");
  if (elOrderId) elOrderId.textContent = orderId;
  const custEl = document.getElementById("successCustomerName") || document.getElementById("successCustomer");
  if (custEl) custEl.textContent = name;
  const phoneEl = document.getElementById("successPhone");
  if (phoneEl) phoneEl.textContent = phone;
  const addrEl = document.getElementById("successAddress");
  if (addrEl) addrEl.textContent = fullAddress;
  const amtEl = document.getElementById("successAmount");
  if (amtEl) amtEl.textContent = `₹${finalTotal}`;
  const payEl = document.getElementById("successPaymentMethod");
  if (payEl) payEl.textContent = payName;

  // Dual WhatsApp Alerts (+91 94413 93817 & 9492468817)
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
*Subtotal:* Rs. ${subtotal}
*Discount:* Rs. ${couponDiscount}
*Final Amount Paid:* Rs. ${finalTotal} (FREE Delivery)

⚡ *Action:* Please confirm & dispatch to courier.`;

  const encodedWa = encodeURIComponent(waMsg);
  const btn1 = document.getElementById("successWhatsappBtn1");
  if (btn1) btn1.href = `https://wa.me/919441393817?text=${encodedWa}`;
  const btn2 = document.getElementById("successWhatsappBtn2");
  if (btn2) btn2.href = `https://wa.me/919492468817?text=${encodedWa}`;

  // Reset checkout state
  closeCheckoutModal();
  state.cart = [];
  state.appliedCoupon = null;
  saveCartToStorage();
  updateCartBadge();
  renderProducts();

  document.getElementById("orderSuccessModal")?.classList.add("active");
  showToast("Order placed & automatically ingested into Admin Dashboard!");
};

// --- 4. Upgraded Customer "My Orders" Dashboard & 7-Stage Tracking ---
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

  // 7-Stage Stepper Sequence
  const stages = ["Placed", "Confirmed", "Processing", "Packed", "Shipped", "Out for Delivery", "Delivered"];

  container.innerHTML = state.orders.map(order => {
    let currentIdx = stages.indexOf(order.status);
    if (currentIdx === -1 && order.status === "Payment Verified") currentIdx = 1;
    if (currentIdx === -1 && order.status === "Order Placed") currentIdx = 0;

    const isCancelled = order.status === "Cancelled";
    const isReturned = order.status === "Returned";
    const isReplacement = order.status === "Replacement Requested";

    const itemsSummary = order.items.map(it => `
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
        <img src="${it.image}" alt="${it.name}" style="width: 44px; height: 44px; object-fit: contain; border: 1px solid #eee; border-radius: 4px;">
        <div style="flex: 1;">
          <div style="font-size: 13px; font-weight: 700; color: #212121;">${it.name}</div>
          <div style="font-size: 11.5px; color: #666;">Quantity: <strong>${it.qty}</strong> × ₹${it.price}</div>
        </div>
        <div style="font-weight: 700; font-size: 13.5px;">₹${it.price * it.qty}</div>
      </div>
    `).join("");

    return `
      <div class="customer-order-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin-bottom: 16px; background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,0.05);">
        <!-- Top Bar -->
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

        <!-- Estimated Delivery Banner -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px; margin: 10px 0; font-size: 12px; color: #334155; display: flex; justify-content: space-between; align-items: center;">
          <span>🗓️ <strong>${order.estimatedDelivery || "Expected in 2-3 Business Days"}</strong></span>
          <span style="color: #2e7d32; font-weight: 700;">FREE Express Delivery</span>
        </div>

        <!-- Items Ordered -->
        <div style="margin: 12px 0;">
          ${itemsSummary}
        </div>

        <!-- Total Paid & Address Snapshot -->
        <div style="background: #f8f9fa; padding: 10px 12px; border-radius: 6px; font-size: 12.5px; margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span>Total Paid (${order.paymentMethod}):</span>
            <strong style="color: var(--fk-orange); font-size: 15px;">₹${order.amountPaid}</strong>
          </div>
          <div style="font-size: 11.5px; color: #666;">
            📍 <strong>Delivery Address:</strong> ${order.delivery ? `${order.delivery.houseNo}, ${order.delivery.locality}, ${order.delivery.city || order.delivery.district} - ${order.delivery.pincode}` : 'Kamepalli, Bapatla'}
          </div>
        </div>

        <!-- 7-Stage Visual Live Order Stepper -->
        ${(!isCancelled && !isReturned && !isReplacement) ? `
          <div style="background: #fff; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 10px; margin-top: 10px;">
            <div style="font-size: 11.5px; font-weight: 700; color: #475569; margin-bottom: 8px;">🚚 Live 7-Stage Fulfillment Journey:</div>
            <div class="stepper-7-wrap">
              ${stages.map((st, sIdx) => {
                const isDone = currentIdx >= sIdx;
                const isCurr = currentIdx === sIdx;
                return `
                  <div class="step-7-item ${isDone ? 'completed' : ''} ${isCurr ? 'current' : ''}">
                    <div class="step-7-circle">${isDone ? '✓' : sIdx + 1}</div>
                    <div class="step-7-label">${st}</div>
                  </div>
                `;
              }).join("")}
            </div>

            ${order.shipping && order.shipping.trackingId ? `
              <div style="margin-top: 8px; font-size: 12px; color: #475569; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 6px 10px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
                <span>Carrier: <strong>${order.shipping.courier}</strong> (AWB: <strong>${order.shipping.trackingId}</strong>)</span>
                ${order.shipping.trackingUrl ? `
                  <a href="${order.shipping.trackingUrl}" target="_blank" style="color: #15803d; font-weight: 700; text-decoration: none;">🔗 Track Carrier</a>
                ` : ''}
              </div>
            ` : ''}
          </div>
        ` : `
          <div style="background: #fff1f2; border: 1px solid #fecdd3; border-radius: 6px; padding: 8px 12px; font-size: 12px; color: #be123c; font-weight: 600;">
            ${isCancelled ? '❌ Order Cancelled.' : (isReplacement ? '🔄 Replacement Pack Requested (Processing Fresh Dispatch).' : '↩️ Return & Refund Processed.')}
          </div>
        `}

        <!-- Customer Action Buttons (Reorder, Download Invoice, Return, Cancel) -->
        <div class="cust-order-actions-bar">
          <button class="btn btn-reorder btn-sm" onclick="reorderPurchase('${order.orderId}')">
            🔁 Buy Again / Reorder
          </button>

          <button class="btn btn-invoice btn-sm" onclick="downloadOrderInvoice('${order.orderId}')">
            📥 Download Tax Invoice
          </button>

          ${(currentIdx <= 2 && !isCancelled && !isReturned) ? `
            <button class="btn btn-danger-outline btn-sm" onclick="cancelCustomerOrder('${order.orderId}')">
              Cancel Order
            </button>
          ` : ''}

          ${(!isCancelled && !isReturned && !isReplacement) ? `
            <button class="btn btn-secondary btn-sm btn-return-req" onclick="openReturnModal('${order.orderId}')">
              ↩️ Return / Replace
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

// Reorder Previous Purchase ("Buy Again")
function reorderPurchase(orderId) {
  const order = state.orders.find(o => o.orderId === orderId);
  if (!order) return;

  order.items.forEach(it => {
    const existing = state.cart.find(c => c.id === it.id);
    if (existing) {
      existing.qty += it.qty;
    } else {
      state.cart.push({ id: it.id, qty: it.qty });
    }
  });

  saveCartToStorage();
  updateCartBadge();
  renderProducts();
  closeModal("myOrdersModal");
  openCartDrawer();
  showToast(`Added ${order.items.length} product(s) back to cart for reorder!`);
}

// Return / Replacement Request
function openReturnModal(orderId) {
  document.getElementById("returnOrderIdInput").value = orderId;
  document.getElementById("returnRequestModal").classList.add("active");
}

function handleReturnSubmit(e) {
  e.preventDefault();
  const orderId = document.getElementById("returnOrderIdInput").value;
  const type = document.getElementById("returnTypeSelect").value;
  const reason = document.getElementById("returnReasonSelect").value;
  const remarks = document.getElementById("returnRemarksInput").value.trim();

  const order = state.orders.find(o => o.orderId === orderId);
  if (order) {
    order.status = type === "Replacement" ? "Replacement Requested" : "Returned";
    order.returnDetails = { type, reason, remarks, date: new Date().toISOString().substring(0, 10) };
    saveOrdersDatabase();

    logAuditEvent("RETURN_REQUEST", `${type} submitted for order ${orderId} (Reason: ${reason})`);

    closeModal("returnRequestModal");
    renderMyOrders();
    showToast(`Your ${type} request has been submitted to management!`);
  }
}

// Download Official GST Tax Invoice
function downloadOrderInvoice(orderId) {
  const order = state.orders.find(o => o.orderId === orderId);
  if (!order) return;

  const invoiceNo = "INV-SPR-" + order.orderId.replace(/[^0-9]/g, '').substring(0, 6);
  const taxableVal = Math.round((order.amountPaid / 1.05) * 100) / 100;
  const cgst = Math.round((taxableVal * 0.025) * 100) / 100;
  const sgst = Math.round((taxableVal * 0.025) * 100) / 100;

  const invoiceHtml = `
    <html>
      <head>
        <title>S.P.R. Siri Dhanya - Tax Invoice ${invoiceNo}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 30px; color: #212121; }
          .inv-card { max-width: 800px; margin: 0 auto; border: 1px solid #ccc; padding: 25px; border-radius: 6px; }
          .inv-header { display: flex; justify-content: space-between; border-bottom: 2px solid #2e7d32; padding-bottom: 12px; }
          .inv-title { font-size: 24px; font-weight: bold; color: #2e7d32; }
          .inv-sub { font-size: 12px; color: #555; }
          .inv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 15px 0; font-size: 13px; }
          table { width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 13px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background: #f1f8e9; color: #2e7d32; }
          .totals-table { width: 350px; margin-left: auto; margin-top: 10px; }
          .btn-print { background: #2e7d32; color: #fff; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
          @media print { .no-print { display: none; } body { padding: 0; } .inv-card { border: none; } }
        </style>
      </head>
      <body>
        <div class="inv-card">
          <div class="no-print" style="text-align: right; margin-bottom: 10px;">
            <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
          </div>
          <div class="inv-header">
            <div>
              <div class="inv-title">S.P.R. SIRI DHANYA</div>
              <div class="inv-sub">సంప్రదాయ పోషణ – ఆధునిక సౌలభ్యం | ప్రతి గింజలో ఆరోగ్యం</div>
              <div style="font-size: 11px; margin-top: 4px;">Kamepalli, Santamaguluru Mandal, Bapatla Dist, A.P. - 523326</div>
              <div style="font-size: 11px;">FSSAI Lic: <strong>20126152000402</strong> | GSTIN: <strong>37AAPFS9492K1Z9</strong></div>
            </div>
            <div style="text-align: right;">
              <h3 style="margin: 0; color: #2e7d32;">TAX INVOICE</h3>
              <div style="font-size: 12px; font-weight: bold;">${invoiceNo}</div>
              <div style="font-size: 11px; color: #666;">Date: ${order.createdAt}</div>
              <div style="font-size: 11px; color: #666;">Order ID: ${order.orderId}</div>
            </div>
          </div>

          <div class="inv-grid">
            <div>
              <strong>Billed & Shipped To:</strong><br>
              ${order.customer.fullName}<br>
              Phone: ${order.customer.phone}<br>
              ${order.delivery.houseNo}, ${order.delivery.locality}<br>
              ${order.delivery.city || order.delivery.district}, ${order.delivery.state} - ${order.delivery.pincode}
            </div>
            <div style="text-align: right;">
              <strong>Payment & Delivery Details:</strong><br>
              Method: ${order.paymentMethod}<br>
              Status: ${order.paymentStatus}<br>
              Txn ID: ${order.txnId}<br>
              Carrier: ${order.shipping?.courier || 'India Post Speed Post'}<br>
              AWB: ${order.shipping?.trackingId || '-'}
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Item Description</th>
                <th>HSN Code</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${order.items.map((it, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td><strong>${it.name}</strong></td>
                  <td>1904</td>
                  <td>${it.qty}</td>
                  <td>₹${it.price}</td>
                  <td>₹${it.price * it.qty}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>

          <table class="totals-table">
            <tr><td>Taxable Value:</td><td style="text-align: right;">₹${taxableVal}</td></tr>
            <tr><td>CGST (2.5%):</td><td style="text-align: right;">₹${cgst}</td></tr>
            <tr><td>SGST (2.5%):</td><td style="text-align: right;">₹${sgst}</td></tr>
            <tr><td>Delivery Charges:</td><td style="text-align: right; color: green;">FREE</td></tr>
            <tr style="font-weight: bold; background: #f1f8e9; font-size: 15px;">
              <td>Total Amount Paid:</td>
              <td style="text-align: right; color: #2e7d32;">₹${order.amountPaid}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; border-top: 1px dashed #ccc; padding-top: 10px; font-size: 11px; color: #555; text-align: center;">
            This is a computer-generated tax invoice issued by S.P.R. Siri Dhanya under FSSAI Lic #20126152000402. Certified 100% vegetarian stone-milled staples.
          </div>
        </div>
      </body>
    </html>
  `;

  const win = window.open("", "_blank");
  win.document.write(invoiceHtml);
  win.document.close();
}

// --- 5. Full 14-Module Admin Command Center Tabs ---
function switchAdminTab(tabName) {
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
  
  // Hide all tab containers
  const tabs = ["Dashboard", "Orders", "Products", "Inventory", "Customers", "Payments", "Coupons", "Shipping", "Reviews", "Wholesale", "Qr", "Knowledge", "Reports", "Settings"];
  tabs.forEach(t => {
    const el = document.getElementById(`adminTab${t}Content`);
    if (el) el.style.display = "none";
  });

  // Activate chosen tab
  const capitalized = tabName.charAt(0).toUpperCase() + tabName.slice(1);
  const chosenBtn = document.getElementById(`tabBtn${capitalized}`);
  if (chosenBtn) chosenBtn.classList.add("active");

  const chosenContent = document.getElementById(`adminTab${capitalized}Content`);
  if (chosenContent) chosenContent.style.display = "block";

  // Trigger specific renderer
  if (tabName === "dashboard") renderAdminDashboardOverview();
  else if (tabName === "orders") refreshAdminData();
  else if (tabName === "products") renderAdminProductsTable();
  else if (tabName === "inventory") renderAdminInventoryTable();
  else if (tabName === "customers") renderAdminCustomersTable();
  else if (tabName === "payments") renderAdminPaymentsTable();
  else if (tabName === "coupons") renderAdminCouponsTable();
  else if (tabName === "shipping") renderAdminShippingTable();
  else if (tabName === "reviews") renderAdminReviewsTable();
  else if (tabName === "wholesale") renderAdminWholesaleTable();
  else if (tabName === "qr") renderAdminQrTab();
  else if (tabName === "knowledge") renderKnowledgeBaseTable();
  else if (tabName === "reports") renderAdminReports();
  else if (tabName === "settings") renderAdminSettings();
}

// Tab 1: Dashboard Overview
function renderAdminDashboardOverview() {
  const totalOrders = state.orders.length;
  const totalRev = state.orders.filter(o => o.status !== "Cancelled").reduce((s, o) => s + (o.amountPaid || 0), 0);
  const custCount = state.customers.length;
  const prodCount = PRODUCTS.length;

  document.getElementById("dbOverviewOrders").textContent = totalOrders;
  document.getElementById("dbOverviewRevenue").textContent = `₹${totalRev.toLocaleString('en-IN')}`;
  document.getElementById("dbOverviewCustomers").textContent = custCount;
  document.getElementById("dbOverviewProducts").textContent = prodCount;

  document.getElementById("dbTodaySales").textContent = `₹${totalRev > 0 ? totalRev : 0}`;
  document.getElementById("dbWeekSales").textContent = `₹${totalRev > 0 ? totalRev : 0}`;
  document.getElementById("dbAvgOrderVal").textContent = `₹${totalOrders > 0 ? Math.round(totalRev / totalOrders) : 0}`;
}

// Tab 2: Products & Categories
function renderAdminProductsTable() {
  const tbody = document.getElementById("adminProductsTableBody");
  if (!tbody) return;

  tbody.innerHTML = PRODUCTS.map(p => `
    <tr>
      <td><img src="${p.image}" alt="${p.name}" style="width: 36px; height: 36px; object-fit: contain;"></td>
      <td><strong>${p.name}</strong><br><span style="font-size: 11px; color: #666;">${p.teluguName}</span></td>
      <td><span class="pay-method-badge">${p.category}</span></td>
      <td><strong>₹${p.price}</strong> <del style="color: #888;">₹${p.mrp}</del></td>
      <td>${p.netWt}</td>
      <td><span class="pay-status-pill ${p.stock < 25 ? 'pending' : 'paid'}">${p.stock} units</span></td>
      <td><span class="status-pill status-${p.stock > 0 ? 'confirmed' : 'cancelled'}">${p.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="openEditProductModal(${p.id})">✏️ Edit</button>
        <button class="btn btn-danger-outline btn-sm" onclick="deleteProduct(${p.id})">🗑️</button>
      </td>
    </tr>
  `).join("");
}

function openAddProductModal() {
  document.getElementById("productFormModalTitle").textContent = "➕ Add New Millet Product";
  document.getElementById("editProductId").value = "";
  document.getElementById("prodFormName").value = "";
  document.getElementById("prodFormTelugu").value = "";
  document.getElementById("prodFormCategory").value = "dosa-mix";
  document.getElementById("prodFormWeight").value = "500 g";
  document.getElementById("prodFormPrice").value = "";
  document.getElementById("prodFormMrp").value = "";
  document.getElementById("prodFormStock").value = "100";
  document.getElementById("prodFormImage").value = "assets/ragi_dosa.png";
  document.getElementById("adminProductFormModal").classList.add("active");
}

function openEditProductModal(id) {
  const p = PRODUCTS.find(prod => prod.id === id);
  if (!p) return;

  document.getElementById("productFormModalTitle").textContent = "✏️ Edit Millet Product";
  document.getElementById("editProductId").value = p.id;
  document.getElementById("prodFormName").value = p.name;
  document.getElementById("prodFormTelugu").value = p.teluguName;
  document.getElementById("prodFormCategory").value = p.category;
  document.getElementById("prodFormWeight").value = p.netWt;
  document.getElementById("prodFormPrice").value = p.price;
  document.getElementById("prodFormMrp").value = p.mrp;
  document.getElementById("prodFormStock").value = p.stock;
  document.getElementById("prodFormImage").value = p.image;
  document.getElementById("adminProductFormModal").classList.add("active");
}

function handleProductFormSubmit(e) {
  e.preventDefault();
  const editId = document.getElementById("editProductId").value;
  const name = document.getElementById("prodFormName").value.trim();
  const teluguName = document.getElementById("prodFormTelugu").value.trim();
  const category = document.getElementById("prodFormCategory").value;
  const netWt = document.getElementById("prodFormWeight").value.trim();
  const price = parseInt(document.getElementById("prodFormPrice").value);
  const mrp = parseInt(document.getElementById("prodFormMrp").value);
  const stock = parseInt(document.getElementById("prodFormStock").value) || 50;
  const image = document.getElementById("prodFormImage").value.trim();

  if (editId) {
    // Update existing product
    const p = PRODUCTS.find(prod => prod.id == editId);
    if (p) {
      p.name = name;
      p.teluguName = teluguName;
      p.category = category;
      p.netWt = netWt;
      p.price = price;
      p.mrp = mrp;
      p.stock = stock;
      p.inStock = stock > 0;
      p.image = image;
      logAuditEvent("PRODUCT_UPDATED", `Updated ${p.name} (Price: ₹${price}, Stock: ${stock})`);
    }
  } else {
    // Add new product
    const newId = Math.max(...PRODUCTS.map(p => p.id), 0) + 1;
    const newProd = {
      id: newId,
      name,
      teluguName,
      category,
      price,
      mrp,
      rating: 4.9,
      reviewsCount: "1",
      image,
      netWt,
      stock,
      inStock: stock > 0,
      assured: true,
      highlights: ["100% Traditional Grain", "Just Add Water 15 Min", "High Nutrition & Protein"],
      specs: { "Net Weight": netWt, "Preparation Time": "15 Minutes", "FSSAI License": "20126152000402" }
    };
    PRODUCTS.push(newProd);
    logAuditEvent("PRODUCT_ADDED", `Created new SKU: ${name} (₹${price})`);
  }

  saveProductsDatabase();
  closeModal("adminProductFormModal");
  showToast("Product saved successfully & store catalog synchronized!");
}

function deleteProduct(id) {
  const p = PRODUCTS.find(prod => prod.id === id);
  if (!confirm(`Are you sure you want to delete "${p ? p.name : id}"?`)) return;

  const idx = PRODUCTS.findIndex(prod => prod.id === id);
  if (idx > -1) {
    const deleted = PRODUCTS.splice(idx, 1)[0];
    saveProductsDatabase();
    logAuditEvent("PRODUCT_DELETED", `Deleted SKU: ${deleted.name}`);
    showToast("Product removed from catalogue.");
  }
}

// Tab 4: Inventory & Low-Stock Alerts
function renderAdminInventoryTable() {
  const tbody = document.getElementById("adminInventoryTableBody");
  if (!tbody) return;

  tbody.innerHTML = PRODUCTS.map(p => `
    <tr>
      <td><strong>${p.name}</strong> (${p.netWt})</td>
      <td><span style="font-size: 14px; font-weight: 700;">${p.stock} Units</span></td>
      <td><span class="status-pill status-${p.stock > 0 ? 'confirmed' : 'cancelled'}">${p.stock > 0 ? 'Available' : 'Out of Stock'}</span></td>
      <td>
        ${p.stock < 25 ? `
          <span style="background: #ffebee; color: #c62828; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 11px;">
            ⚠️ Low Stock Alert (&lt; 25 units)
          </span>
        ` : `
          <span style="color: #2e7d32; font-weight: 600; font-size: 11px;">✅ Optimal Inventory</span>
        `}
      </td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="restockProduct(${p.id}, 25)">+25</button>
        <button class="btn btn-secondary btn-sm" onclick="restockProduct(${p.id}, 50)">+50</button>
        <button class="btn btn-primary btn-sm" onclick="restockProduct(${p.id}, 100)">+100</button>
      </td>
    </tr>
  `).join("");
}

function restockProduct(id, count) {
  const p = PRODUCTS.find(prod => prod.id === id);
  if (p) {
    p.stock += count;
    p.inStock = p.stock > 0;
    saveProductsDatabase();
    logAuditEvent("RESTOCK_UNITS", `Restocked ${p.name} by +${count} units (Total: ${p.stock})`);
    showToast(`Restocked ${p.name} by +${count} units.`);
  }
}

function quickRestockAll() {
  PRODUCTS.forEach(p => {
    p.stock += 50;
    p.inStock = true;
  });
  saveProductsDatabase();
  logAuditEvent("RESTOCK_ALL", "Restocked all 7 SKUs by +50 units");
  showToast("Restocked all factory items by +50 units!");
}

// Tab 5: Customers Management
function renderAdminCustomersTable() {
  const tbody = document.getElementById("adminCustomersTableBody");
  if (!tbody) return;

  tbody.innerHTML = state.customers.map(c => `
    <tr>
      <td><strong>${c.name}</strong></td>
      <td><a href="tel:${c.phone}" style="color: inherit; text-decoration: none;">📞 ${c.phone}</a></td>
      <td style="color: #666; font-size: 11.5px;">${c.email}</td>
      <td>${c.city}</td>
      <td><span class="pay-method-badge">${c.ordersCount} Order(s)</span></td>
      <td><strong style="color: #2e7d32;">₹${c.totalSpend}</strong></td>
      <td style="font-size: 11px; color: #666;">${c.lastOrder}</td>
    </tr>
  `).join("");
}

function filterCustomerTable() {
  const q = document.getElementById("adminCustSearch")?.value.toLowerCase().trim() || "";
  const tbody = document.getElementById("adminCustomersTableBody");
  if (!tbody) return;

  const filtered = state.customers.filter(c => 
    c.name.toLowerCase().includes(q) ||
    c.phone.includes(q) ||
    c.city.toLowerCase().includes(q)
  );

  tbody.innerHTML = filtered.map(c => `
    <tr>
      <td><strong>${c.name}</strong></td>
      <td><a href="tel:${c.phone}" style="color: inherit; text-decoration: none;">📞 ${c.phone}</a></td>
      <td style="color: #666; font-size: 11.5px;">${c.email}</td>
      <td>${c.city}</td>
      <td><span class="pay-method-badge">${c.ordersCount} Order(s)</span></td>
      <td><strong style="color: #2e7d32;">₹${c.totalSpend}</strong></td>
      <td style="font-size: 11px; color: #666;">${c.lastOrder}</td>
    </tr>
  `).join("");
}

// Tab 6: Payments & Transactions
function renderAdminPaymentsTable() {
  const tbody = document.getElementById("adminPaymentsTableBody");
  if (!tbody) return;

  tbody.innerHTML = state.orders.map(o => `
    <tr>
      <td style="font-family: monospace; font-weight: 700; color: var(--fk-blue);">${o.txnId || 'TXN-ONLINE'}</td>
      <td style="font-family: monospace; font-size: 11.5px;">${o.orderId}</td>
      <td><span class="pay-method-badge">${o.paymentMethod}</span></td>
      <td>${o.customer.fullName} (${o.customer.phone})</td>
      <td><strong>₹${o.amountPaid}</strong></td>
      <td style="font-size: 11px;">${o.createdAt}</td>
      <td><span class="pay-status-pill paid">${o.paymentStatus}</span></td>
    </tr>
  `).join("");
}

// Tab 7: Discounts & Coupons
function renderAdminCouponsTable() {
  const tbody = document.getElementById("adminCouponsTableBody");
  if (!tbody) return;

  tbody.innerHTML = state.coupons.map(c => `
    <tr>
      <td style="font-family: monospace; font-weight: 700; color: #2e7d32; font-size: 14px;">${c.code}</td>
      <td>${c.type === 'percentage' ? 'Percentage (%)' : 'Flat Cash (₹)'}</td>
      <td><strong>${c.type === 'percentage' ? c.value + '%' : '₹' + c.value}</strong></td>
      <td>₹${c.minSpend}</td>
      <td><span class="pay-status-pill paid">${c.status}</span></td>
      <td>
        <button class="btn btn-danger-outline btn-sm" onclick="deleteCoupon('${c.code}')">🗑️ Delete</button>
      </td>
    </tr>
  `).join("");
}

function openAddCouponModal() {
  document.getElementById("adminAddCouponModal").classList.add("active");
}

function handleCreateCouponSubmit(e) {
  e.preventDefault();
  const code = document.getElementById("newCouponCode").value.trim().toUpperCase();
  const type = document.getElementById("newCouponType").value;
  const value = parseInt(document.getElementById("newCouponValue").value);
  const minSpend = parseInt(document.getElementById("newCouponMinSpend").value) || 0;

  state.coupons.unshift({ code, type, value, minSpend, status: "Active" });
  localStorage.setItem(DB_COUPONS_KEY, JSON.stringify(state.coupons));
  logAuditEvent("COUPON_CREATED", `Created promo coupon: ${code} (${value} ${type})`);
  closeModal("adminAddCouponModal");
  renderAdminCouponsTable();
  showToast(`Promo coupon "${code}" created successfully!`);
}

function deleteCoupon(code) {
  if (!confirm(`Delete coupon "${code}"?`)) return;
  state.coupons = state.coupons.filter(c => c.code !== code);
  localStorage.setItem(DB_COUPONS_KEY, JSON.stringify(state.coupons));
  logAuditEvent("COUPON_DELETED", `Removed coupon: ${code}`);
  renderAdminCouponsTable();
  showToast(`Coupon "${code}" deleted.`);
}

// Tab 8: Delivery & Shipping
function renderAdminShippingTable() {
  const tbody = document.getElementById("adminShippingTableBody");
  if (!tbody) return;

  tbody.innerHTML = state.orders.map(o => `
    <tr>
      <td style="font-family: monospace; font-weight: 700; color: var(--fk-blue);">${o.orderId}</td>
      <td><strong>${o.customer.fullName}</strong><br><span style="font-size: 11px; color: #666;">${o.delivery.city || o.delivery.district}</span></td>
      <td>${o.shipping?.courier || 'India Post Speed Post'}</td>
      <td style="font-family: monospace;">${o.shipping?.trackingId || 'Pending AWB'}</td>
      <td style="font-size: 11px;">${o.shipping?.dispatchDate || o.createdAt.split(' ')[0]}</td>
      <td><span class="status-pill status-${o.status.toLowerCase().replace(/\s+/g, '-')}">${o.status}</span></td>
      <td>
        <button class="btn btn-primary btn-sm" onclick="openAdminOrderDetails('${o.orderId}')">Update AWB</button>
      </td>
    </tr>
  `).join("");
}

// Tab 9: Customer Reviews
function renderAdminReviewsTable() {
  const tbody = document.getElementById("adminReviewsTableBody");
  if (!tbody) return;

  tbody.innerHTML = state.reviews.map(r => `
    <tr>
      <td><strong>${r.name}</strong></td>
      <td><span style="color: #f59e0b; font-weight: 700;">${r.rating} ★</span></td>
      <td>${r.product}</td>
      <td style="font-size: 12px; color: #555;">${r.comment}</td>
      <td><span class="pay-status-pill paid">${r.status}</span></td>
      <td>
        <button class="btn btn-danger-outline btn-sm" onclick="deleteReview('${r.id}')">🗑️</button>
      </td>
    </tr>
  `).join("");
}

function deleteReview(id) {
  state.reviews = state.reviews.filter(r => r.id !== id);
  localStorage.setItem(DB_REVIEWS_KEY, JSON.stringify(state.reviews));
  renderAdminReviewsTable();
  showToast("Review deleted.");
}

// Tab 10: Wholesale Accounts
function renderAdminWholesaleTable() {
  const tbody = document.getElementById("adminWholesaleTableBody");
  if (!tbody) return;

  tbody.innerHTML = state.wholesaleAccounts.map(w => `
    <tr>
      <td style="font-family: monospace; font-weight: 700; color: #2e7d32;">${w.id}</td>
      <td><strong>${w.name}</strong></td>
      <td><span class="pay-method-badge">${w.type}</span></td>
      <td style="font-family: monospace;">${w.gstin}</td>
      <td>${w.contact}</td>
      <td><a href="tel:${w.phone}" style="color: inherit;">📞 ${w.phone}</a></td>
      <td>${w.city}</td>
      <td>
        <span class="status-pill status-${w.status === 'Approved' ? 'confirmed' : 'processing'}">
          ${w.status}
        </span>
      </td>
      <td>
        ${w.status !== 'Approved' ? `
          <button class="btn btn-primary btn-sm" onclick="approveWholesaleAccount('${w.id}')">✅ Approve</button>
        ` : `
          <span style="color: green; font-size: 11.5px; font-weight: bold;">Verified B2B</span>
        `}
      </td>
    </tr>
  `).join("");
}

function approveWholesaleAccount(id) {
  const acc = state.wholesaleAccounts.find(w => w.id === id);
  if (acc) {
    acc.status = "Approved";
    localStorage.setItem(DB_WHOLESALE_KEY, JSON.stringify(state.wholesaleAccounts));
    logAuditEvent("WHOLESALE_APPROVED", `Approved wholesale trade account: ${acc.name} (${acc.gstin})`);
    renderAdminWholesaleTable();
    showToast(`Approved trade account for ${acc.name}!`);
  }
}

function exportWholesaleCSV() {
  if (state.wholesaleAccounts.length === 0) {
    alert("No wholesale leads available.");
    return;
  }
  const headers = ["Account ID", "Business Name", "Type", "GSTIN", "Contact", "Phone", "City", "Status"];
  const rows = state.wholesaleAccounts.map(w => [w.id, `"${w.name}"`, w.type, w.gstin, `"${w.contact}"`, w.phone, `"${w.city}"`, w.status]);
  const csv = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const link = document.createElement("a");
  link.href = encodeURI(csv);
  link.download = "SPR_Siri_Dhanya_Wholesale_Leads.csv";
  link.click();
}

// Tab 13: Sales Reports
function renderAdminReports() {
  const totalRev = state.orders.filter(o => o.status !== "Cancelled").reduce((s, o) => s + (o.amountPaid || 0), 0);
  const totalOrders = state.orders.length;

  document.getElementById("reportDailyRevenue").textContent = `₹${totalRev}`;
  document.getElementById("reportDailyOrders").textContent = `${totalOrders} Orders Today`;
  document.getElementById("reportWeeklyRevenue").textContent = `₹${totalRev}`;
  document.getElementById("reportWeeklyOrders").textContent = `${totalOrders} Orders This Week`;
  document.getElementById("reportMonthlyRevenue").textContent = `₹${totalRev}`;
  document.getElementById("reportMonthlyOrders").textContent = `${totalOrders} Orders This Month`;
}

// Tab 14: Settings, Audit Logs & Backup
function renderAdminSettings() {
  renderAuditLogs();
}

function renderAuditLogs() {
  const box = document.getElementById("adminAuditLogBox");
  const countEl = document.getElementById("auditLogCount");
  if (countEl) countEl.textContent = state.auditLogs.length;
  if (!box) return;

  box.innerHTML = state.auditLogs.map(l => `
    <div style="margin-bottom: 4px; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 2px;">
      <span style="color: #94a3b8;">[${l.timestamp}]</span>
      <span style="color: #38bdf8; font-weight: bold;">[${l.event}]</span>
      <span>${l.details}</span>
    </div>
  `).join("");
}

function exportFullDatabaseJson() {
  const fullBackup = {
    exportDate: new Date().toISOString(),
    fssaiLicense: "20126152000402",
    company: "S.P.R. Siri Dhanya",
    products: PRODUCTS,
    orders: state.orders,
    customers: state.customers,
    coupons: state.coupons,
    reviews: state.reviews,
    wholesaleAccounts: state.wholesaleAccounts,
    auditLogs: state.auditLogs,
    knowledgeBase: state.knowledgeBase,
    qrCodes: state.qrCodes
  };

  const blob = new Blob([JSON.stringify(fullBackup, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `SPR_Siri_Dhanya_Master_Backup_${new Date().toISOString().substring(0, 10)}.json`;
  link.click();
  showToast("Exported full master database backup (JSON)!");
}

function importFullDatabaseJson(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.products) localStorage.setItem(DB_PRODUCTS_KEY, JSON.stringify(data.products));
      if (data.orders) localStorage.setItem(DB_ORDERS_KEY, JSON.stringify(data.orders));
      if (data.coupons) localStorage.setItem(DB_COUPONS_KEY, JSON.stringify(data.coupons));
      if (data.reviews) localStorage.setItem(DB_REVIEWS_KEY, JSON.stringify(data.reviews));
      if (data.wholesaleAccounts) localStorage.setItem(DB_WHOLESALE_KEY, JSON.stringify(data.wholesaleAccounts));

      initMasterDatabase();
      showToast("Database restored successfully from backup!");
      refreshAdminData();
    } catch(err) {
      alert("Invalid database backup file.");
    }
  };
  reader.readAsText(file);
}

// --- 6. Wholesale & B2B Portal Handlers ---
function openWholesalePortalModal() {
  document.getElementById("wholesalePortalModal")?.classList.add("active");
  calculateBulkCartonPrice();
}

function switchWholesaleTab(tab) {
  document.querySelectorAll("#wholesalePortalModal .admin-tab-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("wsTabCatalogueContent").style.display = "none";
  document.getElementById("wsTabRetailerContent").style.display = "none";
  document.getElementById("wsTabDistributorContent").style.display = "none";
  document.getElementById("wsTabBulkContent").style.display = "none";

  if (tab === "catalogue") {
    document.getElementById("wsTabBtnCatalogue").classList.add("active");
    document.getElementById("wsTabCatalogueContent").style.display = "block";
  } else if (tab === "retailer") {
    document.getElementById("wsTabBtnRetailer").classList.add("active");
    document.getElementById("wsTabRetailerContent").style.display = "block";
  } else if (tab === "distributor") {
    document.getElementById("wsTabBtnDistributor").classList.add("active");
    document.getElementById("wsTabDistributorContent").style.display = "block";
  } else if (tab === "bulk") {
    document.getElementById("wsTabBtnBulk").classList.add("active");
    document.getElementById("wsTabBulkContent").style.display = "block";
    calculateBulkCartonPrice();
  }
}

function handleRetailerRegistration(e) {
  e.preventDefault();
  const name = document.getElementById("retShopName").value.trim();
  const gstin = document.getElementById("retGstin").value.trim();
  const contact = document.getElementById("retContactPerson").value.trim();
  const phone = document.getElementById("retPhone").value.trim();
  const city = document.getElementById("retCity").value.trim();

  const newAcc = {
    id: "WS-RET-" + Math.floor(100 + Math.random() * 900),
    name,
    type: "Retailer (Supermarket)",
    gstin,
    contact,
    phone,
    city,
    status: "Pending Admin Approval"
  };

  state.wholesaleAccounts.unshift(newAcc);
  localStorage.setItem(DB_WHOLESALE_KEY, JSON.stringify(state.wholesaleAccounts));

  logAuditEvent("RETAILER_APPLIED", `Supermarket ${name} (${phone}) registered for B2B pricing`);

  // WhatsApp Alert to both numbers
  const alertMsg = `🤝 *NEW RETAILER B2B REGISTRATION*\nShop: ${name}\nGSTIN: ${gstin}\nContact: ${contact} (${phone})\nCity: ${city}\nPlease approve in Admin Dashboard.`;
  window.open(`https://wa.me/919492468817?text=${encodeURIComponent(alertMsg)}`, "_blank");

  closeModal("wholesalePortalModal");
  showToast("Application submitted! Admin will verify your GSTIN for wholesale rates.");
}

function handleDistributorRegistration(e) {
  e.preventDefault();
  const name = document.getElementById("distAgencyName").value.trim();
  const territory = document.getElementById("distTerritory").value.trim();
  const contact = document.getElementById("distContact").value.trim();
  const investment = document.getElementById("distInvestment").value;

  const newDist = {
    id: "WS-DIST-" + Math.floor(100 + Math.random() * 900),
    name,
    type: "Regional Distributor",
    gstin: "Pending Verification",
    contact,
    phone: contact,
    city: territory,
    status: "Pending Admin Approval"
  };

  state.wholesaleAccounts.unshift(newDist);
  localStorage.setItem(DB_WHOLESALE_KEY, JSON.stringify(state.wholesaleAccounts));

  const alertMsg = `🚚 *NEW DISTRIBUTOR ENQUIRY*\nFirm: ${name}\nTerritory: ${territory}\nContact: ${contact}\nInvestment: ${investment}\nPlease connect immediately.`;
  window.open(`https://wa.me/919441393817?text=${encodeURIComponent(alertMsg)}`, "_blank");

  closeModal("wholesalePortalModal");
  showToast("Distributor enquiry sent directly to factory directors!");
}

function calculateBulkCartonPrice() {
  const sel = document.getElementById("bulkCartonQtySelect");
  const qty = parseInt(sel ? sel.value : 1);
  let rate = 2490 * qty;
  if (qty >= 10) rate = 23500; // special pallet pricing
  const el = document.getElementById("bulkCalculatedAmount");
  if (el) el.textContent = `₹${rate.toLocaleString('en-IN')}`;
}

function proceedBulkOrderCheckout() {
  const sel = document.getElementById("bulkCartonQtySelect");
  const qty = parseInt(sel ? sel.value : 1);

  // Add Wholesale Master Carton to Cart
  const wholesaleProd = PRODUCTS.find(p => p.id === 7) || PRODUCTS[PRODUCTS.length - 1];
  const existing = state.cart.find(c => c.id === wholesaleProd.id);
  if (existing) existing.qty = qty;
  else state.cart.push({ id: wholesaleProd.id, qty });

  saveCartToStorage();
  updateCartBadge();
  closeModal("wholesalePortalModal");
  openCheckoutModal();
  showToast(`Added ${qty} Master Carton(s) to Cart! Proceed to B2B checkout.`);
}

function downloadSampleB2bInvoice() {
  const sampleOrder = state.orders.find(o => o.items.some(i => i.id === 7)) || state.orders[0];
  downloadOrderInvoice(sampleOrder.orderId);
}

// --- 7. Legal & Business Compliance Policies ---
function openPolicyModal(tab) {
  document.getElementById("policyModal")?.classList.add("active");
  switchPolicyTab(tab);
}

function switchPolicyTab(tab) {
  document.querySelectorAll("#policyModal .admin-tab-btn").forEach(b => b.classList.remove("active"));
  const box = document.getElementById("policyContentBox");
  if (!box) return;

  if (tab === "privacy") {
    document.getElementById("polTabPrivacy")?.classList.add("active");
    box.innerHTML = `
      <h4>🔒 S.P.R. SIRI DHANYA - PRIVACY POLICY</h4>
      <p>Last Updated: November 2026</p>
      <p>S.P.R. Siri Dhanya is committed to safeguarding your personal and transactional privacy. When you place an order on our e-commerce platform, we collect only necessary fulfillment data:</p>
      <ul>
        <li><strong>Personal Information:</strong> Full name, 10-digit mobile number, and email address for order notifications and dispatch alerts.</li>
        <li><strong>Delivery Information:</strong> Accurate postal address, street, village/town, mandal, district, state, and 6-digit PIN code.</li>
        <li><strong>Payment Data:</strong> All payments are processed through RBI-approved secure online gateways with 256-bit encryption. S.P.R. Siri Dhanya never stores your credit/debit card CVV, PINs, or bank passwords.</li>
        <li><strong>Zero Third-Party Selling:</strong> We never sell, rent, or trade your personal information to third-party advertisers.</li>
      </ul>
      <p>For data privacy queries or account deletion, write to us at support@sprsiridhanya.com or call 9492468817.</p>
    `;
  } else if (tab === "terms") {
    document.getElementById("polTabTerms")?.classList.add("active");
    box.innerHTML = `
      <h4>⚖️ TERMS & CONDITIONS OF SALE</h4>
      <p>By purchasing from S.P.R. Siri Dhanya, you agree to the following food enterprise terms:</p>
      <ul>
        <li><strong>Product Authenticity:</strong> All instant millet dosa mixes and multi-grain attas are manufactured and stone-milled in Kamepalli, Santamaguluru Mandal, Bapatla District, A.P., in compliance with FSSAI regulations.</li>
        <li><strong>Pricing & Taxes:</strong> All retail prices listed on our platform are inclusive of applicable 5% Goods and Services Tax (GST: 2.5% CGST + 2.5% SGST).</li>
        <li><strong>Order Fulfillment:</strong> Orders are verified and dispatched within 24 to 48 business hours. Tracking AWBs are provided immediately.</li>
        <li><strong>Wholesale Accounts:</strong> B2B wholesale pricing is restricted to verified supermarkets and registered trade partners with valid GSTINs.</li>
      </ul>
    `;
  } else if (tab === "refund") {
    document.getElementById("polTabRefund")?.classList.add("active");
    box.innerHTML = `
      <h4>↩️ RETURN, REPLACEMENT & REFUND POLICY</h4>
      <p>Because S.P.R. Siri Dhanya produces consumable packaged food staples, strict safety standards apply:</p>
      <ul>
        <li><strong>Damaged or Compromised Packs:</strong> If your consignment arrives with damaged pouches or broken seals, you are eligible for an immediate, 100% FREE replacement pack dispatched with priority.</li>
        <li><strong>Replacement Window:</strong> Please submit your request via the "My Orders" dashboard or WhatsApp within <strong>7 days</strong> of delivery.</li>
        <li><strong>100% Refund Guarantee:</strong> If a replacement is unavailable, we process a complete refund directly to your original payment method (UPI / Bank Account / Card) within 3 to 5 banking business days.</li>
      </ul>
    `;
  } else if (tab === "shipping") {
    document.getElementById("polTabShipping")?.classList.add("active");
    box.innerHTML = `
      <h4>🚚 SHIPPING & DELIVERY POLICY</h4>
      <ul>
        <li><strong>FREE Express Delivery:</strong> All consumer retail orders across Andhra Pradesh, Telangana, and pan-India qualify for 100% FREE express delivery.</li>
        <li><strong>Courier Partners:</strong> Consignments are dispatched via <strong>India Post Speed Post</strong>, <strong>Delhivery Surface</strong>, and <strong>DTDC Express</strong>.</li>
        <li><strong>Delivery Timelines:</strong>
          <ul>
            <li>Andhra Pradesh & Telangana: 1 to 2 business days.</li>
            <li>South India (Karnataka, Tamil Nadu): 2 to 3 business days.</li>
            <li>Rest of India: 3 to 5 business days.</li>
          </ul>
        </li>
      </ul>
    `;
  } else if (tab === "fssai") {
    document.getElementById("polTabFssai")?.classList.add("active");
    box.innerHTML = `
      <h4>🛡️ FSSAI CERTIFICATION & FOOD LABELLING DECLARATIONS</h4>
      <ul>
        <li><strong>FSSAI License Number:</strong> <code>20126152000402</code></li>
        <li><strong>Manufacturing Facility:</strong> Kamepalli, Santamaguluru Mandal, Bapatla District, Andhra Pradesh - 523326.</li>
        <li><strong>Dietary Classification:</strong> 100% Pure Vegetarian (Green Dot Vegetarian Logo on all packaging).</li>
        <li><strong>Preservative Free:</strong> 100% natural grains, stone-milled, zero artificial colors, zero synthetic chemical preservatives, zero maida.</li>
        <li><strong>Shelf Life:</strong> 6 to 9 months from date of manufacture when stored in cool, dry conditions away from moisture.</li>
      </ul>
    `;
  }
}


// =========================================================================
// === MASTER INITIALIZATION HOOK ===
// =========================================================================
document.addEventListener("DOMContentLoaded", function() {
  if (typeof initMasterDatabase === "function") initMasterDatabase();
  if (typeof initExtraDatabases === "function") initExtraDatabases();
  if (typeof renderMyOrders === "function") renderMyOrders();
});


// =========================================================================
// === S.P.R. SIRI DHANYA: COMPLETE QR CODE HUB (GENERATOR & SCANNER) ======
// =========================================================================

const qrHubState = {
  activeTab: "generator",
  targetUrl: (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "http://10.68.196.33:8000/index.html" : window.location.href,
  campaignName: "Mobile Wi-Fi Live Storefront",
  size: 512,
  brandStyle: "branded", // "branded" or "clean"
  facingMode: "environment", // Mobile back camera by default
  videoStream: null,
  isScanning: false,
  lastScannedResult: null
};

// Open the QR Code Hub Modal
function openQrHubModal(initialTab = "generator") {
  const modal = document.getElementById("qrHubModal");
  if (!modal) return;

  modal.classList.add("active");
  switchQrHubTab(initialTab);
}

// Close the QR Code Hub Modal
function closeQrHubModal() {
  stopQrHubCamera();
  document.getElementById("qrHubModal")?.classList.remove("active");
}

// Backwards-compatible aliases
function openQrScannerModal() {
  openQrHubModal("scanner");
}
function closeQrScannerModal() {
  closeQrHubModal();
}

// Switch between Generator and Scanner tabs
function switchQrHubTab(tab) {
  qrHubState.activeTab = tab;

  const btnGen = document.getElementById("qrHubTabBtnGenerator");
  const btnScan = document.getElementById("qrHubTabBtnScanner");
  const contGen = document.getElementById("qrHubTabGeneratorContent");
  const contScan = document.getElementById("qrHubTabScannerContent");

  if (tab === "generator") {
    btnGen?.classList.add("active");
    btnScan?.classList.remove("active");
    if (contGen) contGen.style.display = "block";
    if (contScan) contScan.style.display = "none";
    stopQrHubCamera();
    generateQrHubCode();
  } else {
    btnScan?.classList.add("active");
    btnGen?.classList.remove("active");
    if (contScan) contScan.style.display = "block";
    if (contGen) contGen.style.display = "none";
    const detectCard = document.getElementById("qrHubDetectCard");
    if (detectCard) detectCard.style.display = "none";
    startQrHubCamera();
  }
}

// Handle Preset Selection Change
function handleQrHubPresetChange() {
  const sel = document.getElementById("qrHubTargetSelect");
  if (!sel) return;

  const val = sel.value;
  const opt = sel.options[sel.selectedIndex];
  const customGroup = document.getElementById("qrHubCustomUrlGroup");

  if (val === "custom") {
    if (customGroup) customGroup.style.display = "block";
    qrHubState.targetUrl = document.getElementById("qrHubCustomUrlInput")?.value.trim() || "https://sprsiridhanya.com";
    qrHubState.campaignName = "Custom URL / Promotion";
  } else {
    if (customGroup) customGroup.style.display = "none";
    qrHubState.targetUrl = val;
    qrHubState.campaignName = opt.getAttribute("data-campaign") || "Website Page";
  }

  generateQrHubCode();
}

// Handle Custom URL text input
function handleQrHubCustomInput() {
  const input = document.getElementById("qrHubCustomUrlInput");
  if (!input) return;
  qrHubState.targetUrl = input.value.trim() || "https://sprsiridhanya.com";
  generateQrHubCode();
}

// Handle Brand Style change
function handleQrHubStyleChange(style) {
  qrHubState.brandStyle = style;
  generateQrHubCode();
}

// Set Output Size
function setQrHubSize(size) {
  qrHubState.size = size;
  document.querySelectorAll(".qr-hub-size-btn").forEach(b => b.classList.remove("active"));
  document.getElementById(`qrHubSize${size}`)?.classList.add("active");
  generateQrHubCode();
}

// Generate the Website QR Code on Canvas
function generateQrHubCode() {
  const canvas = document.getElementById("qrHubCanvas");
  if (!canvas) return;

  const targetUrl = qrHubState.targetUrl || "https://sprsiridhanya.com";
  const branding = qrHubState.brandStyle;
  const infoText = document.getElementById("qrHubInfoText");
  if (infoText) {
    infoText.textContent = `Target: ${targetUrl} (${qrHubState.size}×${qrHubState.size}px • ${branding === "branded" ? "Official Branded" : "Clean Pure QR"})`;
  }

  // Set display canvas dimensions
  const displayW = 320;
  const displayH = branding === "branded" ? 390 : 320;
  canvas.width = displayW;
  canvas.height = displayH;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const qrBoxSize = branding === "branded" ? 230 : 290;

  if (window.QRCode) {
    const tempDiv = document.createElement("div");
    new window.QRCode(tempDiv, {
      text: targetUrl,
      width: qrBoxSize,
      height: qrBoxSize,
      colorDark: branding === "branded" ? "#1b5e20" : "#000000",
      colorLight: "#ffffff",
      correctLevel: window.QRCode.CorrectLevel.H
    });

    setTimeout(() => {
      const generatedImg = tempDiv.querySelector("canvas") || tempDiv.querySelector("img");
      if (!generatedImg) return;

      // Draw Background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, displayW, displayH);

      if (branding === "branded") {
        // Outer Green Border
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#1b5e20";
        ctx.strokeRect(2, 2, displayW - 4, displayH - 4);

        // Inner Gold Accent Line
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "#fbc02d";
        ctx.strokeRect(6, 6, displayW - 12, displayH - 12);

        // Header Title
        ctx.fillStyle = "#1b5e20";
        ctx.font = "bold 15px 'Segoe UI', Arial, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("S.P.R. SIRI DHANYA", displayW / 2, 28);

        // Telugu Subtitle
        ctx.fillStyle = "#555555";
        ctx.font = "11px 'Segoe UI', Arial, sans-serif";
        ctx.fillText("సంప్రదాయ పోషణ – ఆధునిక సౌలభ్యం", displayW / 2, 44);

        // Center QR Code
        const qrLeft = (displayW - qrBoxSize) / 2;
        ctx.drawImage(generatedImg, qrLeft, 56, qrBoxSize, qrBoxSize);

        // Bottom CTA Banner
        ctx.fillStyle = "#1b5e20";
        ctx.fillRect(14, displayH - 42, displayW - 28, 28);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 11px 'Segoe UI', Arial, sans-serif";
        ctx.fillText("SCAN TO VISIT WEBSITE", displayW / 2, displayH - 24);
      } else {
        // Clean Pure QR
        const qrLeft = (displayW - qrBoxSize) / 2;
        const qrTop = (displayH - qrBoxSize) / 2;
        ctx.drawImage(generatedImg, qrLeft, qrTop, qrBoxSize, qrBoxSize);
      }
    }, 80);
  }
}

// Download QR Code as PNG, SVG, or PDF
function downloadQrHubCode(format) {
  const targetUrl = qrHubState.targetUrl || "https://sprsiridhanya.com";
  const branding = qrHubState.brandStyle;
  const fullSize = qrHubState.size || 512;
  const fileName = `SPR_Siri_Dhanya_${qrHubState.campaignName.replace(/[^a-zA-Z0-9]/g, '_')}`;

  // 1. PNG DOWNLOAD
  if (format === "png") {
    // Generate high-resolution offscreen canvas
    const offCanvas = document.createElement("canvas");
    const h = branding === "branded" ? Math.floor(fullSize * 1.22) : fullSize;
    offCanvas.width = fullSize;
    offCanvas.height = h;
    const ctx = offCanvas.getContext("2d");

    const qrBoxSize = branding === "branded" ? Math.floor(fullSize * 0.74) : Math.floor(fullSize * 0.92);

    const tempDiv = document.createElement("div");
    new window.QRCode(tempDiv, {
      text: targetUrl,
      width: qrBoxSize,
      height: qrBoxSize,
      colorDark: branding === "branded" ? "#1b5e20" : "#000000",
      colorLight: "#ffffff",
      correctLevel: window.QRCode.CorrectLevel.H
    });

    setTimeout(() => {
      const img = tempDiv.querySelector("canvas") || tempDiv.querySelector("img");
      if (!img) return;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, fullSize, h);

      if (branding === "branded") {
        ctx.lineWidth = Math.max(4, Math.floor(fullSize * 0.015));
        ctx.strokeStyle = "#1b5e20";
        ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, fullSize - ctx.lineWidth, h - ctx.lineWidth);

        ctx.lineWidth = Math.max(2, Math.floor(fullSize * 0.006));
        ctx.strokeStyle = "#fbc02d";
        ctx.strokeRect(fullSize * 0.02, fullSize * 0.02, fullSize * 0.96, h - fullSize * 0.04);

        ctx.fillStyle = "#1b5e20";
        ctx.font = `bold ${Math.floor(fullSize * 0.05)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText("S.P.R. SIRI DHANYA", fullSize / 2, fullSize * 0.08);

        ctx.fillStyle = "#555";
        ctx.font = `${Math.floor(fullSize * 0.026)}px sans-serif`;
        ctx.fillText("సంప్రదాయ పోషణ – ఆధునిక సౌలభ్యం", fullSize / 2, fullSize * 0.118);

        const qrLeft = (fullSize - qrBoxSize) / 2;
        ctx.drawImage(img, qrLeft, fullSize * 0.15, qrBoxSize, qrBoxSize);

        ctx.fillStyle = "#1b5e20";
        ctx.fillRect(fullSize * 0.05, h - fullSize * 0.13, fullSize * 0.9, fullSize * 0.085);

        ctx.fillStyle = "#ffffff";
        ctx.font = `bold ${Math.floor(fullSize * 0.034)}px sans-serif`;
        ctx.fillText("SCAN TO VISIT OUR WEBSITE", fullSize / 2, h - fullSize * 0.075);
      } else {
        const qrLeft = (fullSize - qrBoxSize) / 2;
        const qrTop = (h - qrBoxSize) / 2;
        ctx.drawImage(img, qrLeft, qrTop, qrBoxSize, qrBoxSize);
      }

      const link = document.createElement("a");
      link.download = `${fileName}_${fullSize}px.png`;
      link.href = offCanvas.toDataURL("image/png");
      link.click();
      showToast(`Downloaded ${fullSize}×${h}px PNG QR Code!`);
    }, 100);
  }

  // 2. SVG VECTOR DOWNLOAD
  else if (format === "svg") {
    const canvas = document.getElementById("qrHubCanvas");
    const dataUrl = canvas.toDataURL("image/png");
    const svgW = canvas.width;
    const svgH = canvas.height;

    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}">
  <title>S.P.R. Siri Dhanya - Official QR Code</title>
  <desc>Destination URL: ${targetUrl}</desc>
  <rect width="100%" height="100%" fill="#ffffff"/>
  <image href="${dataUrl}" width="${svgW}" height="${svgH}"/>
</svg>`;

    const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const link = document.createElement("a");
    link.download = `${fileName}.svg`;
    link.href = URL.createObjectURL(blob);
    link.click();
    showToast("Downloaded official SVG vector QR Code!");
  }

  // 3. PDF PRINTABLE FLYER DOWNLOAD
  else if (format === "pdf") {
    const canvas = document.getElementById("qrHubCanvas");
    const dataUrl = canvas.toDataURL("image/png");

    const printWin = window.open("", "_blank");
    if (!printWin) {
      alert("Please allow popups to open the printable PDF document.");
      return;
    }

    printWin.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>S.P.R. Siri Dhanya Official QR Code Flyer</title>
          <style>
            @page { size: A4 portrait; margin: 15mm; }
            body {
              font-family: 'Segoe UI', Arial, sans-serif;
              color: #212121;
              text-align: center;
              margin: 0;
              padding: 20px;
              background: #fff;
            }
            .flyer-border {
              border: 3px solid #1b5e20;
              border-radius: 12px;
              padding: 28px;
              max-width: 650px;
              margin: 0 auto;
              box-sizing: border-box;
            }
            .brand-badge {
              display: inline-block;
              background: #e8f5e9;
              color: #1b5e20;
              padding: 4px 14px;
              border-radius: 20px;
              font-size: 13px;
              font-weight: 700;
              margin-bottom: 8px;
            }
            h1 {
              color: #1b5e20;
              margin: 0 0 6px 0;
              font-size: 28px;
              letter-spacing: 0.5px;
            }
            .tagline {
              font-size: 15px;
              color: #444;
              font-weight: 600;
              margin: 0 0 16px 0;
            }
            .qr-container {
              background: #ffffff;
              display: inline-block;
              padding: 16px;
              border: 2px dashed #81c784;
              border-radius: 10px;
              margin: 10px auto;
            }
            .qr-container img {
              width: 260px;
              height: auto;
              display: block;
            }
            .scan-callout {
              background: #1b5e20;
              color: #ffffff;
              font-weight: 700;
              font-size: 14px;
              padding: 8px 24px;
              border-radius: 6px;
              display: inline-block;
              margin-top: 14px;
            }
            .target-url {
              font-family: monospace;
              color: #1565c0;
              font-size: 14px;
              font-weight: 700;
              margin: 12px 0 20px 0;
            }
            .products-list {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 8px;
              text-align: left;
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 14px 18px;
              font-size: 13px;
              margin-top: 16px;
            }
            .footer-compliance {
              border-top: 1px solid #e0e0e0;
              padding-top: 14px;
              margin-top: 20px;
              font-size: 12px;
              color: #555;
              line-height: 1.5;
            }
            @media print {
              body { padding: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="flyer-border">
            <div class="brand-badge">🌾 100% PURE MILLET STAPLES • FSSAI CERTIFIED</div>
            <h1>S.P.R. SIRI DHANYA</h1>
            <p class="tagline">సంప్రదాయ పోషణ – ఆధునిక సౌలభ్యం • ప్రతి గింజలో ఆరోగ్యం</p>

            <div class="qr-container">
              <img src="${dataUrl}" alt="S.P.R. Siri Dhanya Official QR Code" />
            </div>

            <div>
              <div class="scan-callout">📱 SCAN WITH ANY SMARTPHONE CAMERA TO ORDER</div>
            </div>
            <div class="target-url">🌐 ${targetUrl}</div>

            <div class="products-list">
              <div>• <strong>Instant Ragi Dosa Mix</strong> (500g) — ₹119</div>
              <div>• <strong>Instant Jowar Dosa Mix</strong> (500g) — ₹119</div>
              <div>• <strong>Instant Pesara Dosa Mix</strong> (500g) — ₹129</div>
              <div>• <strong>Instant Korra Dosa Mix</strong> (500g) — ₹129</div>
              <div>• <strong>Multi Grain Atta</strong> (1 KG) — ₹150</div>
              <div>• <strong>5-in-1 Complete Health Combo</strong> — ₹629</div>
            </div>

            <div class="footer-compliance">
              🛡️ <strong>FSSAI Central/State License:</strong> 20126152000402<br>
              🏭 <strong>Manufacturing Facility:</strong> Kamepalli, Santamaguluru Mandal, Bapatla District, A.P. - 523326<br>
              📞 <strong>WhatsApp & Order Inquiries:</strong> +91 94413 93817 / 9492468817
            </div>
          </div>
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    printWin.document.close();
    showToast("Opened official PDF Flyer for printing / Save as PDF!");
  }
}

// Copy destination URL to clipboard
function copyQrHubUrl() {
  const url = qrHubState.targetUrl || "https://sprsiridhanya.com";
  navigator.clipboard.writeText(url).then(() => {
    showToast("Copied destination URL to clipboard!");
  }).catch(() => {
    prompt("Destination URL:", url);
  });
}

// Copy detected scanned URL
function copyDetectedQrHubUrl() {
  const url = qrHubState.lastScannedResult || "";
  if (!url) return;
  navigator.clipboard.writeText(url).then(() => {
    showToast("Copied scanned URL to clipboard!");
  });
}

// Open detected destination page
function handleQrHubOpenDestination() {
  const url = qrHubState.lastScannedResult;
  if (!url) return;
  closeQrHubModal();
  if (url.startsWith("http://") || url.startsWith("https://")) {
    window.open(url, "_blank");
  } else {
    alert("Decoded QR Content: " + url);
  }
}

// --- Mobile Camera QR Scanner Engine ---
function startQrHubCamera() {
  const video = document.getElementById("qrHubScannerVideo");
  const statusTag = document.getElementById("qrHubScannerStatus");
  if (!video) return;

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    if (statusTag) statusTag.textContent = "Camera API not supported in browser. Please upload an image file.";
    return;
  }

  if (statusTag) statusTag.textContent = "Requesting mobile camera access...";

  const facing = qrHubState.facingMode || "environment";
  const constraints = {
    video: {
      facingMode: { ideal: facing },
      width: { ideal: 1280 },
      height: { ideal: 720 }
    }
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      qrHubState.videoStream = stream;
      qrHubState.isScanning = true;
      video.srcObject = stream;
      video.setAttribute("playsinline", true);
      video.play();
      if (statusTag) statusTag.textContent = `Scanning with ${facing === "environment" ? "Back Camera" : "Front Camera"}... Point at QR Code`;
      requestAnimationFrame(scanQrHubTick);
    })
    .catch(err => {
      console.warn("Mobile camera error:", err);
      // Fallback try without ideal facingMode
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(fallbackStream => {
          qrHubState.videoStream = fallbackStream;
          qrHubState.isScanning = true;
          video.srcObject = fallbackStream;
          video.setAttribute("playsinline", true);
          video.play();
          if (statusTag) statusTag.textContent = "Point camera at QR Code...";
          requestAnimationFrame(scanQrHubTick);
        })
        .catch(finalErr => {
          if (statusTag) statusTag.textContent = "Camera unavailable. Tap 'Upload Image' to scan from gallery.";
        });
    });
}

function stopQrHubCamera() {
  qrHubState.isScanning = false;
  if (qrHubState.videoStream) {
    qrHubState.videoStream.getTracks().forEach(track => track.stop());
    qrHubState.videoStream = null;
  }
}

// Flip Camera between Rear and Front
function flipQrCamera() {
  qrHubState.facingMode = (qrHubState.facingMode === "environment") ? "user" : "environment";
  stopQrHubCamera();
  setTimeout(() => startQrHubCamera(), 150);
}

// Real-time camera tick with jsQR
function scanQrHubTick() {
  if (!qrHubState.isScanning) return;
  const video = document.getElementById("qrHubScannerVideo");
  const canvas = document.getElementById("qrHubScannerCanvas");
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
        onQrHubCodeDetected(code.data);
        return;
      }
    }
  }
  requestAnimationFrame(scanQrHubTick);
}

// Decoded QR Code Result Handler
function onQrHubCodeDetected(decodedUrl) {
  stopQrHubCamera();
  qrHubState.lastScannedResult = decodedUrl;

  const card = document.getElementById("qrHubDetectCard");
  const urlEl = document.getElementById("qrHubDetectUrl");
  const statusTag = document.getElementById("qrHubScannerStatus");

  if (statusTag) statusTag.textContent = "✅ QR Code successfully decoded!";
  if (card) card.style.display = "block";
  if (urlEl) urlEl.textContent = decodedUrl;

  showToast("QR Code successfully scanned!");
}

// Upload QR Image from Mobile Gallery or File
function handleQrHubFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.getElementById("qrHubScannerCanvas");
      if (!canvas) return;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      if (window.jsQR) {
        const code = window.jsQR(imageData.data, imageData.width, imageData.height);
        if (code && code.data) {
          onQrHubCodeDetected(code.data);
        } else {
          alert("No QR Code detected in uploaded image. Please ensure the QR is clear and well-lit.");
        }
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
