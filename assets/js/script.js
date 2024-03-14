// jshint esversion: 6

// All of the base code for js and for this quiz learned from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js

// Get Elements by Id, Class, Name
const nameGuidelinesArea = document.getElementById("name-guidelines-area");
const questionArea = document.getElementById("quiz-area");
const resultScoreArea = document.getElementById("score-area");
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const questionText = document.querySelector(".questions-class");
const answerBtnArea = document.getElementById("answer-btn-area");
const optionBtn = document.getElementById("answer-btn");
const restartQuizBtn = document.getElementById("restart-quiz-btn");

// Changing variables
let questionNumber = 0;
let userScore = 0;

// Start quiz function
function startQuizBtnFunction() {
    nameGuidelinesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionArea.style.display = 'block';
    showQuestions(0);
    questionCounter(questionNumber);
    showScore();
}

// Next question function
function nextQuestionBtnFunction() {
    questionNumber++;
    if(questionNumber < quiz.length){ 
        showQuestions(questionNumber);
        questionCounter(questionNumber);
        showScore();
    }else{
        questionNumber = 0;
        showResult();
    }
}

// Restart quiz function

function restartQuizBtnFunction() {
    nameGuidelinesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionArea.style.display = 'block';
    userScore = 0;
    questionCounter(questionNumber);
    questionCounter(0);
    showQuestions(0);
}

// Show result function
function showResult() {
    nameGuidelinesArea.style.display = 'none';
    resultScoreArea.style.display = 'block';
    questionArea.style.display = 'none';
    let scoreTotal = document.getElementById("score-div");
    let scoreTotalTag = '<span>' + userScore + ' out of 10' + '</span>';
    scoreTotal.innerHTML = scoreTotalTag;
}

// Score display function
function showScore() {
    let scoreNum = document.getElementById("correct-answers-counter");
    scoreTag = '<span>' + userScore + '</span>';
    scoreNum.innerHTML = scoreTag;
}

// Question counter function
function questionCounter() {
    let questionLeft = document.getElementById("questions-left-counter");
    let questionLeftTag = '<span>' + quiz[questionNumber].numb +'</span>';
    questionLeft.innerHTML = questionLeftTag;
}

// Reset State function
function resetState() {
    questionCounter(1);
    showScore(0);
    while(answerBtnArea.firstChild) {
        answerBtnArea.removeChild(answerBtnArea.firstChild);
        nextQuestionBtn.style.display = "none";
    }
}

// Function for showQuestions
function showQuestions(index) {
    resetState();
    let question_tag = '<span>'+ quiz[index].numb + ". " + quiz[index].question +'</span>';
    let option_tag =
    '<button class="answer-btn"><span>'+ quiz[index].options[0] +'</span></button>' + '<button class="answer-btn"><span>'+ quiz[index].options[1] +'</span></button>' + '<button class="answer-btn"><span>'+ quiz[index].options[2] +'</span></button>';
    questionText.innerHTML = question_tag;
    answerBtnArea.innerHTML = option_tag;
    selectAnswer();
}

// Function select answer
function selectAnswer() {
    [...optionBtn].forEach(option => {
        option.addEventListener("click", event => {
            const span = event.currentTarget.querySelector('span');
            const text = span.innerText;
            const allOptions = answerBtnArea.children.length;
            console.log(text);
            let correctAnswer = [quiz[questionNumber].answer];
            if(text == correctAnswer) {
                userScore ++;
                event.target.classList.add("correct");
            }else{
                event.target.classList.add("incorrect");
                for(i=0; i < allOptions; i++){
                    if(answerBtnArea.children[i].textContent == correctAnswer){
                    answerBtnArea.children[i].classList.add("correct");
                    answerBtnArea.children[i].classList.add("disabled");
                }
            }
            }
                for(i=0; i < allOptions; i++){
                answerBtnArea.children[i].classList.add("disabled");
            }
            nextQuestionBtn.style.display = "block";
        });
    });
}