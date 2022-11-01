const fetchQuestions = async (url) => {
  let res = await fetch(url);
  let response = await res.json();
  return response.results;
};

const showLoading = (quizWrapper) => {
  quizWrapper.innerHTML = '<img id="loading" src="./loading.gif" />';
};

let numberquestions = 0;

const showQuestion = (
  question,
  quizWrapper,
  questionNumberElm
) => {
  let randomNumber = getRandomNumber(0, 3);
  console.log('noq', numberquestions);

  numberquestions += 1;

  console.log(questionNumberElm);

  questionNumberElm.innerHTML= numberquestions;

  let answers = [...question.incorrect_answers];

  answers.splice(randomNumber, 0, question.correct_answer);

  console.log(question);
  let newQuestionElm = '<div clas="question-wrapper">';
  newQuestionElm += "<h1>" + question.question + "</h1>";
  newQuestionElm +=
    "<span id='category'> <i class='fas fa-info-circle'></i> " +
    question.category +
    "</span>";
  newQuestionElm +=
    '<span id="difficulty"><i class="fas fa-diamond"></i> ' +
    question.difficulty +
    "</span>";
  newQuestionElm +=
    "<p class='true'>" +
    "True:" +
    "<span class='truespan '>" +
    "0" +
    "</span>" +
    "</P>";
  newQuestionElm +=
    "<p class='false'>" +
    "False:" +
    "<span class='falsespan '>" +
    "0" +
    "</span>" +
    "</P>";
  // newQuestionElm+= "<p class='questionnumber'>" + 'Number of Question  ' +"<span class='numberspan '>" + " 1" + "</span>" +  "</P>";

  answers.forEach((element) => {
    newQuestionElm += '<p class="options">' + element + "</p>";
  });

  newQuestionElm += '<div id="result"></div>';

  quizWrapper.innerHTML = newQuestionElm;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { fetchQuestions, showLoading, showQuestion };
