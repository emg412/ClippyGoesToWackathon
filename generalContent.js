chrome.tabs.onUpdated.addListener(function({
	//check if we are on a page where money can be spent
	
	chrome.pageCapture.saveAsMHTML(chrome.tabs.id, function(binary blob) {
		var reader = new FileReader();
		reader.onload = function() {
    			alert(reader.result);
		}
		reader.readAsText(blob);
		var text = reader.result;
		
	});
}));