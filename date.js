document.addEventListener("DOMContentLoaded", function(event) {
    getMonth();
});

function getMonth(){
	var monthNames = ["January", "February", "March", "April", "May", "June",
  	"July", "August", "September", "October", "November", "December"
	];
	var monthElement = document.getElementById("month");
	var d = new Date();
	monthElement.innerText = monthNames[d.getMonth()];
}