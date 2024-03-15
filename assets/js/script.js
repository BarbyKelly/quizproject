// jshint esversion: 6

// Questions layout, resultscore and restart quiz: code learned from: https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js
// Most of the js Code edited by following: https://www.youtube.com/watch?v=riDzcEQbX6k

// Get Elements by Id, Class, Name
// const nameGuidelinesArea = document.getElementById("name-guidelines-area");
const startQuizBtn = document.getElementById("start-btn");
const nextQuestionBtn = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.querySelector("question");
const answerButtonsElement = document.getElementById("answer-buttons");
// const resultScoreArea = document.getElementById("score-area");
// const restartQuizBtn = document.getElementById("restart-btn");

// Changing variables
let shuffledQuestions, currentQuestionIndex;
// let userScore = 0;

// Eventlisteners
startQuizBtn.addEventListener('click', startGame);
nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
});

// Start quiz function
function startGame() {
    startQuizBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - '.5');
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    // nameGuidelinesArea.style.display = 'none';
    // resultScoreArea.style.display = 'none';
    // questionCounter(questionNumber);
    // showScore();
    nextQuestion();
}

// Next question function
function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    // questionCounter(questionNumber);
    // showScore();
}

// Function show a question
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);    
        answerButtonsElement.appendChild(button);
    });
}


/* Restart quiz function
function restartQuizBtnFunction() {
    nameGuidelinesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionContainerElement.style.display = 'block';
    userScore = 0;
    questionCounter(questionNumber);
    showQuestions(0);
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
    let scoreNum = document.getElementById("correct-answers-counter");
    scoreTag = '<span>' + userScore + '</span>';
    scoreNum.innerHTML = scoreTag;
}

// Question counter function
function questionCounter() {
    let questionLeft = document.getElementById("questions-left-counter");
    let questionLeftTag = '<span>' + quiz[questionNumber].numb +'</span>';
    questionLeft.innerHTML = questionLeftTag;
} */

// Reset State function
function resetState() {
    clearStatusClass(document.body);
    nextQuestionBtn.classList.add('hide');
    // questionCounter(1);
    // showScore(0);
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
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
        nextQuestionBtn.classList.remove('hide');
    } else {
        startQuizBtn.innerText = 'Restart';
        startQuizBtn.classList.remove('hide');
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

const questions = [
    {
        numb: 1,
        question: "Where is Estonia, one of the Baltic States, located?",
        answer: "Northern Europe",
        options: [
            "Northern Europe",
            "Asia",
            "America"
        ]
    },
    {
        numb: 2,
        question: "What colour is the Estonian flag?",
        answer: "Blue, black and white",
        options: [
            "White, green and blue",
            "Yellow, black and white",
            "Blue, black and white"
        ]
    },
    {
        numb: 3,
        question: "What is the capital of Estonia?",
        answer: "Tallinn",
        options: [
            "Tallinn",
            "Helsinki",
            "Riga"
        ]
    },
    {  
        numb: 4,
        question: "What is the official language in Estonia?",
        answer: "Estonian",
        options: [
            "English",
            "Finnish",
            "Estonian"
        ]
    },
    {
        numb: 5,
        question: "Estonian national bird is...",
        answer: "Barn swallow",
        options: [
            "Barn swallow",
            "Owl",
            "Robin"
        ]
    },
    {
        numb: 6,
        question: "Which of these wild animals lives in Estonia?",
        answer: "Lynx",
        options: [
            "Lion",
            "Lynx",
            "Leopard"
        ]
    },
    {
        numb: 7,
        question: "Which of these letters are part of the Estonian alphabet?",
        answer: "õ,ä,ö,ü",
        options: [
            "æ, ø, å", // Danish. From: https://www.danishnet.com/culture/danish-alphabet/
            "õ,ä,ö,ü",
            "δ, ζ, θ, λ" // Greek: Delta, Zeta, Theta, Lambda from: https://www.greekalphabetletters.com/
        ]
    },
    {
        numb: 8,
        question: "Population of Estonia in 2024?",
        answer: "1,366,491",
        options: [
            "1,366,491",
            "1,333,290",
            "1,315,819"
        ]
    },
    {
        numb: 9,
        question: "How often does the 'Estonian Singing and Dancing Festival' take place?",
        answer: "every 5 years",
        options: [
            "every 3 years",
            "every 5 years",
            "every 7 years"
        ]
    },
    {
        numb: 10,
        question: "How do you say 'One, two, three' in Estonian?",
        answer: "Üks, kaks, kolm",
        options: [
            "Üks, kaks, kolm", // Estonian
            "Yksi, kaksi, kolme", // Finnish
            "Eins, zwei, drei" // German
        ]
    }];
