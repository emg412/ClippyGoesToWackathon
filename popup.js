document.addEventListener("DOMContentLoaded", function(event) {
    var resultsButton = document.getElementById("settings");
    resultsButton.onclick = settings;
    getResults();
    showFood();
});

function getResults(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "checkForWord" }, function (response) {
            showResults(response);
        });
    });
}

function showResults(results) {
    var resultsElement = document.getElementById("results");
    resultsElement.innerText = results ? "This is a checkout cart." : "This is NOT a checkout cart.";
}

function showFood() {
    var foodBal = localStorage.getItem("totalGeneralBudget");
    var goodcashElement = document.getElementById("cash_good");
    if (foodBal.length < 4) {
        foodBal = foodBal + ".00"
    }
    goodcashElement.innerText = "$" + foodBal
}

function settings() {
	window.open("localPage.html");
}