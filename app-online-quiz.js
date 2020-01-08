const startButton = document.getElementById('start-btn')
const nextButton =document.getElementById('next-btn')
const questionContainerElement= document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var scoreStatusElement =document.getElementById('progress')



startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',() => { 
  currentQuestionIndex++
  setNextQuestion()
})

let shuffledQuestions, currentQuestionIndex

// ------------------------START GAME FUNCTION--------//
function startGame() {
  console.log('started')
  startButton.classList.add('hide')
  shuffledQuestions=questions.sort(()=>questions)
  
  
  var number=Math.floor(Math.random()*questions.length);
  currentQuestionIndex =number;
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
//-----------------------NEXT QUESTION FUNCTION---------//
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
//--------------------SHOW QUESTION FUNCTION-----------//
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
//----------------------------RESET QUESTION FUNCTION---------//
function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
//---------------------------SELECT ANSWER FUCNTION----------------//
function selectAnswer(e) {
  const selectButton = e.target
  const correct = selectButton.dataset.correct
  setStatusClass(document.body,correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button,button.dataset.correct)
    // -------------work here score update---------------//
   scoreStatusElement.innerHTML=700;
    
  })
  if (shuffledQuestions.length> currentQuestionIndex+1){
    nextButton.classList.remove('hide')
  }else{
    startButton.innerText = 'Next'
    startButton.classList.remove('hide')
  }
  
}
//---------------------------ANSWER STATUS FUNCTION---------------//

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
// ------------------------------score card---------------------//


