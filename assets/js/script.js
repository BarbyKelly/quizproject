/*  base for js code from this video: https://youtu.be/zZdQGs62cR8?feature=shared */
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

/* add questions from questions.js. All of the questions prepared and researched by the developer.
Layout structure updated following this video: https://youtu.be/zZdQGs62cR8?feature=shared */

let questions = [
    {
        question: "Where is Estonia located?",
        choice1: "Northern Europe",
        choice2: "Asia",
        choice3: "America",
        answer: 1
    },
    {
        question: "What colour is Estonian flag?",
        choice1: "White, green and blue",
        choice2: "Yellow, black and white",
        choice3: "Blue, black and white",
        answer: 3
    },
    {
        question: "What is the capital of Estonia?",
        choice1: "Tallinn",
        choice2: "Helsinki",
        choice3: "Riga",
        answer: 1
    },
    {
        question: "What is the official language of Estonia?",
        choice1: "English",
        choice2: "Estonian",
        choice3: "Finnish",
        answer: 2
    },
    {
        question: "What is the national bird of Estonia?",
        choice1: "Barn swallow",
        choice2: "Owl",
        choice3: "Robin",
        answer: 1
    },
    {
        question: "Which of these wild animals lives in Estonia?",
        choice1: "Lion",
        choice2: "Lynx",
        choice3: "Leopard",
        answer: 2
    },
    {
    question: "Which of these letters are part of the Estonian alphabet?",
        choice1: "æ, ø, å",
        choice2: "õ,ä,ö,ü",
        choice3: "δ, ζ, θ, λ",
        answer: 2
    },
    {
        question: "Population of Estonia in 2024?",
        choice1: "1,366,491",
        choice2: "1,333,290",
        choice3: "1,315,819",
        answer: 1
    },
    {
        question: "How often does the 'Estonian Singing and Dancing Festival' usually take place?",
        choice1: "every 3 years",
        choice2: "every 5 years",
        choice3: "every 7 years",
        answer: 2
    },
    {
        question: "How do you say 'One, two, three' in Estonian?",
        choice1: "Üks, kaks, kolm",
        choice2: "Yksi, kaksi, kolme",
        choice3: "Eins, zwei, drei",
        answer: 1
    },
    {
        question: "Is Estonia one of the Baltic States?",
        choice1: "Maybe",
        choice2: "No",
        choice3: "Yes",
        answer: 1
    },
];

// Constants added following this video: https://youtu.be/zZdQGs62cR8?feature=shared
const CORRECT_BONUS = 10;
const MAX-QUESTIONS = 5;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
};

startQuiz();
