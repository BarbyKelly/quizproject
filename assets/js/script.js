// Base for js from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js

// Get Elements by Id, Class, Name
const instructionsArea = document.getElementById("instructionsArea");
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const questionsContainer = document.getElementById("questions-container");
const questionText = document.querySelector(".questions-class");
const answerBtnArea = document.getElementById("answer-btn-area");
const restartQuizBtn = document.getElementById("restart-quiz-btn");
const resultScoreArea = document.getElementById("score-area");
const optionBtn = document.getElementById("answer-btn");

let questionNumber = 0;
let userScore = 0;

// Event listeners - From Patrick Hladun, via Slack, placed all together (Mentor's suggestion)
startQuizBtn.addEventListener('click', startQuizBtnFunction());
nextQuestionBtn.addEventListener('click', nextQuestionBtnFunction());
restartQuizBtn.addEventListener('click', restartQuizBtnFunction);

function startQuizBtnFunction() {
    instructionsArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionsContainer.style.display = 'block';
    showQuestions(0);
    questionCounter(questionNumber);
    showScore();
};

function nextQuestionBtnFunction() {
    questionNumber++;
    if (questionNumber < quiz.length) { 
    questionCounter(questionNumber);
    showScore();
    } else {
    questionNumber = 0;
    showResult();
    }
};

// Function for showQuestions like in : https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
function showQuestions(index) {
    resetState();
    let question_tag = '<span>' + quiz[index].numb + "." +question+'</span>';
    let option_tag =
    '<button class = "answer-btn"><span>'+quiz[index].options[0]+'</span></button>'
    +'<button class = "answer-btn"><span>'+quiz[index].options[1]+'</span></button>'
    +'<button class = "answer-btn"><span>'+quiz[index].options[2]+'</span></button>';
    questionText.innerHTML = question_tag;
    answerBtn.innerHTML = option_tag;
    getAnswer();
    }

// Code originally learned from: youtube, modified following code from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js */
function resetState() {
    questionCounter(1);
    showScore(0);
    while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
    nextQuestionBtn.style.display('hide');
    }
}

// Code followed from https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
function questionCounter() {
    let questionLeft = document.getElementById("questions-left-counter");
    let questionLeftTag = '<span>'+quiz[questionNumber].numb+'</span>';
    questionLeft.innerHTML = questionLeftTag;
}

// Original code following youtube video, adjusted following Leeds quiz: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js */
function selectAnswer() {
    [...optionBtn].forEach(option=>{
        option.addEventListener("click",event=>{
            const span = event.currentTarget.querySelector('span');
            const text = span.innerText;
            const allOptions = answerBtn.children.length;
            console.log(text);
            let correctAnswer = [quiz[questionNumber].answer];
            if(text===correctAnswer) {
                userScore++;
                event.target.classList.add("correct");
                }else{
                event.target.classList.add("incorrect");
                for(i=0; i<allOptions;i++) {
                    if(answerBtn.children[i].textContent===correctAnswer) {
                        answerBtn.children[i].classList.add("correct");
                        answerBtn.children[i].classList.add("disabled");
                    }
                }
            }
            for(i=0; i<allOptions;i++) {
                answerBtn.children[i].classList.add("disabled");
            }
        nextQuestionBtn.style.display = "block";
        });
    });
}

// Score display followed from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
function showScore() {
    let scoreNum = document.getElementById("correct-answers-counter");
    scoreTag = '<span>' + userScore + '</span>';
    scoreNum.innerHTML = scoreTag;
}

// Show result followed from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
function showResult() {
    instructionsArea.style.display = 'none';
    resultScoreArea.style.display = 'block';
    questionsContainer.style.display = 'none';
    let scoreTotal = document.getElementById("score-div");
    let scoreTotalTag = '<span>' + userScore + 'out of 10' + '</span>';
    scoreTotal.innerHTML = scoreTotalTag;
}

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