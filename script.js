console.log("JS Connected");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const buttons = document.querySelectorAll(".add-btn"); 

buttons.forEach(function(button) { 
    button.addEventListener("click", function() { 
        const productName = button.dataset.name;
        const productPrice = button.dataset.price;
        
        const product = {
            name: productName,
            price: productPrice
        };

        cartItems.push(product);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        displayCartItems("cart-list");
    });
});

function displayCartItems(containerId) {
    const container = document.getElementById(containerId);

    if(container) {
        container.innerHTML = "";

        cartItems.forEach(function(item) {
            const cartItem = document.createElememt("div");
            cartItem.classList.add("cart-item");

            //used AI help for this//
            cartItem.innerHTML = `
                <div>
                    <h3>${item.name}</h3>
                    <p>Quantity: 1</p>
                </div>
                <p>$${item.price}</p>
            `;

            container.appendChild(cartItem);
        });
    }
}

displayCartItems("cart-list");
displayCartItems("checkout-list");
displayCartItems("confirmation-list");

const clearBtn = document.getElementById("clear-cart");

if (clearBtn) {
    clearBtn.addEventListener("click", function() {
        localStorage.removeItem("cartItems");
        location.reload();
    });
}