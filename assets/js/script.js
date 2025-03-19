// jshint esversion: 6
// script.js final code learned from: [The Everything Quiz](https://github.com/Tony118g/the-everything-quiz/blob/main/assets/js/script.js)

// Const

const heading = document.getElementById("heading");
const menu = document.getElementById("menu");
const guidelinesModal = document.getElementById("guidelines");
const levelsPrompt = document.getElementById("quiz_levels_prompt");
const quizArea = document.getElementById("quiz_area");
const answersArea = document.getElementById("answer_area");
const timerDisplay = document.getElementById("timer");
const nextQuestionButton = document.getElementById('next_question_button');


// Let

let shuffledQuestions;
let currentQuestionIndex;
let correctAnswer;
let score;
let timeLeft;
let timerInterval;

// Start quiz
//startQuizButton.addEventListener('click', startQuiz);
//nextQuesButton.addEventListener('click', () => {
//    currentQuestionIndex++;
//    setNextQuestion();
//});
//
// Start quiz function
//function startQuiz() {
   // startQuizButton.classList.add('hide');
   // shuffledQuestions = questions.sort(() => Math.random() - 0.5);
   // currentQuestionIndex = 0;
   // quizQandOContainerElement.classList.remove('hide');
   // setNextQuestion();
//}
//
// Next question function
//function setNextQuestion() {
  //  resetState();
  //  showQuestion(shuffledQuestions[currentQuestionIndex]);

//}

// Show question function
//fu//nction showQuestion(question) {
   // quizQuestionElement.innerText = question.question;
  //  question.options.forEach(option => {
       // const button = document.createElement('button');
       // button.innerText = option.text;
       // button.classList.add('btn');
       // if (option.correct) {
           // button.dataset.correct = option.correct;
       // }
       // button.addEventListener('click', selectOption);
       // optionButtonsElement.appendChild(button);
  //  });
//}

// Reset state function
//function resetState() {
   // clearStatusClass(document.body);
   // nextQuesButton.classList.add('hide');
   // while (optionButtonsElement.firstChild) {
     //   optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    //}
//}

// Select option to answer quiz question
//function selectOption(e) {
   // const selectedButton = e.target;
    //const correct = selectedButton.dataset.correct;
   // setStatusClass(document.body, correct);
   // Array.from(optionButtonsElement.children).forEach(button => {
   //     setStatusClass(button, button.dataset.correct);
   // });
   // if (shuffledQuestions.length > currentQuestionIndex + 1) {
   //   nextQuesButton.classList.remove('hide');
   // } else {
   //     startQuizButton.innerText = 'Restart';
   //     startQuizButton.classList.remove('hide');
   // }
//}

// Set answer correct or incorrect function
//function setStatusClass(element, correct) {
   // clearStatusClass(element);
   // if (correct) {
    //    element.classList.add('correct');
   // } else {
     //   element.classList.add('incorrect');
   // }
//}

// Clear "correct or incorrect" function
//function clearStatusClass(element) {
   // element.classList.remove('correct');
   // element.classList.remove('incorrect');
//}

