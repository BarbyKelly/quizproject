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

