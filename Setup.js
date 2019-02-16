function storeData(name, user, pass){

	chrome.storage.local.set({"firstName": name}, function(){
		console.log("1) value stored: " + name);
	});
	chrome.storage.local.set({"userName": user}, function(){
		console.log("2) value stored: " + name);
	});
	chrome.storage.local.set({"password": pass}, function(){
		console.log("3) value stored: " + name);
	});
}