//jshint esversion: 8

// script.js final version - most of the code for js learned from: [The Everything Quiz](https://github.com/Tony118g/the-everything-quiz/blob/main/assets/js/script.js)

// Const Variables (Variables with consistent value)

const quizHeading = document.getElementById("heading");
const mainMenu = document.getElementById("main_menu");
const guidelinesModal = document.getElementById("guidelines");
const levelPrompt = document.getElementById("level_prompt");
const quizSection = document.getElementById("quiz_section");
const answersSection = document.getElementById("answers_section");
const quizTimerDisplay = document.getElementById("timer");
const nextQuestionButton = document.getElementById('next_question_button');


// Let Variables (Variables with changing value). Exactly like in The Everything Quiz

let shuffledQuizQuestions;
let currentQuizQuestionIndex;
let correctQuizAnswer;
let quizScore = 0;
let answeringTimeLeft;
let quizTimerInterval;
let finalScore = 0;

// DOMContentLoaded, Main Menu buttons

document.addEventListener("DOMContentLoaded", function() {
   const mainMenuButtons = this.querySelectorAll(".main_menu_btn");
   mainMenuButtons.forEach((mainMenuButton) => {
      mainMenuButton.addEventListener("click", function() {
         if (this.getAttribute("id") === "guidelines_button") {
            displayGuidelines();
         } else if (this.getAttribute("id") === "quiz_button") {
            quizLevelPrompt();
         }
      });
   });
});

// Function to display Guidelines, and hide Main Menu

function displayGuidelines() {
   guidelinesModal.classList.remove("hide");
   quizHeading.classList.add("hide");
   mainMenu.classList.add("hide");
   const closeGuidelinesButton = document.getElementById("close_guidelines");
   closeGuidelinesButton.addEventListener("click", closeGuidelines);
}

// Function to close and hide Guidelines Modal, and to display Main Menu

function closeGuidelines() {
   guidelinesModal.classList.add("hide");
   quizHeading.classList.remove("hide");
   mainMenu.classList.remove("hide");
}

// Display Levels Menu while hiding Main Menu

function quizLevelPrompt() {

   const closeLevelButton = document.getElementById("close_level");
   closeLevelButton.addEventListener("click", closeLevelMenu);

   // Displays Quiz Levels Menu

   levelPrompt.classList.remove("hide");
   quizHeading.classList.add("hide");
   mainMenu.classList.add("hide");

   // Const to get buttons for Levels, add event listeners to them

   const levelOptions = document.querySelectorAll(".level_option");
   levelOptions.forEach((levelOption) => {
      levelOption.addEventListener("click", function() {
         levelPrompt.classList.add("hide");
         if (this.getAttribute("id") === "beginner") {
            startBeginnerQuiz();
         } else if (this.getAttribute("id") === "intermediate") {
            startIntermediateQuiz();
         } else if (this.getAttribute("id") === "expert") {
            startExpertQuiz();
         }

         // Const to get button to Exit the quiz. Add an event listener to it

         const exitButton = document.getElementById("exit_quiz");
         exitButton.addEventListener("click", exitQuiz);
      });
   });
}

// Function to close and hide Levels menu and display Main Menu

function closeLevelMenu() {
   levelPrompt.classList.add("hide");
   quizHeading.classList.remove("hide");
   mainMenu.classList.remove("hide");
}

// Function to hide Quiz area, reset Quiz, and display Main Menu

function exitQuiz() {
   currentQuizQuestionIndex = 0;
   clearInterval(quizTimerInterval);
   resetQuizScore();
   quizSection.classList.add("hide");
   quizHeading.classList.remove("hide");
   mainMenu.classList.remove("hide");
}

// Function to display Beginner Questions

function startBeginnerQuiz() {
   quizSection.classList.remove("hide");
   shuffledQuizQuestions = beginnerQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
   currentQuizQuestionIndex = 0;
   nextQuestion();
}

// Function to display Intermediate Questions

function startIntermediateQuiz() {
   quizSection.classList.remove("hide");
   shuffledQuizQuestions = intermediateQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
   currentQuizQuestionIndex = 0;
   nextQuestion();
}

// Function to display Expert Questions:

function startExpertQuiz() {
   quizSection.classList.remove("hide");
   shuffledQuizQuestions = expertQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
   currentQuizQuestionIndex = 0;
   nextQuestion();
}

// Function nextQuestion, check if currentQuestionIndex < 5

function nextQuestion() {
   clearInterval(quizTimerInterval);
   if (currentQuizQuestionIndex < 5) {
      resetQuizContent();
      displayContent(shuffledQuizQuestions[currentQuizQuestionIndex]);
      currentQuizQuestionIndex++;
      quizTimer();
   } else {
      finalScoreResult();
   }
}

// Function displayContent(question)

function displayContent(question) {

   // Gets question container

   const quizQuestionContainer = document.getElementById("question");
   
   // Adds question content

   quizQuestionContainer.innerText = question.question;

   // Creates button for each option for particular question - like in The Everything Quiz

   question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
         button.id = "correct";
      } else {
         button.classList.add("incorrectAnswer");
      }

      // Adds an event listener to button, and append it to answer area

      button.addEventListener("click", checkQuizAnswer);
      answersSection.appendChild(button);
   });

   displayQuizQuestionNumber();
}

// Function to get quizQuestionNumber Element - like in The Everything Quiz

function displayQuizQuestionNumber() {
   const quizQuestionNumber = document.getElementById("question_number");
   quizQuestionNumber.innerText = currentQuizQuestionIndex + 1;
}

// Quiz Timer function

function startQuizTimer() {
   quizTimerInterval = setInterval(quizTimer, 1000);
}

// Function to check time left to answer

function quizTimer() {
   if (answeringTimeLeft <= 0) {
      quizTimeUp();
   } else {
      answeringTimeLeft--;
   }
   quizTimerDisplay.innerHTML = 'Timer: ' + answeringTimeLeft;
}

// Quiz Time is up function

function quizTimeUp() {
   alert("Time is up!");
   clearInterval(quizTimerInterval);
   answersSection.classList.add("no-pointer");

   // Const for incorrect answers

   const incorrectAnswers = document.querySelectorAll('.incorrect');
   for (let incorrectAnswer of incorrectAnswers) {
   incorrectAnswer.classList.add('incorrect_answer');
   }

   // Gets correct quiz answers

   correctQuizAnswer = document.getElementById("correct");
   correctQuizAnswer.classList.add("correct_answer");
   nextQuestionButton.classList.remove("hide");
}

// CheckQuizAnswer Function - credit in README

function checkQuizAnswer(event) {
   clearInterval(quizTimerInterval);
   answersSection.classList.add("no-pointer");
   correctQuizAnswer = document.getElementById("correct");
   const clickedButton = event.target;
   correctQuizAnswer.classList.add("correct_answer");
   const allAnswerButtons = answersSection.querySelectorAll("button");
      if (clickedButton === correctQuizAnswer) {
         incrementQuizScore();
      }
      
      allAnswerButtons.forEach(button => {
         if (button.id === "correct") {
            button.classList.add("correct_answer");
         } else {
            button.classList.add("incorrect_answer");
      }
      });

   nextQuestionButton.classList.remove("hide");
}

// EventListener for Next button

nextQuestionButton.addEventListener("click", nextQuestion);

// Function to get and increment quiz score

function incrementQuizScore() {
   quizScore = parseInt(document.getElementById("quiz_score").innerText);
   document.getElementById("quiz_score").innerText = ++quizScore;
}

// Function to Reset Quiz Content

function resetQuizContent() {
   nextQuestionButton.classList.add("hide");
   answersSection.classList.remove("no-pointer");
   answeringTimeLeft = 16;
   startQuizTimer();

   // While to remove previous answer options
      
   while (answersSection.firstChild) {
         answersSection.removeChild(answersSection.firstChild);
   }
}

// Function for Final Score

function finalScoreResult() {
   let quizFinish = document.getElementById("quiz_finish");
   finalScore = parseInt(document.getElementById("final_score").innerText);
   document.getElementById("final_score").innerText = quizScore;
   quizSection.classList.add("hide");
   quizHeading.classList.remove("hide");
   quizFinish.classList.remove("hide");
   finalScore = quizScore;

   // Const Finish Quiz

   const finishQuizButtons = document.querySelectorAll(".quiz_finish_btn");
   finishQuizButtons.forEach((finishQuizButton) => {
      finishQuizButton.addEventListener("click", function() {
         resetQuizScore();
         quizFinish.classList.add("hide");
         if (this.getAttribute("id") === "retry_quiz_button") {
            quizLevelPrompt();
         } else if (this.getAttribute("id") === "main_menu_btn") {
            mainMenu.classList.remove("hide");
         }
      });
   });
}

// Function to reset quiz score

function resetQuizScore() {
   quizScore = document.getElementById("quiz_score");
   quizScore.innerText = 0;
}
