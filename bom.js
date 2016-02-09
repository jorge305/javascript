/*
Create a popup window displaying your favorite website, initializing it at 10px from the top left of the user's screen.
Size it 100px x 100px.
Move it to the center of the current screen.
Resize the window to the largest size available on the screen.
Give the popup window focus.
*/

var topP = (window.innerHeight / 2);

var leftP = (window.innerWidth / 2);

var fullH = window.outerHeight;

var fullW = window.outerWidth;

var popup = window.open("http://www.google.com", "test","width=100, height=100, top=" + topP + ", left=" + leftP);

var resizeW = function() {
	popup.resizeTo(fullH, fullW);
}

setTimeout(resizeW, 5000);

/*
Write a function that determines whether your popup window was closed by the user. 
The function shall log the status of the popup ("open" vs "closed") to the console.
Test the function by invoking when the popup is closed/open.
*/

/*
Create an Interval that console.logs the current time every 5 seconds.
*/

var timelog = function() {
	console.log(Date());
}

var spitTime = setInterval(function() { timelog()}, 5000);

spitTime;


/*
Query the user for their age. 
If they are 21 or over, redirect them to your favorite brewery. 
If they are under 21, redirect them to the Disney website.
*/



var ageCheck = function() {

	var usrAge = prompt("How old are you");


	if (isNaN(usrAge) || usrAge === null)
	{
		usrAge = prompt("Please enter your age, must be a number");
		ageCheck();
	}

	if (Number(usrAge) > 20)
	{
		window.location.assign("http://www.dogfish.com/");
	}

	if (Number(usrAge) < 21)
	{
		window.location.assign("http://www.disney.com/");
	}
}



var btnDiv = document.getElementById("agecheck");

var btn = document.createElement("BUTTON");        // Create a <button> element
	var t = document.createTextNode("AGE CHECK");       // Create a text node
	btn.appendChild(t);                                // Append the text to <button>
	btn.setAttribute("onclick", "ageCheck()");

	btnDiv.appendChild(btn);                    // Append <button> to div ID back

/*
Write a mobile redirection script.
If the available screen size is less than 320px (based on http://screensiz.es/phone), ask them if they would like
to view the mobile version of the site. 
If they confirm, redirect them to index-mobile.html.
Otherwise, land them on the standard index.html
*/



