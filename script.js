

function exploreServices() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}

// Cart data
let cart = [];

// Backend se products load karna
async function loadProducts() {
    const productContainer = document.getElementById("product-list");

    try {
        const response = await fetch("http://localhost:5000/api/products");

        if (!response.ok) {
            throw new Error("Backend response error");
        }

        const products = await response.json();

        productContainer.innerHTML = "";

        products.forEach(product => {
            productContainer.innerHTML += `
                <div class="product-card">
                    <div class="product-image">🛍️</div>
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>
                    <button onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            `;
        });

    } catch (error) {
        console.error("Products load nahi hue:", error);
        productContainer.innerHTML =
            "<p>Products load nahi hue. Backend server check karo.</p>";
    }
}

// Add to Cart
function addToCart(productId) {
    const product = window.products?.find(item => item.id === productId);

    if (!product) {
        alert("Product nahi mila!");
        return;
    }

    cart.push(product);

    updateCart();

    alert(product.name + " added to your cart!");
}

// Cart total update
function updateCart() {
    const totalItems = cart.length;

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price;
    }, 0);

    console.log("Cart Items:", totalItems);
    console.log("Total Price: ₹" + totalPrice);
}

// Website open hone par products load honge
async function startWebsite() {
    try {
        const response = await fetch("http://localhost:5000/api/products");
        window.products = await response.json();
        await loadProducts();
    } catch (error) {
        console.error("Backend connection failed:", error);

        const productContainer = document.getElementById("product-list");

        if (productContainer) {
            productContainer.innerHTML =
                "<p>Backend server check karo.</p>";
        }
    }
}

startWebsite();
