var initialBudget = localStorage.getItem("totalGeneralBudget").value;
var alreadySpent = localStorage.getItem("alreadySpentGeneral").value; 
var budgetLeft = initialBudget - alreadySpent; 

var client_name = localStorage.getItem("first").value; 
var category = "General";

//change all the values in the popup window
