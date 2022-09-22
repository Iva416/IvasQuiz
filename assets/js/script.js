let currentQuestion_index= 0;

let choicesContainer= document.getElementById("choicesContainer");
let title= document.getElementById("title");
let startButton= document.getElementById("startButton");

function startQuiz(){
    startButton.setAttribute("class","hide");
    title.setAttribute("class","hide");
    getQuestions();
}

function getQuestions(){
    let currentQuestion = questions[currentQuestion_index];
    let questionEl= document.getElementById("question");
    questionEl.textContent = currentQuestion.question;


  for (i=0; i<currentQuestion.choices.length; i++){

    let choiceButton = document.createElement("button");
    choiceButton.textContent= currentQuestion.choices(i);
    choiceButton.setAttribute("style", "display: block");
    choicesContainer.append(choiceButton);
  }
}

startButton.addEventListener("click", startQuiz);
choicesContainer.addEventListener("click", e=>{
  var element = e.target
  if ( element.matches ("button")){
    currentQuestion_index++;
  }
})