const startButton =document.getElementById('start-btn')
const nextButton =document.getElementById('next-btn')
const questionContainerElement= document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')



startButton.addEventListener('click',startGame)
 nextButton.addEventListener('click',() => {
   currentQuestionIndex++
   setNextQuestion()
 })

let shuffledQuestions, currentQuestionIndex


function startGame() {
console.log('started')
startButton.classList.add('hide')
// let number = Math.floor(Math.random()*quotes.length);
shuffledQuestions=questions.sort(() => Math.floor(Math.random()*questions.length));

currentQuestionIndex =0;
questionContainerElement.classList.remove('hide')
setNextQuestion()
}
function setNextQuestion() {
  resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
  const button= document.createElement('button')
  button.innerText= answer.text
  button.classList.add('btn')
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click',selectAnswer)
  answerButtonsElement.appendChild(button)
}) 

}

function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
function selectAnswer(e) {
const selectButton = e.target
const correct = selectButton.dataset.correct
setStatusClass(document.body,correct)
Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button,button.dataset.correct)
    })
if (shuffledQuestions.length> currentQuestionIndex+1){
  nextButton.classList.remove('hide')
}else{
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}
    
}

function setStatusClass (element,correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else{
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
};

// /show score

function showScore() {
  var gameOverHtml= "<h1>results</h1>"
  gameOverHtml += "<h2 id='score'>your scores: 'quiz.score '</h2>";
  
}

