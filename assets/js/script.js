// jshint esversion: 6
// script.js like most of this quiz, learned from this video by Web Dev Simplified: https://youtu.be/riDzcEQbX6k?feature=shared

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Game has started!')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer() {

}

const questions = [
    {
        question: "Where is Estonia, one of the Baltic States, located?",
        answers: [
            { text: "Northern Europe", correct: true },
            { text: "Asia", correct: false },
            { text: "Australia", correct: false },  
        ]
    }
]
