/* ==========================================================================
   KAVITA SAREES & KIDS WEAR (AMRAVATI)
   Dynamic Interactive Engine - Pure English Version
   ========================================================================== */

// Product Dataset aligned with Store Signboard & Categories
const sareesData = [
    {
        id: "ks-101",
        title: "Shahi Kadwa Banarasi Silk Saree",
        category: "sarees",
        categoryLabel: "Sarees • Banarasi Silk",
        price: 18500,
        originalPrice: 24500,
        image: "images/banarasi.jpg",
        badge: "Pure Silk Mark",
        fabric: "100% Pure Katan Silk",
        weave: "Kadwa Handloom Brocade Zari",
        blouse: "Unstitched Heavy Zari Blouse Piece (0.8m)",
        rating: 5.0,
        reviewsCount: 45,
        description: "Exquisite maroon Banarasi silk saree handcrafted by master weavers in Varanasi. Features heavy gold kadwa zari paisley motifs and royal pallu."
    },
    {
        id: "ks-102",
        title: "Traditional 9-Yard Nauvari Paithani Saree",
        category: "nauvari",
        categoryLabel: "Nauvari & Paithani • 9-Yard Saree",
        price: 16800,
        originalPrice: 21000,
        image: "images/nauvari.jpg",
        badge: "Maharashtrian Special",
        fabric: "Pure Mulberry Silk",
        weave: "Traditional Peacock Pallu & Zari Border",
        blouse: "Matching Pure Silk Blouse Piece",
        rating: 5.0,
        reviewsCount: 62,
        description: "Traditional 9-yard Maharashtrian Nauvari Paithani silk saree with grand peacock motifs on pallu and heavy gold border. Perfect for weddings & festive rituals."
    },
    {
        id: "ks-103",
        title: "Kanchipuram Temple Weave Bridal Silk Saree",
        category: "sarees",
        categoryLabel: "Sarees • Kanjeevaram",
        price: 26900,
        originalPrice: 32000,
        image: "images/kanjeevaram.jpg",
        badge: "Bridal Trousseau",
        fabric: "Pure Mulberry Silk",
        weave: "Korvai Temple Border 2G Zari",
        blouse: "Peacock Blue Silk Blouse Piece",
        rating: 4.9,
        reviewsCount: 38,
        description: "Opulent peacock blue and emerald green pure Kanjeevaram silk saree with pure gold zari weave. Designed for wedding trousseaus."
    },
    {
        id: "ks-104",
        title: "Boys Royal Brocade Silk Sherwani Set",
        category: "kids",
        categoryLabel: "Kids Wear • Boys Wear",
        price: 3450,
        originalPrice: 4800,
        image: "images/kids_boy.jpg",
        badge: "Kids Bestseller",
        fabric: "Brocade Silk & Soft Cotton Lining",
        weave: "Heavy Zari Embellished",
        blouse: "Includes Churidar Pyjama",
        rating: 4.8,
        reviewsCount: 29,
        description: "Royal maroon and gold brocade silk sherwani set for boys. Comfortable inner cotton lining with elegant buttons for festive celebrations."
    },
    {
        id: "ks-105",
        title: "Girls Royal Embroidered Silk Lehenga Choli",
        category: "kids",
        categoryLabel: "Kids Wear • Girls Wear",
        price: 4200,
        originalPrice: 5600,
        image: "images/kids_girl.jpg",
        badge: "Kids Special",
        fabric: "Art Silk & Net Dupatta",
        weave: "Zari & Sequin Embroidery",
        blouse: "Stitched Choli with Dupatta",
        rating: 4.9,
        reviewsCount: 41,
        description: "Vibrant red and gold festive silk lehenga choli for girls with intricate embroidery and soft net dupatta."
    },
    {
        id: "ks-106",
        title: "Aher Special Gifting Sarees (Set of 5)",
        category: "aher",
        categoryLabel: "Aher Special • Wholesale Combo",
        price: 8500,
        originalPrice: 12000,
        image: "images/bandhani.jpg",
        badge: "Wholesale Rate",
        fabric: "Soft Silk & Bandhani Blend",
        weave: "Festive Border Gota Work",
        blouse: "Set of 5 Sarees for Wedding Gifting / Aher",
        rating: 4.9,
        reviewsCount: 88,
        description: "Special wholesale combo pack of 5 premium gifting sarees (Aher Special) for marriage functions at direct factory rates."
    },
    {
        id: "ks-107",
        title: "Blush Pink Hand-Painted Organza Silk Saree",
        category: "sarees",
        categoryLabel: "Sarees • Organza",
        price: 11200,
        originalPrice: 14800,
        image: "images/organza.jpg",
        badge: "Trending",
        fabric: "Sheer Tissue Organza",
        weave: "Hand Painted Floral & Zari Border",
        blouse: "Raw Silk Embroidered Blouse",
        rating: 4.8,
        reviewsCount: 29,
        description: "Lightweight pastel blush pink organza saree adorned with handcrafted floral art and delicate scalloped border."
    },
    {
        id: "ks-108",
        title: "Midnight Blue Velvet Zardozi Shalu Saree",
        category: "shalu",
        categoryLabel: "Shalu & Lehengas • Designer Wear",
        price: 22400,
        originalPrice: 28000,
        image: "images/velvet.jpg",
        badge: "Royal Shalu",
        fabric: "Micro Velvet & Soft Net",
        weave: "Zardozi & Heavy Sequin Work",
        blouse: "Heavy Designer Velvet Blouse",
        rating: 5.0,
        reviewsCount: 19,
        description: "Glamorous midnight blue velvet designer shalu saree featuring elaborate zardozi work for grand receptions."
    }
];

// Application State
let currentCategory = "all";
let cart = [];
let wishlist = new Set();
let appliedCoupon = null;
const COUPON_CODE = "KAVITA10";

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
    initCatalog();
    initCart();
    initEventListeners();
    initStylistWizard();
});

// Render Catalog
function initCatalog() {
    renderProducts(sareesData);
}

function renderProducts(items) {
    const grid = document.getElementById("productGrid");
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
                <i class="fa-solid fa-store-slash" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--primary-maroon);">No Products Found</h3>
                <p style="color: var(--text-muted);">Please try selecting another category or search filter.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = items.map(saree => {
        const isWishlisted = wishlist.has(saree.id);
        const discount = Math.round(((saree.originalPrice - saree.price) / saree.originalPrice) * 100);

        return `
            <div class="product-card" data-id="${saree.id}" data-category="${saree.category}">
                <div class="product-img-wrapper">
                    <img src="${saree.image}" alt="${saree.title}" class="product-img" loading="lazy">
                    <span class="product-badge">${saree.badge}</span>
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${saree.id}', event)">
                        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <div class="quick-view-overlay">
                        <button class="quick-view-btn" onclick="openQuickView('${saree.id}')">
                            <i class="fa-solid fa-eye"></i> Quick View
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-category">${saree.categoryLabel}</span>
                    <h3 class="product-title">${saree.title}</h3>
                    <p class="product-details-text">${saree.fabric} • ${saree.weave}</p>
                    
                    <div class="product-price-row">
                        <span class="current-price">₹${saree.price.toLocaleString('en-IN')}</span>
                        <span class="original-price">₹${saree.originalPrice.toLocaleString('en-IN')}</span>
                        <span class="discount-tag">${discount}% OFF</span>
                    </div>

                    <div class="product-actions">
                        <button class="add-cart-btn" onclick="addToCart('${saree.id}')">
                            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
                        </button>
                        <a href="${getWhatsAppLink(saree)}" target="_blank" class="wa-direct-btn" title="Direct WhatsApp Booking">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// Category Filter Tabs
function filterCategory(category, btnElement) {
    currentCategory = category;
    
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");

    applyFilters();
}

function applyFilters() {
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");

    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const sortBy = sortSelect ? sortSelect.value : "featured";

    let filtered = sareesData.filter(saree => {
        const matchesCategory = (currentCategory === "all" || saree.category === currentCategory);
        const matchesSearch = saree.title.toLowerCase().includes(query) ||
                              saree.fabric.toLowerCase().includes(query) ||
                              saree.categoryLabel.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    if (sortBy === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "popular") {
        filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    renderProducts(filtered);
}

// Cart Management
function initCart() {
    updateCartUI();
}

function addToCart(productId) {
    const product = sareesData.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            ...product,
            qty: 1
        });
    }

    updateCartUI();
    toggleCartDrawer(true);
    showToast(`Added "${product.title}" to bag! ✨`);
}

function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const countBadge = document.getElementById("cartCountBadge");
    const cartItemsList = document.getElementById("cartItemsList");
    const subtotalEl = document.getElementById("cartSubtotal");
    const discountEl = document.getElementById("cartDiscount");
    const totalEl = document.getElementById("cartTotal");

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    if (countBadge) countBadge.textContent = totalQty;

    if (!cartItemsList) return;

    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div style="text-align: center; padding: 3rem 1rem;">
                <i class="fa-solid fa-basket-shopping" style="font-size: 2.5rem; color: #ccc; margin-bottom: 1rem;"></i>
                <p style="color: var(--text-muted); font-size: 0.95rem;">Your shopping bag is currently empty.</p>
            </div>
        `;
        if (subtotalEl) subtotalEl.textContent = "₹0";
        if (discountEl) discountEl.textContent = "-₹0";
        if (totalEl) totalEl.textContent = "₹0";
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discountAmount = (appliedCoupon === COUPON_CODE) ? Math.round(subtotal * 0.10) : 0;
    const finalTotal = subtotal - discountAmount;

    cartItemsList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
                <div class="qty-picker">
                    <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
                    <span class="qty-val">${item.qty}</span>
                    <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove item">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    `).join("");

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (discountEl) discountEl.textContent = `-₹${discountAmount.toLocaleString('en-IN')}`;
    if (totalEl) totalEl.textContent = `₹${finalTotal.toLocaleString('en-IN')}`;
}

function applyCouponCode() {
    const input = document.getElementById("couponInput");
    if (!input) return;

    const val = input.value.trim().toUpperCase();
    if (val === COUPON_CODE) {
        appliedCoupon = COUPON_CODE;
        showToast("Coupon KAVITA10 applied! 10% Discount active! 🎉");
        updateCartUI();
    } else {
        showToast("Invalid Coupon Code. Try KAVITA10", "error");
    }
}

function toggleCartDrawer(open) {
    const overlay = document.getElementById("cartDrawerOverlay");
    if (overlay) {
        if (open) overlay.classList.add("active");
        else overlay.classList.remove("active");
    }
}

// Generate Direct WhatsApp Order Message
function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        showToast("Your cart is empty!", "error");
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discountAmount = appliedCoupon ? Math.round(subtotal * 0.10) : 0;
    const total = subtotal - discountAmount;

    let itemsText = cart.map((item, idx) => `${idx + 1}. *${item.title}* (Qty: ${item.qty}) - ₹${(item.price * item.qty).toLocaleString('en-IN')}`).join("%0A");

    let message = `*NEW ORDER INQUIRY - KAVITA SAREES & KIDS WEAR (AMRAVATI)*%0A%0A` +
                  `Hello Kavita Sarees Team! I would like to place an order for:%0A%0A` +
                  `${itemsText}%0A%0A` +
                  `*Total Amount:* ₹${total.toLocaleString('en-IN')}%0A` +
                  `*Store Location:* Lane L3, Block K3, Busyland Complex, Nandgaon Peth, Amravati%0A%0A` +
                  `Please confirm item availability & delivery options. Thank you!`;

    const phone = "917038899780";
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

function getWhatsAppLink(saree) {
    const message = `Hello Kavita Sarees! I am interested in purchasing *${saree.title}* (Price: ₹${saree.price}). Please share available color variants and delivery options.`;
    return `https://wa.me/917038899780?text=${encodeURIComponent(message)}`;
}

// Quick View Modal
function openQuickView(productId) {
    const saree = sareesData.find(p => p.id === productId);
    if (!saree) return;

    const modalOverlay = document.getElementById("quickViewModal");
    const content = document.getElementById("quickViewContent");

    if (!modalOverlay || !content) return;

    content.innerHTML = `
        <div class="modal-grid">
            <div class="modal-img-wrapper">
                <img src="${saree.image}" alt="${saree.title}" style="width:100%; height:400px; object-fit:cover; border-radius:8px;">
            </div>
            <div class="modal-details">
                <span class="product-category">${saree.categoryLabel}</span>
                <h3>${saree.title}</h3>
                <div class="product-price-row" style="border: none; padding-top: 0; margin-bottom: 1rem;">
                    <span class="current-price">₹${saree.price.toLocaleString('en-IN')}</span>
                    <span class="original-price">₹${saree.originalPrice.toLocaleString('en-IN')}</span>
                </div>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.2rem;">${saree.description}</p>
                
                <div class="modal-spec-list">
                    <div class="modal-spec-item">
                        <span>Fabric</span>
                        <span>${saree.fabric}</span>
                    </div>
                    <div class="modal-spec-item">
                        <span>Weave Type</span>
                        <span>${saree.weave}</span>
                    </div>
                    <div class="modal-spec-item">
                        <span>Blouse Piece</span>
                        <span>${saree.blouse}</span>
                    </div>
                    <div class="modal-spec-item">
                        <span>Authenticity</span>
                        <span>100% Original • Kavita Sarees Amravati</span>
                    </div>
                </div>

                <div class="product-actions" style="margin-top: 1.5rem;">
                    <button class="add-cart-btn" onclick="addToCart('${saree.id}'); closeQuickView();" style="padding: 0.8rem 0;">
                        <i class="fa-solid fa-bag-shopping"></i> Add to Cart
                    </button>
                    <a href="${getWhatsAppLink(saree)}" target="_blank" class="whatsapp-shop-btn" style="border-radius: 6px;">
                        <i class="fa-brands fa-whatsapp"></i> Buy via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;

    modalOverlay.classList.add("active");
}

function closeQuickView() {
    const modalOverlay = document.getElementById("quickViewModal");
    if (modalOverlay) modalOverlay.classList.remove("active");
}

// Wishlist Functionality
function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();

    if (wishlist.has(productId)) {
        wishlist.delete(productId);
        showToast("Removed from Wishlist");
    } else {
        wishlist.add(productId);
        showToast("Saved to your Wishlist! ❤️");
    }

    const wishlistBadge = document.getElementById("wishlistCountBadge");
    if (wishlistBadge) wishlistBadge.textContent = wishlist.size;

    applyFilters();
}

// Stylist Wizard
let selectedOccasion = "bridal";
let selectedColor = "red";

function initStylistWizard() {
    updateStylistRecommendation();
}

function selectOccasion(val, btn) {
    selectedOccasion = val;
    btn.parentElement.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    updateStylistRecommendation();
}

function selectColor(val, btn) {
    selectedColor = val;
    btn.parentElement.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    updateStylistRecommendation();
}

function updateStylistRecommendation() {
    const resTitle = document.getElementById("stylistResTitle");
    const resTip = document.getElementById("stylistResTip");
    const resImg = document.getElementById("stylistResImg");
    const resBtn = document.getElementById("stylistResBtn");

    if (!resTitle) return;

    let matchedProduct = sareesData[0];

    if (selectedOccasion === "nauvari") {
        matchedProduct = sareesData[1]; // Nauvari
        resTip.textContent = "Pairs elegantly with traditional Maharashtrian Nath jewelry, Peshwai pearls, and gold bangles.";
    } else if (selectedOccasion === "kids") {
        matchedProduct = sareesData[3]; // Kids Sherwani
        resTip.textContent = "Perfect festive royal attire for kids during grand family wedding celebrations!";
    } else if (selectedOccasion === "bridal" || selectedColor === "red") {
        matchedProduct = sareesData[0]; // Banarasi
        resTip.textContent = "Style with Kundan jewelry set, antique gold bangles, and a classic low bun with mogra flowers.";
    } else {
        matchedProduct = sareesData[2]; // Kanjeevaram
        resTip.textContent = "Complements temple gold jewelry for a regal traditional South Indian bridal look.";
    }

    resTitle.textContent = matchedProduct.title;
    resImg.src = matchedProduct.image;
    resBtn.onclick = () => openQuickView(matchedProduct.id);
}

// Toast Notifications
function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.style.cssText = `
        background: ${type === "error" ? "#c0392b" : "var(--primary-maroon)"};
        color: var(--light-gold);
        padding: 0.8rem 1.4rem;
        border-radius: 30px;
        border: 1px solid var(--royal-gold);
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin-top: 0.5rem;
    `;

    toast.innerHTML = `<i class="fa-solid fa-${type === "error" ? "circle-exclamation" : "circle-check"}" style="color: var(--royal-gold);"></i> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.4s ease";
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function initEventListeners() {
    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Close mobile drawer when a nav link is clicked
        navMenu.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    const apptForm = document.getElementById("appointmentForm");
    if (apptForm) {
        apptForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("apptName").value;
            showToast(`Thank you ${name}! Your Wedding Trousseau Consultation has been booked. We will contact you shortly! ✨`);
            apptForm.reset();
        });
    }
}

// Review Filtering Functionality
function filterReviews(category, btn) {
    const filterBtns = document.querySelectorAll(".review-filter-btn");
    filterBtns.forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");

    const cards = document.querySelectorAll("#reviewsGrid .review-card");
    cards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// Review Modal and Submission
let currentRating = 5;

function openReviewModal() {
    const modal = document.getElementById("reviewModal");
    if (modal) {
        modal.classList.add("active");
        setFormRating(5);
    }
}

function closeReviewModal() {
    const modal = document.getElementById("reviewModal");
    if (modal) modal.classList.remove("active");
}

function setFormRating(stars) {
    currentRating = stars;
    const starIcons = document.querySelectorAll("#starRatingInput i");
    starIcons.forEach((icon, idx) => {
        if (idx < stars) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            icon.style.color = "#fbbc04";
        } else {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            icon.style.color = "#ccc";
        }
    });
}

function submitNewReview(e) {
    e.preventDefault();
    const name = document.getElementById("reviewName").value.trim();
    const city = document.getElementById("reviewCity").value.trim();
    const category = document.getElementById("reviewCategory").value;
    const text = document.getElementById("reviewText").value.trim();

    if (!name || !text) return;

    const initials = name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2) || "KR";

    const catLabels = {
        bridal: "Bridal Trousseau",
        nauvari: "Nauvari Paithani",
        kids: "Kids Wear",
        wholesale: "Aher Wholesale"
    };

    let starsHtml = "";
    for (let i = 0; i < 5; i++) {
        starsHtml += i < currentRating 
            ? '<i class="fa-solid fa-star"></i>' 
            : '<i class="fa-regular fa-star" style="color: #ccc;"></i>';
    }

    const newCard = document.createElement("div");
    newCard.className = "review-card";
    newCard.setAttribute("data-category", category);
    newCard.style.animation = "fadeIn 0.5s ease";
    newCard.innerHTML = `
        <div>
            <div class="review-card-header">
                <div class="review-user-info">
                    <div class="review-avatar" style="background: linear-gradient(135deg, var(--primary-maroon), var(--royal-gold));">${initials}</div>
                    <div>
                        <div class="review-author-name">${name}</div>
                        <div class="review-author-loc">${city || "Amravati"}</div>
                    </div>
                </div>
                <span class="review-badge-verified"><i class="fa-solid fa-circle-check"></i> Google Verified</span>
            </div>
            <div class="review-stars-row">
                ${starsHtml}
            </div>
            <p class="review-text">
                "${text}"
            </p>
        </div>
        <div class="review-footer">
            <span class="review-tag">${catLabels[category] || "Customer Review"}</span>
            <span>Just now</span>
        </div>
    `;

    const grid = document.getElementById("reviewsGrid");
    if (grid) {
        grid.prepend(newCard);
    }

    closeReviewModal();
    document.getElementById("newReviewForm").reset();
    showToast(`Thank you ${name}! Your Google review has been posted successfully! ⭐⭐⭐⭐⭐`);
}
