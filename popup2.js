document.addEventListener("DOMContentLoaded", function(event) {
    var resultsButton = document.getElementById("theButton").addEventListener('click', userInfo);
});
function userInfo(){
	var firstName = document.getElementById('box1').value;
	var userName = document.getElementById('box2').value;
	var password = document.getElementById('box3').value;
	localStorage.setItem("first", firstName);
	localStorage.setItem("user", userName);
	localStorage.setItem("pass", password);

	// console.log(localStorage.getItem("first"));
	// console.log(localStorage.getItem("user"));
	// console.log(localStorage.getItem("pass"));

	window.open("categories.html");
	window.close();

}

function budgetInfo(){
	var clothingBudget = document.getElementById('box1').value; 	
	var foodBudget = document.getElementById('box2').value;
	var generalBudget = document.getElementById('box3').value;
	localStorage.setItem("clothing", clothing);
	localStorage.setItem("food", food);
	localStorage.setItem("general", general);

	// console.log(localStorage.getItem("clothing"));
	// console.log(localStorage.getItem("food"));
	// console.log(localStorage.getItem("general"));

	window.open("homePage.html");
	window.close();
}


