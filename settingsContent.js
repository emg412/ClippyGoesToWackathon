console.log("settingsContent.js has begun");
chrome.runtime.onExternalMessage.addListener(function storeData(name, user, pass){
			chrome.storage.local.set({"firstName": dict[0]}, function(){
				console.log("1) value stored: " + name);
			});
			chrome.storage.local.set({"userName": dict[1]}, function(){
				console.log("2) value stored: " + user);
			});
			chrome.storage.local.set({"password": dict[2]}, function(){
				console.log("3) value stored: " + pass);
			});
})

