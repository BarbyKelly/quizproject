// jshint esversion: 6

// Questions layout, resultscore and restart quiz: code learned from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
// Most of the js Code edited by following: https://www.youtube.com/watch?v=riDzcEQbX6k

// Get Elements by Id, Class, Name
const nameGuidelinesArea = document.getElementById("name-guidelines-area");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resultScoreArea = document.getElementById("score-area");
const restartQuizBtn = document.getElementById("restart-btn");
const questionLeft = document.getElementById("questions-left-counter");
const scoreNum = document.getElementById("correct-answers-counter");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");

// Changing variables
let shuffledQuestions;
let userScore = 0;
let questionNumber = 0;
let currentQuestionIndex = 0;

// Eventlisteners
startButton.addEventListener('click', startGame);
// nextButton.addEventListener('click', () => {
//     currentQuestionIndex++;
//     setNextQuestion();
// });

// Start quiz function
function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - '.5');
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    nameGuidelinesArea.classList.add('hide');
    // resultScoreArea.style.display = 'none';
    questionCounter(questionNumber);
    showScore();
}

// Next question function
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    questionCounter(questionNumber);
    showScore();
}

// Function show a question
function showQuestion(question) {
    questionElement.innerText = question.question;
    // let questionOption1, questionOption2, questionOption3;
    // let questionOptionItem = 0
    // answerButtonsElement.forEach(answerBtn => {
    // })
    for (let i = 0; i < answerButtonsElement.children.length; i++) {
        // Runs 5 times, with values of step 0 through 4.
        answerButtonsElement.children[i].innerHTML = question.options[i]
        // if (answerButtonsElement.children[i] === answer1){
        //     answer1.innerHTML = 
        // }
        // .innerHTML(question.options[i])
        if (question.options[i] === question.answer) {
            answerButtonsElement.children[i].dataset.correct = question.answer;
            answerButtonsElement.children[i].style.backgroundColor="green"
        }
        answerButtonsElement.children[i].addEventListener('click', selectAnswer); 
    }
    // question.options.forEach(answer => {
    //     answer1.innerHTML =  question.options[0]
    //     questionOptionItem++
    //     // const button = document.createElement('button');
    //     button.innerText = answer.text;
    //     button.classList.add('btn');
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct;
    //     }
    //     button.addEventListener('click', selectAnswer);    
    //     answerButtonsElement.appendChild(button);
    // });
}


// Restart quiz function
function restartQuizBtnFunction() {
    nameGuidelinesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionContainerElement.style.display = 'block';
    userScore = 0;
    questionCounter(questionNumber);
    showQuestion(0);
}

// Show result function
function showResult() {
    nameGuidelinesArea.style.display = 'none';
    resultScoreArea.style.display = 'block';
    questionContainerElement.style.display = 'none';
    let scoreTotal = document.getElementById("score-div");
    let scoreTotalTag = '<span>' + userScore + ' out of 10' + '</span>';
    scoreTotal.innerHTML = scoreTotalTag;
}

// Score display function
function showScore() {
    let scoreTag = '<span>' + userScore + '</span>';
    scoreNum.innerHTML = scoreTag;
}

// Question counter function
function questionCounter() { 
    // let questionLeftTag = '<span>' + quiz[questionNumber].numb +'</span>';
    // questionLeft.innerHTML = questionLeftTag;
    questionLeft.innerHTML = questions[questionNumber].numb
    // questionLeft.innerHTML = shuffledQuestions.length() - questionNumber;
}

// Reset State function
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    questionCounter(1);
    showScore();
    // while (answerButtonsElement.firstChild) {
    //     answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    // }
}

// Function select answer
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
