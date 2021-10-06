//SCRIPT FOR THE SEARCH BAR.

//Check that the given input is 'Room' or 'Flatmate'
function validateInput(event) {
    var value = document.getElementById("search-type-selector").value;
    if (value == "") {
        alert("Invalid input, please select either 'Room' or 'Flatmate'.");
        event.preventDefault();
        return false;
              
    }

    else if (value == "room" ||
    value == "Room") {
        document.getElementById("search-type-selector").setAttribute("value", "Room");
        return true;
    }

    else if (value == "flatmate" ||
    value == "Flatmate") {
        document.getElementById("search-type-selector").setAttribute("value", "Flatmate");
        return true;
    }

    else {
        alert("Invalid input, please select either 'Room' or 'Flatmate'.");
        event.preventDefault();
        return false;
    };
};

//Hide sidebar by clicking top-left icon.
function hideSidebar() {
    var sidebar = document.getElementById("sidebar-container");
    var button = document.getElementById("menu-icon");
    var footer = document.getElementById("page-footer");

    if (sidebar.style.display == "none") {
        sidebar.style.visibility = "visible";
        sidebar.style.display = "block";

        button.style.transform = "rotate(0deg)";
        

    }

    else {
        sidebar.style.visibility = "hidden";
        sidebar.style.display = "none";

        button.style.transform = "rotate(-180deg)";
    };    
};

// Select active icon based on URL.
const currentLocation = location.href;
const menuItem = document.querySelectorAll(".sidebar-item");
const menuLength = menuItem.length;

for (let i = 0; i<menuLength; i++) {
    if(menuItem[i].href == currentLocation) {
        menuItem[i].className = "sidebar-item active";
    };
};