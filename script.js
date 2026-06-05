console.log("JS Connected");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const buttons = document.querySelectorAll(".add-btn"); 

buttons.forEach(function(button) { 
    button.addEventListener("click", function() { 
        const productName = button.dataset.name;
        const productPrice = button.dataset.price;

        const quantityInputBox = document.querySelector(".quantity-input");
        let quantity = 1;
        if (quantityInputBox) {
            quantity = Number(quantityInputBox.value);
        }
        
        const productImage = button.dataset.image;
        
        const product = {
            name: productName,
            price: productPrice,
            quantity: quantity,
            image: productImage
        };

        cartItems.push(product);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        displayCartItems("cart-list");
        displayPopUpCart();
        openPopUpCart();
    });
});

function displayCartItems(containerId) {
    const container = document.getElementById(containerId);

    if(container) {
        container.innerHTML = "";

        cartItems.forEach(function(item) {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            //used AI help for this//
            cartItem.innerHTML = `
                <div>
                    <h3>${item.name}</h3>
                    <p>Quantity: ${item.quantity}</p>
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

const clearPopUpCart = document.getElementById("clear-pop-up-cart");

if (clearPopUpCart) {
    clearPopUpCart.addEventListener("click", function() {
        localStorage.removeItem("cartItems");
        cartItems = [];
        displayPopUpCart();
        displayCartItems("cart-list");
    });
}






const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const quantityInputBox = document.querySelector(".quantity-input");

if (minusBtn && plusBtn && quantityInputBox) {

    plusBtn.addEventListener("click", function() {
        quantityInputBox.value = Number(quantityInputBox.value) + 1;
    });

    minusBtn.addEventListener("click", function() {
        if(Number(quantityInputBox.value) > 1) {
            quantityInputBox.value = Number(quantityInputBox.value) - 1;
        }
    }); 
}

function displayPopUpCart() {
    const popUpCartList = document.getElementById("pop-up-cart-list");

    if (popUpCartList) {
        popUpCartList.innerHTML = "";

        cartItems.forEach(function(item) {
            const popUpItem = document.createElement("div");
            popUpItem.classList.add("pop-up-cart-item");

            popUpItem.innerHTML = `
            <img src="${item.image}" alt = "${item.name}">
            <div>
               <h3>${item.name}</h3>
               <p>Quantity: ${item.quantity}</p>
               <p>$${item.price}</p>
            </div>
            <button class="remove-pop-up-item" data-index="${cartItems.indexOf(item)}">x</button>
        `;

        popUpCartList.appendChild(popUpItem);
    
    });
    
    const removeButtons = document.querySelectorAll(".remove-pop-up-item");

        removeButtons.forEach(function(removeButton) {
            removeButton.addEventListener("click", function() {
                const index = removeButton.dataset.index;
                cartItems.splice(index, 1);
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                displayPopUpCart();
                displayCartItems("cart-list");
            });
        })
}
}

function openPopUpCart() {
    const popUpCart = document.getElementById("pop-up-cart");

    if (popUpCart) {
        popUpCart.classList.add("open");
        document.body.classList.add("cart-open");
    }
}

const collapsePopUpCart = document.getElementById("collapse-pop-up-cart");

    if (collapsePopUpCart) {
        collapsePopUpCart.addEventListener("click", function() {
            document.getElementById("pop-up-cart").classList.remove("open");
            document.body.classList.remove("cart-open");
        });
    }

displayPopUpCart();

