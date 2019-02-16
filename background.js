chrome.runtime.onInstalled.addListener(function(){
	alert('Thank you for installing Peppy!\nYou will now be redirected to our home page where you can set up your account!\n');
	chrome.tabs.create({
		url:"place url for settings page here"
		active: true
	});
});

chrome.tabs.onCreated.addListener(function(){
	//check if we are on a page where money can be spent

})
chrome.tabs.onUpdated.addListener(function({
	//check if we are on a page where money can be spent

}))






chrome.pageCapture.saveAsMHTML(chrome.tabs.id, function());