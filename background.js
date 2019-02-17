chrome.runtime.onInstalled.addListener(function(){
	alert('Thank you for installing Peppy!\nYou will now be redirected to our home page where you can set up your account!\n');
	chrome.tabs.create({
		url:"chrome-extension://bkppmaacdeffhkhnhnpenmlphlegmkdo/localPage.html"
		active: true
	});
});

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.create({url: chrome.runtime.getURL("localPage.html")});

});