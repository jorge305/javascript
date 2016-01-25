/*
0. The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?
- Store the following into variables:
  number of children, partner's name, geographic location, job title.
- Output your fortune to the screen like so:
  "You will be a X in Y, and married to Z with N kids."
*/

var childnum, partname, location, job;

childnum = "three";
partname = "Cindy";
city = "Paris";
job = "philanthropist";

alert("You will be a " + job + " in " + city + ", and married to " + partname + " with " + childnum + " kids.");

/*
1. The Age Calculator
Forgot how old someone is? Calculate it!
- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

var curYear = 2016;

var birthYear = prompt("What is your birthyear?");

var age1 = curYear - birthYear;

var age2 = curYear - birthYear - 1; 

alert("They are either " + age1 + " or " + age2);


/*
2. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

var curAge = prompt("How old are you?");

var maxAge = 99;

var perDay = 3;

var lifeSupply = (maxAge - curAge) * 365 * 3;

alert("You will need " + lifeSupply + " to last you until the ripe old age of " + maxAge);

/*
3. The Geometrizer
Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm
- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

var radius = prompt("What is the radius?");

var circumference = radius * (2 * 3.14);

var area = 3.14 * (Math.pow(radius, 2));

alert("The circumference is " + circumference);

alert("The area is " + area);

/*
4. The Temperature Converter
It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

var celTemp = prompt("What is the celsius temperature");

alert(cToF(celTemp) + "\u2109");

var fahTemp = prompt("What is the fahrenheit temperature");

alert(fToC(fahTemp)+ "\u2103");


function cToF(celsius) {
	fahrenheit = ((celsius * 9) / 5) + 32;

	return fahrenheit;
} 

function fToC(ftemp) {
	celsius = ((ftemp - 32) * 5) / 9;

	return celsius;
} 


