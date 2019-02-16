document.addEventListener("DOMContentLoaded", function(event) {
    var resultsButton = document.getElementById("getResults");
    resultsButton.onclick = getResults;
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
    resultsElement.innerText = results ? "This is an Amazon-related webpage." : "This is NOT an Amazon-related webpage.";
}