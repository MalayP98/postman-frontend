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

function addRow(id) {
    document.getElementById(id + "-table").innerHTML += `
                <div id="${id}">
                    <input placeholder="KEY" class="apikey-inp" type="text">
                    <input placeholder="VALUE" class="apikey-inp" type="text">
                    <div class="delete-row" onclick="deleteRow(this)">DELETE</div>
                </div>
    `;
}

function deleteRow(div) {
    var grandParent = div.parentNode.parentNode;
    grandParent.removeChild(div.parentNode);
}

var bodyTypes = ["form-data", "url-encoded-fields", "raw"];
var currentBodyTypeIdx = 0;
function selectBodyType(bodyTypeIdx) {
    var payloadOpt = document.getElementsByClassName("payload-opt");
    var currentBodyType = payloadOpt[currentBodyTypeIdx];
    currentBodyType.style.backgroundColor = "white";
    currentBodyType.style.color = rgb(142, 197, 236);
    document.getElementById(bodyTypes[currentBodyTypeIdx]).style.display = "none";
    currentBodyTypeIdx = bodyTypeIdx;
    var selectedBodyType = payloadOpt[currentBodyTypeIdx];
    selectedBodyType.style.backgroundColor = rgb(142, 197, 236);
    selectedBodyType.style.color = "white";
    document.getElementById(bodyTypes[currentBodyTypeIdx]).style.display = "flex";
}

selectBodyType(0);

function getRequestType() {
    return document.getElementById("method-selector").querySelector('p').textContent;
}

function getUrl() {
    return (document.getElementsByClassName("common-input")[0]).value;
}

function getPayload() {

}

function getAuth() {
    var authType = authTypeList[currentAuthType];
    switch (authType) {
        case "apikey":
            var key = (document.getElementsByClassName("apikey-inp")[0]).value;
            var value = (document.getElementsByClassName("apikey-inp")[1]).value;
            if (!key || !value) return ["NOAUTH", {}];
            return ["API_KEY", { "key": key, "value": value }];
    }
}

async function sendRequest() {
    var BACKEND_URL = "http://localhost:8080/api/request/send/";
    var requestType = getRequestType();
    var url = getUrl();
    var payload = getPayload();
    var authentication = getAuth();

    var body = { "method": requestType, "endpoint": url, "authType": authentication[0], "authroization": JSON.stringify(authentication[1]), "bodyType": "NONE" };

    let formData = new FormData();
    formData.append('body', JSON.stringify(body));
    formData.append('files', new Blob([], { type: "text/plain;charset=utf-8" }));

    const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic bWFsYXlAZ21haWwuY29tOm1hbGF5QDEyMw=='
        },
        body: formData
    });
    console.log(response.json());
}