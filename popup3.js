document.addEventListener("DOMContentLoaded", function(event){
	var categoriesButton = document.getElementById("secondButton").addEventListener('click', budgetInfo);
});

function budgetInfo(){
	var clothingBudget = document.getElementById('box1').value; 	
	var foodBudget = document.getElementById('box2').value;
	var generalBudget = document.getElementById('box3').value;
	localStorage.setItem("totalClothingBudget", clothingBudget);
	localStorage.setItem("totalFoodBudget", foodBudget);
	localStorage.setItem("totalGeneralBudget", generalBudget);

	localStorage.setItem("alreadySpentClothing", 0);
	localStorage.setItem("alreadySpentFood", 0);
	localStorage.setItem("alreadySpentGeneral", 0);

	// console.log(localStorage.getItem("totalClothingBudget"));
	// console.log(localStorage.getItem("totalFoodBudget"));
	// console.log(localStorage.getItem("totalGeneralBudget"));

	window.open("homePage.html");
	window.close();
}