//jshint esversion: 8

// script.js final version - all code learned from: [The Everything Quiz](https://github.com/Tony118g/the-everything-quiz/blob/main/assets/js/script.js)

// Const Variables (Variables with consistent value)

const heading = document.getElementById("heading");
const mainMenu = document.getElementById("mainMenu");
const guidelinesModal = document.getElementById("guidelines");
const levelPrompt = document.getElementById("level_prompt");
const quizArea = document.getElementById("quiz_area");
const answersArea = document.getElementById("answer_area");
const timerDisplay = document.getElementById("timer");
const nextQuestionButton = document.getElementById('next_question_button');


// Let Variables (Variables with changing value)

let shuffledQuestions;
let currentQuestionIndex;
let correctAnswer;
let score;
let timeLeft;
let timerInterval;

// Main Menu buttons

document.addEventListener("DOMContentLoaded", function() {
   const mainMenuButtons = this.querySelectorAll(".main_menu_btn");
   mainMenuButtons.forEach((mainMenuButton) => {
      mainMenuButton.addEventListener("click", function() {
         if (this.getAttribute("id") === "guidelines_button") {
            displayGuidelines();
         } else if (this.getAttribute("id") === "quiz_button") {
            levelPrompt();
         }
      });
   });
});

// Function to hide Main Menu

function displayGuidelines() {
   guidelinesModal.classList.remove("hide");
   heading.classList.add("hide");
   mainMenu.classList.add("hide");
   const closeGuidelinesButton = document.getElementById("close_guidelines");
   closeGuidelinesButton.addEventListener("click", closeGuidelines);
}

// Function to close and hide Guidelines Modal, and to display Main Menu

function closeGuidelines() {
   guidelinesModal.classList.add("hide");
   heading.classList.remove("hide");
   mainMenu.classList.remove("hide");
}

// Display Levels Menu while hiding Main Menu

function quizLevelPrompt() {

   const closeLevelButton = document.getElementById("close_level");
   closeLevelButton.addEventListener("click", closeLevelMenu);

   // Displays Quiz Levels Menu

   levelPrompt.classList.remove("hide");
   heading.classList.add("hide");
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
   heading.classList.remove("hide");
   mainMenu.classList.remove("hide");
}

// Function to hide Quiz area, reset Quiz, and display Main Menu

function exitQuiz() {
   currentQuestionIndex = 0;
   clearInterval(timerInterval);
   resetScore();
   quizArea.classList.add("hide");
   heading.classList.remove("hide");
   mainMenu.classList.remove("hide");
}

// Function to display Beginner Questions

function startBeginnerQuiz() {
   quizArea.classList.remove("hide");
   shuffledQuestions = beginnerQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
   currentQuestionIndex = 0;
   nextQuestionButton();
}

// Function to display Intermediate Questions

function startIntermediateQuiz() {
   quizArea.classList.remove("hide");
   shuffledQuestions = intermediateQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
   currentQuestionIndex = 0;
   nextQuestionButton();
}

// Function to display Expert Questions:

function startExpertQuiz() {
   quizArea.classList.remove("hide");
   shuffledQuestions = expertQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
   currentQuestionIndex = 0;
   nextQuestionButton();
}

// Function nextQuestion, check if currentQuestionIndex < 5

function nextQuestion() {
   clearInterval(timerInterval);
   if (currentQuestionIndex < 5) {
      resetQuizContent();
      displayQuizContent(shuffledQuestions[currentQuestionIndex]);
      currentQuestionIndex++;
      timer();
   } else {
      finalScore();
   }
}

// Function displayQuizContent

function displayQuizContent(question) {

   // Gets question container

   const questionContainer = document.getElementById("question");
   
   // Adds question content

   questionContainer.innerText = question.question;

   // Creates button for each option for particular question

   question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
         button.id = "correct";
      } else {
         button.classList.add("incorrect");
      }

      // Adds an event listener to button, and append it to answer area

      button.addEventListener("click", checkAnswer);
      answersArea.appendChild(button);
   });

   displayQuestionNumber();
}

// Function to get quizQuestionNumber Element

function displayQuizQuestionNumber() {
   const quizQuestionNumber = document.getElementById("quiz_question_number");
   quizQuestionNumber.innerText = currentQuestionIndex + 1;
}

// Timer function

function startTimer() {
   timerInterval = setInterval(timer, 1000);
}

// Function to check time left

function timer() {
   if (timeLeft <= 0) {
      timeUp();
   } else {
      timeLeft--;
   }
   timerDisplay.innerHTML = 'Time: ' + timeLeft;
}

// Time is up function

function timeUp() {
   alert("Time is up!");
   clearInterval(timerInterval);
   answersArea.classList.add("no-pointer");

   // Const for incorrect answers

   const incorrectAnswers = document.querySelectorAll('.incorrect');
   for (let incorrectAnswer of incorrectAnswers) {
      incorrectAnswer.classList.add('incorrect_answer');
   }

   // Function and const for correct answer

   function checkAnswer(event) {
      clearInterval(timerInterval);
      answersArea.classList.add("no-pointer");
      correctAnswer = document.getElementById("correct");
      const clickedButton = event.target;
      correctAnswer.classList.add("correct_answer");
         if (clickedButton === correctAnswer) {
            incrementScore();
         } else {
            this.classList.add("incorrect_answer");
         }
      nextQuestionButton.classList.remove("hide");
   }

   // EventListener for Next button

   nextQuestionButton.addEventListener("click", nextQuestion);

   // Function to get and increment score

   function incrementScore() {
      score = parseInt(document.getElementById("score").innerText);
      document.getElementById("score").innerText = ++score;
   }

   // Function to Reset Quiz Content

   function resetQuizContent() {
      nextQuestionButton.classList.add("hide");
      answersArea.classList.remove("no-pointer");
      timeLeft = 16;
      startTimer();

      // While to remove previous answer options
      
      while (answersArea.firstChild) {
         answersArea.removeChild(answersArea.firstChild);
      }
   }

   // Function for Final Score

   function finalScore() {
      const quizFinish = document.getElementById("quiz_finish");
      const finalScore = document.getElementById("final_score");
      quizArea.classList.add("hide");
      heading.classList.remove("hide");
      quizFinish.classList.remove("hide");
      finalScore.innerText = score;

      // Const Finish Quiz

      const finishQuizButtons = document.querySelectorAll(".quiz_finish_btn");
      finishQuizButtons.forEach((finishQuizButton) => {
         resetScore();
         quizFinish.classList.add("hide");
         if (this.getAttribute("id") === "retry_quiz_button") {
            levelPrompt();
         } else if (this.getAttribute("id") === "main_menu_button") {
            mainMenu.classList.remove("hide");
         }
      });
   });
}

// Function to reset score

function resetScore() {
   score = document.getElementById("score");
   score.innerText = 0;
}
