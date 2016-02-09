/*
Use Javascript to determine whether the user visited other sites previous to yours.
If they did, and a Back button to your website.
*/

var isHistory = window.history.length;
var btnDiv = document.getElementById("back");
console.log(btnDiv);

if (isHistory > 0) {
	var btn = document.createElement("BUTTON");        // Create a <button> element
	var t = document.createTextNode("BACK");       // Create a text node
	btn.appendChild(t);                                // Append the text to <button>
	btn.setAttribute("onclick", "goback()");

	btnDiv.appendChild(btn);                    // Append <button> to div ID back
}

// function goback() {
// 	window.history.back();
// }

goback = function() {
	window.history.back();
}

/*
Implement a Javascript clock using Timeouts.
It should display the current hh:mm:ss and update the second count every second.
Embed the clock on an HTML website.
*/

var now = new Date();

var time = now.toLocaleTimeString();


var timearr = time.split(":");


var seconds = timearr[2].split(" ");
console.log(seconds[0]);
console.log("pre seconds " + (Number(seconds[0]) + 1));

var num = 0

var max = 60;

var timeDiv = document.getElementById("time");


var incrementNumber = function() {

	

	if (seconds[0] < max) {
		timeDiv.innerHTML = timearr[0] + ":" + timearr[1]+ ":" + seconds[0];
		seconds[0]++;
		console.log(seconds[0]);
			setTimeout(incrementNumber, 1000);
	} 
	else {
		console.log("Done"+ seconds[0]);
		
		timearr[1]++;
		
		if (timearr[1] > 59) {
			timearr[1] = 0;
			timearr[0]++;
		}
		


		if (timearr[0] > 12) {
			timearr[0] = 1;
		}


		seconds[0] = 0;
		incrementNumber();
	}

	
}

incrementNumber();


/*
Create an HTML List (http://www.w3schools.com/tags/tag_ul.asp).
Ask the user for their to do items. Each time an item is given, add it to the list.
*/
var usrTask;

var toDoList = document.getElementById("demo");

var taskBtnDiv = document.getElementById("todo");

	

var addItem = function() {
		usrTask = prompt("What task would you like to add to your ToDo List?");

		var listItem = document.createElement("li");

		listItem.appendChild(document.createTextNode(usrTask));

		demo.appendChild(listItem);
	} 

var taskBtn = document.createElement("BUTTON");        // Create a <button> element
	var addTask = document.createTextNode("ADD TASK");       // Create a text node
	taskBtn.appendChild(addTask);                                // Append the text to <button>
	taskBtn.setAttribute("onclick", "addItem()");

	taskBtnDiv.appendChild(taskBtn);                    // Append <button> to div ID back

	

	



	
