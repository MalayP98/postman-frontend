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


