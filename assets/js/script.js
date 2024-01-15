/* javascript example basis for now from https://youtu.be/riDzcEQbX6k?feature=shared */
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
   console.log('Started')
   startButton.classList.add('hide')
   questionContainerElement.classList.remove('hide')
   setNextQuestion
}

function setNextQuestion() {
   showQuestion
}

function selectAnswer() {

}

/* Copied questions from my previously created questions.js file, might link to file instead later */
const questions = [
    {
            numb1,
            question: "Where is Estonia located?",
            answer: "Northern Europe",
            options: ["Northern Europe",
                      "Asia",
                      "Australia"
            ]
        } 
    }
]