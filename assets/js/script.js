// Base for js code mainly based on: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
// Base for how to shuffle questions, code following lesson from: https://youtu.be/riDzcEQbX6k?feature=shared 

/* Get Elements by Id, Class, Name */
const instructionsArea = document.getElementById('instructions');
const startQuizBtn = document.getElementById('start-quiz-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const questionsContainer = document.getElementById('questions-container');
const questionText = document.querySelector('.questions-class');
const answerBtnArea = document.getElementById('answer-btn');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const resultScoreArea = document.getElementById("score-area");
const optionBtn = document.getElementById("answer-btn");

let questionNumber = 0;
let userScore = 0;

// Start Quiz
startQuizBtn.addEventListener('click', startQuizBtnFunc);

function startQuizBtnFunc() {
    instructionsArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionsContainer.style.display = 'block';
    showQuestions(0);
    questionCounter(questionNumber);
    showScore();
};

// Next quiz question
function setNextQuestionBtn() {
    questionNumber++;
    if (questionNumber < quiz.length) { 
    showQuestions(shuffledQuestions[currentQuestionIndex]);
    questionCounter(questionNumber);
    showScore();
    clearInterval(counter);
} else {
    questionNumber = 0;
    showResult();
    }
};

/* Function for showQuestions like in : https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js */
function showQuestions(index) {
    resetState();
    let que_tag = '<span>' + quiz[index].numb+"."+question+'</span>';
    let option_tag =
    '<button class = "answer-btn"><span>'+quiz[index].options[0]+'</span></button>'
    +'<button class = "answer-btn"><span>'+quiz[index].options[1]+'</span></button>'
    +'<button class = "answer-btn"><span>'+quiz[index].options[2]+'</span></button>';
    questionText.innerHTML = que_tag;
    answerBtn.innerHTML = option_tag;
    getAnswer();
    }

    /* Code originally learned from: link youtube add, modified following code from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js */
function resetState() {
    questionCounter(1);
    showScore(0);
    while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
    nextQuestionBtn.style.display('hide');
    }
}

/* Code followed from https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js */ 
function questionCounter() {
    let queLeft = document.getElementById("questions-left-counter");
    let queLeftTag = '<span>'+quiz[questionNumber].numb+'</span>';
    queLeft.innerHTML = queLeftTag;
}

/* original code following youtube video... adjusted https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js */
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
                clearInterval(counter);
            }else{
                event.target.classList.add("incorrect");
                for(i=0; i<allOptions;i++) {
                    if(answerBtn.children[i].textContent===correctAnswer) {
                        answerBtn.children[i].classList.add("correct");
                        answerBtn.children[i].classList.add("disabled");
                    }
                }
                clearInterval(counter);
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
restartQuizBtn.addEventListener('click', restartQuizBtnFunc);

function restartQuizBtnFunc() {
    instructionsArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionsContainer.style.display = 'block';
    userScore = 0;
    questionCounter(questionNumber);
    questionCounter(0);
    showQuestions(0);
};