// All of the Questions and Options created by the developer. Credit in README
// Layout and code structure for questions learned from Web Dev Simplified: https://youtu.be/riDzcEQbX6k?feature=shared
// questions.js edited after learning different question levels from: [The Everything Quiz](https://github.com/Tony118g/the-everything-quiz/blob/main/assets/js/questions.js)

// Object containing Beginner level questions, and answer options

const beginnerLevelQuestions = [
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
        question: "How many counties are in Estonia?",
        options: [
            { text: "15", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false },  
        ]
    },
    {
        question: "What is the national flower of Estonia?",
        options: [
            { text: "cornflower", correct: true },
            { text: "tulip", correct: false },
            { text: "snowdrop", correct: false }, 
        ]
    },
    {
        question: "What of these is the national butterfly of Estonia?",
        options: [
            { text: "Red Admiral", correct: false },
            { text: "Swallowtail", correct: true },
            { text: "Pieridae", correct: false },
        ]
    },
    {  
        question: "Estonian national fish is...",
        options: [
            { text: "Tuna", correct: false },
            { text: "Eel", correct: false },
            { text: "Baltic herring", correct: true },
        ]
    },
];

// Object containing Intermediate level questions and answer options

const intermediateLevelQuestions =[
    {
        question: "Estonian national bird is...",
        options: [
            { text: "Owl", correct: false },
            { text: "Robin", correct: false },
            { text: "Barn swallow", correct: true },
        ]
    },
    {
        question: "What is the currency in Estonia?",
        options: [
            { text: "EEK", correct: false },
            { text: "EUR", correct: true },
            { text: "FIM", correct: false },
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
            { text: "õ, ä, ö, ü", correct: true },
            { text: "æ, ø, å", correct: false }, // Danish. From: https://www.danishnet.com/culture/danish-alphabet/
            { text: "δ, ζ, θ, λ", correct: false },  // Greek: Delta, Zeta, Theta, Lambda from: https://www.greekalphabetletters.com/ 
        ]
    },
    {
        question: "How many times has Estonia won Eurovision (by March 2025)?",
        options: [
            { text: "One", correct: true },
            { text: "Two", correct: false },
            { text: "Zero", correct: false },  
        ]
    },
    {
        question: "What is the size of Estonia?",
        options: [
            { text: "45339 square km", correct: true },
            { text: "55221 square km", correct: false },
            { text: "37645 square km", correct: false }, 
        ]
    },
    {
        question: "What is the Estonian national animal?",
        options: [
            { text: "Lynx", correct: false },
            { text: "Wolf", correct: true },
            { text: "Bear", correct: false },
        ]
    },
    {  
        question: "Most common Estonian surname for females in 2025 ?",
        options: [
            { text: "Saar", correct: false },
            { text: "Meri", correct: false },
            { text: "Tamm", correct: true },
        ]
    },
];

// Object containing Expert level Questions and answer options

const expertLevelQuestions =[
    {
        question: "Population of Estonia in Feb 2025?",
        options: [
            { text: "1,333,290", correct: false },
            { text: "1,369,285", correct: true },
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
        question: "President of Estonia in 2025?",
        options: [
            { text: "Alar Karis", correct: true },
            { text: "Lennart Meri", correct: false },
            { text: "Kersti Kaljulaid", correct: false },
        ]
    },
    {
        question: "How do you say 'One, two, three' in Estonian?",
        options: [
            { text: "Yksi, kaksi, kolme", correct: false }, // Finnish
            { text: "Eins, zwei, drei", correct: false }, // German
            { text: "Üks, kaks, kolm", correct: true }, // Estonian      
        ]
    },
    {
        question: "How many islands does Estonia have?",
        options: [
            { text: "2317", correct: true },
            { text: "1522", correct: false },
            { text: "2013", correct: false },  
        ]
    },
    {
        question: "What date is Estonian National Holiday",
        options: [
            { text: "24.February", correct: true },
            { text: "25.June", correct: false },
            { text: "1.September", correct: false }, 
        ]
    },
    {
        question: "How do you say 'Good evening' in Estonian?",
        options: [
            { text: "Hyvää iltaa", correct: false },
            { text: "Tere õhtust", correct: true },
            { text: "Guten Abend", correct: false },
        ]
    },
    {  
        question: "What is Estonian national stone?",
        options: [
            { text: "Marble", correct: false },
            { text: "Slate", correct: false },
            { text: "Limestone", correct: true },
        ]
    },
];
