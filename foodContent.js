console.log("foodContent.js has begun");

var testKey = 'key';
var testVal = 'myValueeee';

chrome.storage.local.set({'key': testVal}, function() {
	console.log("1) value stored: " + testVal);
});

var theResult;

setTimeout(function() {
	//your code to be executed after 1 second
  	chrome.storage.local.get('key', function(result) {
  		theResult = result.key;
		console.log("2) value retrieved : " + result.key);
	});
	// console.log("3) retrieved value asdf: " + asdf);
}, 2000);


setTimeout(function() {

	console.log("please: " + theResult);

}, 4000);


