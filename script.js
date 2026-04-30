console.log("JS Connected");

const buttons = document.querySelectorAll(".add-button"); // selects all buttons
console.log(buttons); // returns a list of all buttons

buttons.forEach(function(button) { //loops through each button in the list
    button.addEventListener("click", function() { // adding an event listener so that when the button is clicked, the function runs
        const item = document.createElement("li"); //creates a new list item (element, not yet visible but its just been created)
        item.textContent = "Item added"; // adds text to that specific item (list element)

        cart.appendChild(item); //adds that item to the cart as a list item, this will be visible on the page now
        console.log("Clicked") // to confirm that the button has actually been clicked
    });
});

const cart = document.getElementById("cart"); //selects the cart from html using its ID, we can add new items from this