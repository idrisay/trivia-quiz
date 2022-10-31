import { fetchQuestions, showLoading, showQuestion } from "./helpers.js";

const quizWrapper = document.getElementById("quiz-wrapper");
const url = `https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple`;

window.onload = () => {
  showLoading(quizWrapper);
};

let question = await fetchQuestions(url);
question = question[0];

showQuestion(question, quizWrapper);

var optionElements = document.getElementsByClassName("options");

const selectOption = (event) => {
  if (event.target.innerHTML === question.correct_answer) {
    event.target.style.backgroundColor = "green";
    event.target.style.color = "white";
    document.getElementById("result").innerHTML =
     '<button id="next">Next question</button>' +  "<p>Bravoo</p>";
  } else {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
    document.getElementById("result").innerHTML =
     '<button id="next">Next question</button>' +   `<p>Try again, Correct answer is ${question.correct_answer}</p>`;
  }

  for (var i = 0; i < optionElements.length; i++) {
    optionElements[i].removeEventListener("click", selectOption);
  }

  document.getElementById("next").onclick = async () => {
    nextQuestion();
  };
};

for (var i = 0; i < optionElements.length; i++) {
  optionElements[i].addEventListener("click", selectOption);
}

const nextQuestion = async () => {
  showLoading(quizWrapper);
  question = await fetchQuestions(url);
  question = question[0];
  showQuestion(question, quizWrapper);
  var optionElements = document.getElementsByClassName("options");
  for (var i = 0; i < optionElements.length; i++) {
    optionElements[i].addEventListener("click", selectOption);
  }
};
