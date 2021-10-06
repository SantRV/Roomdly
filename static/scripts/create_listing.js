// CREATE NEW ROOM LISTING SCRIPT


function checkboxInput(name, button) {
    /* 
    Function that by clicking one of the room feature buttons
    triggers the input checkbox corresponding to submit the form
    */
    var target = document.getElementById(name);
    var buttonContainer = document.getElementById(button);

    target.click();

    if (buttonContainer.classList.contains('selected')) {
        buttonContainer.classList.remove('selected');
    }

    else {
        buttonContainer.classList.add('selected');
    };
};

// Constant variables of user input
const singUpForm = document.getElementById("newListingForm");
const address = document.getElementById("address");
const rent = document.getElementById("rent");
const bond = document.getElementById("bond");
const available = document.getElementById("available");
const flatmates = document.getElementById("flatmates");
const toilets = document.getElementById("toilets");
const rooms = document.getElementById("rooms");
const description = document.getElementById("description");
const saveButton = document.getElementById("save-button");
const submitButton = document.getElementById('submit-button');

// Constant enables the save button provided at 
// least the address has been given.
address.addEventListener("keyup", function(event) {
    isValidAddress = address.checkValidity();

    if (isValidAddress) {
        saveButton.disabled = false;
        saveButton.style.cursor = "pointer";
        saveButton.style.opacity = "1";
    }
    else {
        saveButton.disabled = true;
    };
});

saveButton.addEventListener('click', function(event) {
    singUpForm.submit();
})

// Constant that enables the submit button once all
// inputs are valid

description.addEventListener("keyup", function(event) {        
    if (
        address.value != "" &&
        rent.value != "" &&
        bond.value != "" &&
        available.value != "" &&
        flatmates.value != "" &&
        toilets.value != "" &&
        rooms.value != "" &&
        description != ""
        ) {
        submitButton.disabled = false;
        submitButton.style.cursor = "pointer";
        submitButton.style.opacity = "1";
    }
    else {
        submitButton.disabled = true;
    };
});
