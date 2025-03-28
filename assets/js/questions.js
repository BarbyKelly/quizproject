//jshint esversion: 8

// All of the Questions and Answers were put together by the developer. Credit in README
// Layout and code structure for questions learned from Web Dev Simplified: https://youtu.be/riDzcEQbX6k?feature=shared
// questions.js edited after learning different question levels from: [The Everything Quiz](https://github.com/Tony118g/the-everything-quiz/blob/main/assets/js/questions.js)

// Object containing Beginner level questions, and answers

const beginnerQuestions = [
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
        question: "How many counties are in Estonia?",
        answers: [
            { text: "15", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false },  
        ]
    },
    {
        question: "What is the national flower of Estonia?",
        answers: [
            { text: "cornflower", correct: true },
            { text: "tulip", correct: false },
            { text: "snowdrop", correct: false }, 
        ]
    },
    {
        question: "Which of these is the national butterfly of Estonia?",
        answers: [
            { text: "Red Admiral", correct: false },
            { text: "Swallowtail", correct: true },
            { text: "Pieridae", correct: false },
        ]
    },
    {  
        question: "Estonian national fish is...",
        answers: [
            { text: "Tuna", correct: false },
            { text: "Eel", correct: false },
            { text: "Baltic herring", correct: true },
        ]
    },
];

// Object containing Intermediate level questions and answers

const intermediateQuestions =[
    {
        question: "Estonian national bird is...",
        answers: [
            { text: "Owl", correct: false },
            { text: "Robin", correct: false },
            { text: "Barn swallow", correct: true },
        ]
    },
    {
        question: "What is the currency in Estonia?",
        answers: [
            { text: "EEK", correct: false },
            { text: "EUR", correct: true },
            { text: "FIM", correct: false },
        ]
    },
    {
        question: "Which of these wild animals lives in Estonia?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Lynx", correct: true },
            { text: "Leopard", correct: false },
        ]
    },
    {
        question: "Which of these letters are part of the Estonian alphabet?",
        answers: [
            { text: "õ, ä, ö, ü", correct: true },
            { text: "æ, ø, å", correct: false }, // Danish. From: https://www.danishnet.com/culture/danish-alphabet/
            { text: "δ, ζ, θ, λ", correct: false },  // Greek: Delta, Zeta, Theta, Lambda from: https://www.greekalphabetletters.com/ 
        ]
    },
    {
        question: "How many times has Estonia won Eurovision (by March 2025)?",
        answers: [
            { text: "One", correct: true },
            { text: "Two", correct: false },
            { text: "Zero", correct: false },  
        ]
    },
    {
        question: "What is the size of Estonia?",
        answers: [
            { text: "45339 square km", correct: true },
            { text: "55221 square km", correct: false },
            { text: "37645 square km", correct: false }, 
        ]
    },
    {
        question: "What is the Estonian national animal?",
        answers: [
            { text: "Lynx", correct: false },
            { text: "Wolf", correct: true },
            { text: "Bear", correct: false },
        ]
    },
    {  
        question: "Most common Estonian surname for females in 2025 ?",
        answers: [
            { text: "Saar", correct: false },
            { text: "Meri", correct: false },
            { text: "Tamm", correct: true },
        ]
    },
];

// Object containing Expert level Questions and answers

const expertQuestions =[
    {
        question: "Population of Estonia in Feb 2025?",
        answers: [
            { text: "1,333,290", correct: false },
            { text: "1,369,285", correct: true },
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
        question: "President of Estonia in 2025?",
        answers: [
            { text: "Alar Karis", correct: true },
            { text: "Lennart Meri", correct: false },
            { text: "Kersti Kaljulaid", correct: false },
        ]
    },
    {
        question: "How do you write 'One, two, three' in Estonian?",
        answers: [
            { text: "Yksi, kaksi, kolme", correct: false }, // Finnish
            { text: "Eins, zwei, drei", correct: false }, // German
            { text: "Üks, kaks, kolm", correct: true }, // Estonian      
        ]
    },
    {
        question: "How many islands does Estonia have?",
        answers: [
            { text: "2317", correct: true },
            { text: "1522", correct: false },
            { text: "2013", correct: false },  
        ]
    },
    {
        question: "What date is Estonian National Holiday",
        answers: [
            { text: "24.February", correct: true },
            { text: "25.June", correct: false },
            { text: "1.September", correct: false }, 
        ]
    },
    {
        question: "How do you say 'Good evening' in Estonian?",
        answers: [
            { text: "Hyvää iltaa", correct: false },
            { text: "Tere õhtust", correct: true },
            { text: "Guten Abend", correct: false },
        ]
    },
    {  
        question: "What is Estonian national stone?",
        answers: [
            { text: "Marble", correct: false },
            { text: "Slate", correct: false },
            { text: "Limestone", correct: true },
        ]
    },
];
