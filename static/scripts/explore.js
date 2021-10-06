//SCRIPT FOR THE EXPLORE FILTER TAB.

//Code that updates the price range value based
// on user input
var priceSlider = document.getElementById('price-slider');
var priceValue = document.getElementById('price-value');

priceValue.innerHTML = priceSlider.value;

priceSlider.oninput = function() {
    priceValue.innerHTML = this.value;
};