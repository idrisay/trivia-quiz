const fetchQuestions = async (url) => {
  let res = await fetch(url);
  let response = await res.json();
  return response.results;
};

const showLoading = (quizWrapper) => {
  quizWrapper.innerHTML = '<img id="loading" src="./loading.gif" />';
};

const showQuestion = (question, quizWrapper) => {
  let randomNumber = getRandomNumber(0, 3);

  let answers = [...question.incorrect_answers]

  answers.splice(randomNumber, 0,  question.correct_answer);


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

    answers.forEach(element => {
        newQuestionElm += '<p class="options">' + element + '</p>'
    });

    newQuestionElm += '<div id="result"></div>'

  quizWrapper.innerHTML = newQuestionElm;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



export { fetchQuestions, showLoading, showQuestion };
