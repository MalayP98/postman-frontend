var dropdownVisible = true;

// shows drop-down on clicking.
function hideAndShowDropdown(opts) {
    if (dropdownVisible) {
        opts.style.display = "block";
    }
    else {
        opts.style.display = "none";
    }
    dropdownVisible = !dropdownVisible;
}

document.getElementById("method-selector").addEventListener("click", function () {
    hideAndShowDropdown(document.getElementById("method-opt"))
});

// replaces the content of method-selector to the option selected.
function selectMethod(value) {
    document.getElementById("method-selector").getElementsByTagName("p")[0].textContent = value;
    hideAndShowDropdown(document.getElementById("method-opt"));
}

function rgb(red, green, blue) {
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// default active tab will be Authorization
var defaultConfigTab = document.getElementsByClassName("nav-item")[0]
defaultConfigTab.style.backgroundColor = rgb(142, 197, 236);
defaultConfigTab.style.color = rgb(0, 0, 0);
console.log(document.getElementsByClassName("nav-item")[0]);

// default auth type tab
// var defaultAuthTypeTab = document.getElementsByClassName


