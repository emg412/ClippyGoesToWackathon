console.log("foodContent.js ran");

var testKey = "theTestKey";
var testVal = "myValueeee";

chrome.storage.sync.set({testKey, testVal}, function() {
	console.log("1) value stored: " + testVal);
});

var asdf = chrome.storage.sync.get(["theTestKey"], function() {
	console.log("2) value retrieved: " + value);
});

console.log("3) retrieved value asdf: " + asdf);

