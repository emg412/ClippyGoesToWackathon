document.addEventListener("DOMContentLoaded", function(event){
	var categoriesButton = document.getElementById("secondButton").addEventListener('click', budgetInfo);
});

function budgetInfo(){
	var clothingBudget = document.getElementById('box1').value; 	
	var foodBudget = document.getElementById('box2').value;
	var generalBudget = document.getElementById('box3').value;
	localStorage.setItem("clothing", clothingBudget);
	localStorage.setItem("food", foodBudget);
	localStorage.setItem("general", generalBudget);

	console.log(localStorage.getItem("clothing"));
	console.log(localStorage.getItem("food"));
	console.log(localStorage.getItem("general"));

	window.open("homePage.html");
	window.close();
}