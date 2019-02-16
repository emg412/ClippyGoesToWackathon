chrome.runtime.onInstalled.addListener(function(){
	alert('Thank you for installing Peppy!\nYou will now be redirected to our home page where you can set up your account!\n');
	chrome.tabs.create({
		url:"place url for settings page here"
		active: true
	});
});

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.create({url: chrome.runtime.getURL("localPage.html")});

});