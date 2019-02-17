// listen for checkForWord request, call getTags which includes callback to sendResponse
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "checkForWord") {
            checkForWord(request, sender, sendResponse);
            // this is required to use sendResponse asynchronously
            return true;
        }
    }
);
//Returns the index of the first instance of the desired word on the page.
function checkForWord(request, sender, sendResponse){
    var scripts = document.getElementsByTagName("script");
    for (var i=0;i<scripts.length;i++) {
        if (scripts[i].src.toLowerCase().indexOf("checkout")>-1){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
            console.log(response.farewell);
            });
        });
            return sendResponse(true);
        }
    }
    return sendResponse(false);
}