var dropdownVisible = false;
document.getElementById("method-selector").addEventListener("click", function () {
    if (dropdownVisible) {
        document.getElementsByClassName("method-opt")[0].style.display = "block";
    }
    else {
        document.getElementsByClassName("method-opt")[0].style.display = "none";
    }
    dropdownVisible = !dropdownVisible;
});
