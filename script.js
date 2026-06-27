function subscribe() {
    alert("Thank you for subscribing.");
}

function addToCart(item) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    cart.push(item);

    sessionStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to the cart.");
}

function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    let cartDisplay = document.getElementById("cartDisplay");

    if (cart.length === 0) {
        cartDisplay.innerHTML = "Your cart is empty.";
    } else {
        cartDisplay.innerHTML = "<h3>Shopping Cart</h3><ul>";

        for (let i = 0; i < cart.length; i++) {
            cartDisplay.innerHTML += "<li>" + cart[i] + "</li>";
        }

        cartDisplay.innerHTML += "</ul>";
    }
}

function clearCart() {
    sessionStorage.removeItem("cart");

    let cartDisplay = document.getElementById("cartDisplay");

    if (cartDisplay) {
        cartDisplay.innerHTML = "Your cart is empty.";
    }

    alert("Cart cleared.");
}

function processOrder() {
    sessionStorage.removeItem("cart");

    let cartDisplay = document.getElementById("cartDisplay");

    if (cartDisplay) {
        cartDisplay.innerHTML = "Your cart is empty.";
    }

    alert("Thank you for your order.");
}

function saveFeedback() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

    localStorage.setItem("Customer Name", name);
    localStorage.setItem("Customer Email", email);
    localStorage.setItem("Customer Feedback", feedback);

    alert("Thank you for your message.");
}

function saveOrder() {
    let bookTitle = document.getElementById("booktitle").value;
    let details = document.getElementById("details").value;

    localStorage.setItem("Custom Book Title", bookTitle);
    localStorage.setItem("Custom Order Details", details);

    alert("Custom order saved.");
}