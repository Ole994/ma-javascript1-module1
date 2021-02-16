//Question 1:
let 
	cat = {
	complain: function ()
	{
		console.log ("meow!");
	}
}
cat.complain ()


// Question 2:
const heading = document.querySelector ("h3")
heading.innerHTML = "uptaded heading";

// Question 3:
heading.style.fontSize = "2em";


// Question 4:
const newClass = document.querySelector ("h3");
newClass.classList.add("subheading");

//Question 5
let paragraphs = document.querySelectorAll ("p");
paragraphs.forEach 
(function (p) {p.style.color = "red"});

let b = document.querySelector("button")
b.style.fontSize = "2em";

// Exercise 4
// // Add an eventListener to the button (with id "tBtn") 
// and make a function to toggle the class makeMeRed on and off for the footer element.


