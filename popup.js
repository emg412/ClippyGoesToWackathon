document.addEventListener("DOMContentLoaded", function(event) {
    var resultsButton = document.getElementById("settings");
    resultsButton.onclick = settings;
    getResults();
    showFood();

    var magicNumber = localStorage.getItem("categorySwitch"); 
                                                                                            // localStorage.getItem("first");

    console.log(magicNumber);


    if (magicNumber == 0) {
        console.log("hello");
        showGeneral();
    }
    else if (magicNumber == 1) {
        console.log("hi");
        showFood();
    }
    else {
        console.log("sup");
        showClothes();
    }

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
    var prevRes = localStorage.getItem("previousResult");

    // if (results) {
    //     resultsElement.innerText = "This is a checkout cart.";
    // } else {
    //     resultsElement.innerText = "This is NOT a checkout cart.";
    // }
    resultsElement.innerText = results ? "This is a checkout cart." : "This is NOT a checkout cart.";


    // if (!results && preVes) {
    //     confirmPurchase();
    // }

    // localStorage.setItem("previousResult", results);

}



function showFood() {
    var clientName = localStorage.getItem("first");
    var clientElement = document.getElementById("client_name");
    clientElement.innerText = clientName;

    var currentCategory = "Food";
    var categoryElement = document.getElementById("category");
    categoryElement.innerText = currentCategory;


    var foodBal = localStorage.getItem("totalFoodBudget");
    var goodcashElement = document.getElementById("cash_good");
    if (foodBal.length < 4) {
        foodBal = foodBal + ".00"
    }
    goodcashElement.innerText = "$" + foodBal

    var currFoodBal = localStorage.getItem("alreadySpentFood");
    var lowCashElement = document.getElementById("cash_low");
    lowCashElement.innerText = foodBal - currFoodBal; 
}



function showClothes() {
    var clientName = localStorage.getItem("first");
    var clientElement = document.getElementById("client_name");
    clientElement.innerText = clientName;

    var currentCategory = "Clothes";
    var categoryElement = document.getElementById("category");
    categoryElement.innerText = currentCategory;

    var clothesBal = localStorage.getItem("totalClothesBudget");
    var goodcashElement = document.getElementById("cash_good");
    if (clothesBal.length < 4) {
        clothesBal = clothesBal + ".00"
    }
    goodcashElement.innerText = "$" + clothesBal

    var currClothesBal = localStorage.getItem("alreadySpentClothes");
    var lowCashElement = document.getElementById("cash_low");
    lowCashElement.innerText = clothesBal - currClothesBal;
}


function showGeneral() {
    var clientName = localStorage.getItem("first");
    var clientElement = document.getElementById("client_name");
    clientElement.innerText = clientName;

    var currentCategory = "General";
    var categoryElement = document.getElementById("category");
    categoryElement.innerText = currentCategory;

    var generalBal = localStorage.getItem("totalGeneralBudget");
    var goodcashElement = document.getElementById("cash_good");
    if (generalBal.length < 4) {
        generalBal = generalBal + ".00"
    }
    goodcashElement.innerText = "$" + generalBal

    var currGeneralBal = localStorage.getItem("alreadySpentGeneral");
    var lowCashElement = document.getElementById("cash_low");
    lowCashElement.innerText = generalBal - currGeneralBal;
}

function settings() {
	window.open("localPage.html");
}


function confirmPurchase() {

    if (confirm("Did you complete the purchase?")) {
        // update balance accordingly (oliver)
    } else {
        // do nothing 
    }
}





