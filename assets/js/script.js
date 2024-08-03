// jshint esversion: 6
// script.js all code learned from Web Dev Simplified: https://youtu.be/riDzcEQbX6k?feature=shared , except the actual quiz questions and options

// Const
const startQuizButton = document.getElementById('startquiz-btn');
const nextQuesButton = document.getElementById('nextques-btn');
const quizQandOContainerElement = document.getElementById('quizqando-container');
const quizQuestionElement = document.getElementById('quizquestion');
const optionButtonsElement = document.getElementById('option-buttons');

// Let
let shuffledQuestions, currentQuestionIndex;

// Start quiz
startQuizButton.addEventListener('click', startQuiz);
nextQuesButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// Start quiz function
function startQuiz() {
    startQuizButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    quizQandOContainerElement.classList.remove('hide');
    setNextQuestion();
}

// Next question function
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

// Show question function
function showQuestion(question) {
    quizQuestionElement.innerText = question.question;
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        if (option.correct) {
            button.dataset.correct = option.correct;
        }
        button.addEventListener('click', selectOption);
        optionButtonsElement.appendChild(button);
    });
}

// Reset state function
function resetState() {
    clearStatusClass(document.body);
    nextQuesButton.classList.add('hide');
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
}

// Select option to answer quiz question
function selectOption(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(optionButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextQuesButton.classList.remove('hide');
    } else {
        startQuizButton.innerText = 'Restart';
        startQuizButton.classList.remove('hide');
    }
}

// Set answer correct or incorrect function
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

// Clear "correct or incorrect" function
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

// All of the Questions and Options created by the developer. Credit in README
// Layout and code structure for questions learned from Web Dev Simplified: https://youtu.be/riDzcEQbX6k?feature=shared

// Array with all of the questions, and options

const questions = [
    {
        question: "Where is Estonia, one of the Baltic States, located?",
        options: [
            { text: "Northern Europe", correct: true },
            { text: "Asia", correct: false },
            { text: "Australia", correct: false },  
        ]
    },
    {
        question: "What colour is the Estonian flag?",
        options: [
            { text: "Blue, black and white", correct: true },
            { text: "White, green and blue", correct: false },
            { text: "Yellow, black and red", correct: false }, 
        ]
    },
    {
        question: "What is the capital of Estonia?",
        options: [
            { text: "Helsinki", correct: false },
            { text: "Tallinn", correct: true },
            { text: "Riga", correct: false },
        ]
    },
    {  
        question: "What is the official language in Estonia?",
        options: [
            { text: "English", correct: false },
            { text: "Finnish", correct: false },
            { text: "Estonian", correct: true },
        ]
    },
    {
        question: "Estonian national bird is...",
        options: [
            { text: "Owl", correct: false },
            { text: "Robin", correct: false },
            { text: "Barn swallow", correct: true },
        ]
    },
    {
        question: "Which of these wild animals lives in Estonia?",
        options: [
            { text: "Lion", correct: false },
            { text: "Lynx", correct: true },
            { text: "Leopard", correct: false },
        ]
    },
    {
        question: "Which of these letters are part of the Estonian alphabet?",
        options: [
            { text: "õ,ä,ö,ü", correct: true },
            { text: "æ, ø, å", correct: false }, // Danish. From: https://www.danishnet.com/culture/danish-alphabet/
            { text: "δ, ζ, θ, λ", correct: false },  // Greek: Delta, Zeta, Theta, Lambda from: https://www.greekalphabetletters.com/ 
        ]
    },
    {
        question: "Population of Estonia in 2024?",
        options: [
            { text: "1,333,290", correct: false },
            { text: "1,366,491", correct: true },
            { text: "1,315,819", correct: false },            
        ]
    },
    {
        question: "How often does the 'Estonian Singing and Dancing Festival' take place?",
        options: [
            { text: "every 5 years", correct: true },
            { text: "every 3 years", correct: false },
            { text: "every 7 years", correct: false },
        ]
    },
    {
        question: "How do you say 'One, two, three' in Estonian?",
        options: [
            { text: "Yksi, kaksi, kolme", correct: false }, // Finnish
            { text: "Eins, zwei, drei", correct: false }, // German
            { text: "Üks, kaks, kolm", correct: true }, // Estonian      
        ]
    }
];
