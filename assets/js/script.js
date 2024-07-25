// jshint esversion: 6
// script.js code learned from Web Dev Simplified: https://youtu.be/riDzcEQbX6k?feature=shared

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

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

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

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
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

// All of the Questions and Answers created by the developer. Credit in README
// Layout and code structure for questions learned from Web Dev Simplified: https://youtu.be/riDzcEQbX6k?feature=shared

// Array with all of the questions, and answers

const questions = [
    {
        question: "Where is Estonia, one of the Baltic States, located?",
        answers: [
            { text: "Northern Europe", correct: true },
            { text: "Asia", correct: false },
            { text: "Australia", correct: false },  
        ]
    },
    {
        question: "What colour is the Estonian flag?",
        answers: [
            { text: "Blue, black and white", correct: true },
            { text: "White, green and blue", correct: false },
            { text: "Yellow, black and red", correct: false }, 
        ]
    },
    {
        question: "What is the capital of Estonia?",
        answers: [
            { text: "Helsinki", correct: false },
            { text: "Tallinn", correct: true },
            { text: "Riga", correct: false },
        ]
    },
    {  
        question: "What is the official language in Estonia?",
        answers: [
            { text: "English", correct: false },
            { text: "Finnish", correct: false },
            { text: "Estonian", correct: true },
        ]
    },
    {
        question: "Estonian national bird is...",
        answers: [
            { text: "Owl", correct: false },
            { text: "Robin", correct: false },
            { text: "Barn swallow", correct: true },
        ]
    },
    {
        question: "Which of these wild animals lives in Estonian forests?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Lynx", correct: true },
            { text: "Leopard", correct: false },
        ]
    },
    {
        question: "Which of these letters are part of the Estonian alphabet?",
        answers: [
            { text: "õ,ä,ö,ü", correct: true },
            { text: "æ, ø, å", correct: false }, // Danish. From: https://www.danishnet.com/culture/danish-alphabet/
            { text: "δ, ζ, θ, λ", correct: false },  // Greek: Delta, Zeta, Theta, Lambda from: https://www.greekalphabetletters.com/ 
        ]
    },
    {
        question: "Population of Estonia in 2024?",
        answers: [
            { text: "1,333,290", correct: false },
            { text: "1,366,491", correct: true },
            { text: "1,315,819", correct: false },            
        ]
    },
    {
        question: "How often does the 'Estonian Singing and Dancing Festival' take place?",
        answers: [
            { text: "every 5 years", correct: true },
            { text: "every 3 years", correct: false },
            { text: "every 7 years", correct: false },
        ]
    },
    {
        question: "How do you say 'One, two, three' in Estonian?",
        answers: [
            { text: "Yksi, kaksi, kolme", correct: false }, // Finnish
            { text: "Eins, zwei, drei", correct: false }, // German
            { text: "Üks, kaks, kolm", correct: false }, // Estonian      
        ]
    }
];
