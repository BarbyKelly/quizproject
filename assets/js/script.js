/* Base for js code following lesson from: https://youtu.be/riDzcEQbX6k?feature=shared 
All of the quiz questions created and researched by the developer */
let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')
let questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    let button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    setStatusClassStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startQuizButton.innerText = 'Restart'
        startQuizButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    setStatusClassStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

const question = [
    {
        question: "Where is Estonia located?",
        answers: [
            { text: "Northern Europe", correct: true },
            { text: "Asia", correct: false },
            { text: "America", correct: false }
        ]
    },
    {
        question: "What colour is the Estonian flag?",
        answers: [
            { text: "Blue, black and white", correct: true },
            { text: "White, green and blue", correct: false },
            { text: "Yellow, black and white", correct: false }
        ]
    },
    {
        question: "What is the capital of Estonia?",
        answers: [
            { text: "Tallinn", correct: true },
            { text: "Helsinki", correct: false },
            { text: "Riga", correct: false }
        ]
    },
    {
        question: "What is the official language in Estonia?",
        answers: [
            { text: "Estonian", correct: true },
            { text: "English", correct: false },
            { text: "Finnish", correct: false }
        ]
    },
    {
        question: "What is the national bird of Estonia?",
        answers: [
            { text: "Barn swallow", correct: true },
            { text: "Owl", correct: false },
            { text: "Robin", correct: false }
        ]
    }
]