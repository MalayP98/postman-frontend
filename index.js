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

var configTabItems = document.getElementsByClassName("nav-item");
var configAreas = ["authorization", "headers", "body", "params"];
currentConfigTabIdx = 0;

function selectConfig(idx) {
    configTabItems[currentConfigTabIdx].style.backgroundColor = rgb(206, 203, 209);
    configTabItems[currentConfigTabIdx].style.color = "white";
    document.getElementById(configAreas[currentConfigTabIdx]).style.display = "none";
    currentConfigTabIdx = idx;
    document.getElementById(configAreas[currentConfigTabIdx]).style.display = "flex";
    currentConfigTab = configTabItems[currentConfigTabIdx];
    currentConfigTab.style.backgroundColor = rgb(142, 197, 236);
    currentConfigTab.style.color = rgb(0, 0, 0);
}

// default active tab will be Authorization
selectConfig(currentConfigTabIdx);

// default auth type tab
function activeAuthType(authType) {
    authType.style.backgroundColor = rgb(142, 197, 236);
    authType.style.color = "white";
}

function deactivateAuthType(authType) {
    authType.style.backgroundColor = "white";
    authType.style.color = rgb(142, 197, 236);
}

var authTypeList = ["apikey", "bearer", "basic"];
var authTypes = document.getElementsByClassName("auth-type");
var currentAuthType = 0;
activeAuthType(authTypes[currentAuthType]);

function selectAuthType(idx) {
    deactivateAuthType(authTypes[currentAuthType]);
    document.getElementsByClassName(authTypeList[currentAuthType])[0].style.display = "none"
    currentAuthType = idx;
    activeAuthType(authTypes[currentAuthType]);
    document.getElementsByClassName(authTypeList[currentAuthType])[0].style.display = "flex";
}




