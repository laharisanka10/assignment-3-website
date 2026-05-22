console.log("JS Connected");

let cartItems = JSONparse(localStorage.getItem("cartItems")) || [];

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

        alert(productName + " added to cart!");

        cart.appendChild(item);
        console.log(productName + " added to cart")
    });
});

const clearBtn = document.getElementById("clear-cart");

if (clearBtn) {
    clearBtn.addEventListener("click", function() {

        cart.innerHTML = "";
        console.log("Cart cleared!");

    });
}