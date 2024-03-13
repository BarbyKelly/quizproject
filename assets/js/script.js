// Base for js from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js

// Get Elements by Id, Class, Name
const instructionsArea = document.getElementById("instructions-area");
const questionsContainer = document.getElementById("#questions-container");
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

// Start quiz function learned from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
function startQuizBtnFunction() {
    instructionsArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionsContainer.style.display = 'block';
    showQuestions(0);
    questionCounter(questionNumber);
    showScore();
};

// Next question function learned from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
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
};

// Restart quiz followed from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js

function restartQuizBtnFunction() {
    instructionsArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionsContainer.style.display = 'block';
    userScore = 0;
    questionCounter(questionNumber);
    questionCounter(0);
    showQuestions(0);
};

// Show result followed from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
function showResult() {
    instructionsArea.style.display = 'none';
    resultScoreArea.style.display = 'block';
    questionsContainer.style.display = 'none';
    let scoreTotal = document.getElementById("score-div");
    let scoreTotalTag = '<span>' + userScore + ' out of 10' + '</span>';
    scoreTotal.innerHTML = scoreTotalTag;
}

// Score display followed from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
function showScore() {
    let scoreNum = document.getElementById("correct-answers-counter");
    scoreTag = '<span>' + userScore + '</span>';
    scoreNum.innerHTML = scoreTag;
}

// Code followed from https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
function questionCounter() {
    let questionLeft = document.getElementById("questions-left-counter");
    let questionLeftTag = '<span>' + quiz[questionNumber].numb +'</span>';
    questionLeft.innerHTML = questionLeftTag;
}

// Code originally learned from: youtube, modified following code from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js */
function resetState() {
    questionCounter(1);
    showScore(0);
    while(answerBtnArea.firstChild) {
        answerBtnArea.removeChild(answerBtnArea.firstChild);
        nextQuestionBtn.style.display = "none";
    }
}

// Function for showQuestions learned from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
function showQuestions(index) {
    resetState();
    let question_tag = '<span>'+ quiz[index].numb + ". " + quiz[index].question +'</span>';
    let option_tag =
    '<button class="answer-btn"><span>'+ quiz[index].options[0] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[index].options[1] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[index].options[2] +'</span></button>';
    console.log(questionText)
    questionText.innerHTML = question_tag;
    console.log(answerBtnArea)
    answerBtnArea.innerHTML = option_tag;
    getAnswer();
}

// Original code following youtube video, adjusted following Leeds quiz: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js */
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