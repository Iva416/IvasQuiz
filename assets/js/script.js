let currentQuestion_index = 0;

let choicesContainer = document.getElementById('choicesContainer');
let title = document.getElementById('title');
let startButton = document.getElementById('startButton');
let timer = 60;
let timerID;

function startQuiz() {
  startButton.setAttribute('class', 'hide');
  title.setAttribute('class', 'hide');
  timerID = setInterval(quizTimer, 1000);
  getQuestions();
}

function quizTimer() {
  if (timer <= 0) {
    clearInterval(timerID);
  } else {
    timer--;
    document.getElementById('timer').innerHTML = timer;
  }
  if (timer === 0) {
  }
}
function getQuestions() {
  let currentQuestion = questions[currentQuestion_index];
  let questionEl = document.getElementById('question');
  questionEl.textContent = currentQuestion.question;
  choicesContainer.innerHTML = '';

  for (i = 0; i < currentQuestion.choices.length; i++) {
    let choiceButton = document.createElement('button');
    let choice = currentQuestion.choices[i];
    choiceButton.setAttribute('value', choice);
    choiceButton.setAttribute('style', 'display: block');
    choiceButton.textContent = choice;
    choicesContainer.append(choiceButton);
  }
}

startButton.addEventListener('click', startQuiz);
choicesContainer.addEventListener('click', (e) => {
  var element = e.target;
  if (element.value === questions[currentQuestion_index].answer) {
    currentQuestion_index++;
  }
});
