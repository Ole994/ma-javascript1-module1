//Question 1:
let cat = {
};
cat.complain = function(){
	alert("Meow!")
}
cat.complain();

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
(function (p) {p.style.color = "red"})