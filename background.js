chrome.runtime.onInstalled.addListener(function(){
	chrome.contextMenus.create({
		"id": "sample context menus",
		"title": "sample context menu",
		"contexts": ["selection"]

	});
});

chrome.tabs.onCreated.addListener(function(){
	//check if we are on a page where money can be spent

})
chrome.tabs.onUpdated.addListener(function({
	//check if we are on a page where money can be spent

}))
