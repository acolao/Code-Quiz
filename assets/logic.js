let currentQuestionIndex= 0;
//let time= questions.length * 15;
let time= 5;
let timerId;

let questionsEl= document.querySelector("#questions");
let startbtnEl = document.querySelector("#start");
let x = document.querySelector(".start");
let timerEl = document.querySelector("#time-left");
let choicesEl = document.querySelector("choices");
let sumitbtnEl= document.querySelector("#submit");
let endScreenEl= document.querySelector("#end-screen");
let containerEl= document.querySelector(".container");
let loadedEl= document.querySelector(".loaded");

startbtnEl.addEventListener('click', function() {
  console.log("clicked")
	let timerId = setInterval(function() {
    time--;
    timerEl.textContent = time;
		console.log(time)
    if(time === 0 || questions.length) {
      timerEl.textContent = 0;
      clearInterval(timerId);
      endScreenEl.classList.remove("hide");
      x.classList.add("hide");
      questionsEl.classList.add("hide");
    }

	}, 1000);
  x.classList.add("hide");
  questionsEl.classList.remove("hide");
});



// function display questions
// When you click on the iterated choices button
// Then you should run current questions variable ++
// Then you wanna call the display questions function
questions;
for (let i = 0; i < questions[0].choices.length; i++) {
    var y = document.createElement("button");
   y.innerHTML = questions[0].choices[i];
   loadedEl.appendChild(y)
    console.log(y)
    y.onclick = clickChoices;
}

function clickChoices(event) {
  var element = event.target.innerHTML;
  console.log("ELEMENT", element);
}