// jshint esversion: 6
// script.js final code learned from: [The Everything Quiz](https://github.com/Tony118g/the-everything-quiz/blob/main/assets/js/script.js)

// Const

const heading = document.getElementById("heading");
const mainMenu = document.getElementById("mainMenu");
const guidelinesModal = document.getElementById("guidelines");
const quizLevelsPrompt = document.getElementById("quiz_levels_prompt");
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

/* Waits for DOM to load before executing the first function,
which gets Main Menu buttons, and adds event listeners
to buttons */

document.addEventListener("DOMContentLoaded", function() {
   const mainMenuButtons = this.querySelectorAll(".main_menu_btn");
   mainMenuButtons.forEach((mainMenuButton) => {
      mainMenuButton.addEventListener("click", function() {
         if (this.getAttribute("id") === "guidelines_button") {
            displayGuidelines;
         } else if (this.getAttribute("id") === "quiz_button") {
            quizLevelsPrompt();
         }
      });
   });
});

/* Hides Main Menu, while guidelines modal is displayed,
 * adds an event listener to the 'close' button
 */

function displayGuidelines() {
   guidelinesModal.classList.remove("hide");
   heading.classList.add("hide");
   mainMenu.classList.add("hide");
   const closeGuidelinesButton = document.getElementById("close_guidelines");
   closeGuidelinesButton.addEventListener("click", closeGuidelines);
}

/* Hides Guidelines Modal, displays Main Menu instead */

function closeGuidelines() {
   guidelinesModal.classList.add("hide");
   heading.classList.remove("hide");
   mainMenu.classList.remove("hide");
}




  // all previous js below, to test what works
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

