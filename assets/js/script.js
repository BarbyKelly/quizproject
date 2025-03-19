// jshint esversion: 6
// script.js final code learned from: [The Everything Quiz](https://github.com/Tony118g/the-everything-quiz/blob/main/assets/js/script.js)

// Global variables

const heading = document.getElementById("heading");
const mainMenu = document.getElementById("mainMenu");
const guidelinesModal = document.getElementById("guidelines");
const levelPrompt = document.getElementById("level_prompt");
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
            levelPrompt();
         }
      });
   });
});

/* Function to hide Main Menu, while guidelines modal is displayed,
 * add an event listener to the 'close' button
 */

function displayGuidelines() {
   guidelinesModal.classList.remove("hide");
   heading.classList.add("hide");
   mainMenu.classList.add("hide");
   const closeGuidelinesButton = document.getElementById("close_guidelines");
   closeGuidelinesButton.addEventListener("click", closeGuidelines);
}

/* Function to close and hide Guidelines Modal, and to display Main Menu */

function closeGuidelines() {
   guidelinesModal.classList.add("hide");
   heading.classList.remove("hide");
   mainMenu.classList.remove("hide");
}

/* Displays Levels Menu while hiding Main Menu,
* and gets Levels selection buttons,
* and adds event listeners to them
*/

function levelPrompt() {
   /* Gets the button to close the Levels menu,
   and adds an event listener to it */

   const closeLevelButton = document.getElementById("close_level");
   closeLevelButton.addEventListener("click", closeLevelMenu);

   // Displays Quiz Levels Menu
   levelPrompt.classList.remove("hide");
   heading.classList.add("hide");
   mainMenu.classList.add("hide");

   // Const to get buttons for Levels, add event listeners to them
   const levelOptions = document.querySelectorAll(".level_option");
   levelOptions.forEach(levelOption) => {
      levelOption.addEventListener("click", function() {
         levelPrompt.classList.add("hide");
         if (this.getAttribute("id") === "easy") {
            startEasyQuiz();
         } else if (this.getAttribute("id") === "medium") {
            startMediumQuiz();
         } else if (this.getAttribute("id") === "hard") {
            startHardQuiz();
         }

         // Const to get button to Exit the quiz. Add an event listener to it
         const exitButton = document.getElementById("exit_quiz");
         exitButton.addEventListener("click", exitQuiz);
      });
   });
}

/* Function to close and hide Levels menu and display Main Menu */

function closeLevelMenu() {
   levelPrompt.classList.add("hide");
   heading.classList.remove("hide");
   mainMenu.classList.remove("hide");
}

/* Function to hide Quiz area, reset Quiz, and display Main Menu */

function exitQuiz() {
   currentQuestionIndex = 0;
   clearInterval(timerInterval);
   resetScore();
   quizArea.classList.add("hide");
   heading.classList.remove("hide");
   mainMenu.classList.remove("hide");
}




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

