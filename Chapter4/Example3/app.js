
var $newUL = $("<ul>");
var $newParagraphElement = $("<p>")

//adding text to a new paragraph then appending it to the footer
$newParagraphElement.text("this is a paragraph")
$("footer").append($newParagraphElement);

//creating new list items 
var $listItemOne = $("<li>").text("This is the first list item");
var $listItemTwo = $("<li>").text("Second list item");
var $listItemThree = $("<li>").text("OMG third list item");

// appending the list items to the UL
$newUL.append($listItemOne);
$newUL.append($listItemTwo);
$newUL.append($listItemThree);


//we created a new substree: ul with 3 li items
// we need to append only the parent of the tree, or the root!
$("main").append($newUL);


// prepend elements instead of appending them
// makes them first child of the parent node
var $footerFirstChild = $("<p>").text("I'm the first child of the footer!");
$("footer").prepend($footerFirstChild);

$footerFirstChild.appendTo($("footer")); // this does the same as the above

// remove the first list item from the list we created
$("ul li:first-child").remove();
// remove all childre from list we created 
$newUL.empty();

//remove the footer paragraph from the DOM
$("footer p").fadeOut();

$(".button").on("dblckick", function () {
	alert("Hey! You double-clicked!");
});

console.log("this will print first");
console.log("this will print second");
console.log("this will print third");

console.log("this will print first");

$("button").on("click", function () {
	console.log("This will only print when someone clicks");
});

console.log("this will print second");

// this is a jQuery event that executes the callback
// when the DOM is ready. In this example, we're using 
// an anonymous function instead of sending the main function as an argument
$(document).ready(function () {
	console.log("this will print when the document is ready");
});

//this is a built-in JS function that execute after the specified 
// number of milliseconds
setTimeout(function () {
	console.log("this will print after 3 seconds");
}, 3000);

//this will print before anything else, even though
//it appears last
console.log("this will print first");

var main = function () {
	"use strict";

	// create and hide our content as a div
	var $content = $("<div>Hello World!</div>").hide();

	//append the content to the body element
	$("body").append($content);

	// slide the content down for 2 seconds\
	$content.slideDown(2000);
};

$(document).ready(main);

var main = function () {
	"use strict";

	// create and hide our content as a div
	var $content = $("<div>Hello World!</div>").hide();
	var $moreContent = $("<div>Goodbye World!</div>").hide();

	//append the content to the body element
	$("body").append($content);

	//slide the content down for 2 seconds
	// and then execute the callback which
	// contains the second content
	$content.slideDown(2000, function () {
		//append the second content to the body
		$("body").append($moreContent);
	

		//fade in the second content
		$moreContent.fadeIn();
});
};

$(document).ready(main);


// define a function and store it in a variabla called sayHello
var sayHello = function () {
	console.log("hello world!");
}

//execute the function in the sayHello variable
sayHello();


//define a function called add which accepts two inputs:
// num1 and num2 and has one output: the sum of the two number
var add = function (num1, num2) {
	//add inputs, and store the result in sum
	var sum = num1 + num2

	//return the sum
	return sum;
}

//execute the add function with 5 and 2 as inputs
add(5,2);

var main = function () {
	"use strict";
	console.log("hello world!");

};

$(document).ready(main);

// if statements
var count = 101;

if (count > 100) {
	console.log("the count is bigger than 100");
}

// => the count is bigger than 100

count = 99

if (count > 100) {
	console.log("the count is bigger than 100");
}

// => prints nothing

// else statemenet allows us to do something else if the condition is false
var count = 99;

if (count > 100) {
	console.log("the count is bigger than 100");
} else {
	console.log("the count is less than 100");
}

// => the count is less than 100

// doing mutually exclusive things depending on diff conditions
var count = 150;

if (count < 100) {
	console.log("the count is less than 100");
} else if (count <= 200) {
	console.log("the count is between 100 and 200 inclusive");
} else {
	console.log("the count is bigger than 200");
}
// => the count is between 100 and 200 inclusive

// check to see if *any* of the conditions are true
if (cardRank === "king" || cardRank === "queen" || cardRank ==="jack") {
	console.log("that's a high ranking card!");
} else {
	console.log("not quite royalty!");
}

// check if the card is the ace of spades
if (cardRank === "ace" && cardSuit === "spades") {
	console.log("THAT'S THE ACE OF SPADES!");
} else {
	console.log("Sadly, that's not the aces of spades");
}

//check if the card is *not* the ace of spades
//by flipping the output using the ! operator
if (!(cardRank === "ace" && cardSuit === "spades")) {
	console.log("that's the card is not the ace of spades!");
}

//for loops
var num;

for (num = 0; num <= 100; num = num + 1) {
	console.log(num);
}

var i;

//initialisation: i gets set to 0
// continuation: keep going as long as i is smaller than 100
// update: add 2 to i
// body: print out i
// in other words, print out only the even numbers starting
// with - and ending with 98

for (i = 0; i < 100; i = i + 2) {
	console.log(i);
}

// initialisation: i gets set to 0
// continuation: keep going as long as i is smaller than 100
// update: add 1 to i
// body: print out i only if the remainder when dividing i by 2 is 0
// print out only the even numbers starting with 0 and ending with 98
for (i = 0; i < 100; i = i + 1) {
	if (i%2 !== 0) {
		console.log(i);
	}
}

var greetings = ["hello", "namaste", "hola", "salut", "aloha"];

console.log(greetings[1]);
//=> 'namaste'
greetings[3] = 'bonjour';

var index;

for (index = 0; index < greetings.length; index = index + 1) {
	console.log(greetings[index]);
}

// the forEach loop take a function as an argument 
// and calls it for each element of the array
greetings.forEach(function (element) {
	console.log(element);
})

//create an empty array
var cardSuits = [];

cardSuits.push("clubs");
console.log(cardSuits);

cardSuits.push("diamonds");
console.log(cardSuits);

cardSuits.push("hearts");
console.log(cardSuits);

cardSuits.push("spades");
console.log(cardSuits);




















