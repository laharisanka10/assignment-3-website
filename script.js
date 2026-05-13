console.log("JS Connected");

const cart = document.getElementById("cart"); //selects the cart from html using its ID, we can add new items from this

const buttons = document.querySelectorAll(".add-btn"); // selects all buttons
console.log(buttons); // returns a list of all buttons

buttons.forEach(function(button) { //loops through each button in the list
    button.addEventListener("click", function() { // adding an event listener so that when the button is clicked, the function runs
        const product = button.parentElement // finds the product card that the button belongs to
        const productName = product.querySelector("h3").textContent // gets the product name from the h3 inside that card
        const item = document.createElement("li"); //creates a new list item (element, not yet visible but its just been created)
        item.textContent = productName; // product name gets put inside the cart

        cart.appendChild(item); //adds item to the cart, this will be visible on the page now
        console.log(productName + "added to cart") // confirms the item has been added to cart
    });
});

const clearBtn = document.getElementById("clear-cart"); // selects the clear cart button

clearBtn.addEventListener("click", function()) { //when the button is clicked, the function runs and everything inside the cart is cleared
    cart.innerHTML = ""; // to clear all items in cart
    console.log("Cart cleared!");
}
