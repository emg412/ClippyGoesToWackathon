var initialBudget = localStorage.getItem("totalClothingBudget").value;
var alreadySpent = localStorage.getItem("alreadySpentClothing").value; 
var budgetLeft = initialBudget - alreadySpent; 

var client_name = localStorage.getItem("first").value; 
var category = "Clothing";

//change all the values in the popup window