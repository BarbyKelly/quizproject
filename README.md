# Estonia Quiz 

Estonia quiz has been created by a Software Development student, as part of Code Institute's Javascript project. This quiz may benefit anyone who:
- would like to test their knowledge about Estonia
- likes to do quizzes
- wishes to learn something (new) about Estonia

Link to the live GitHub site: [Estonia Quiz](https://barbykelly.github.io/quizproject/)

Image from [Am I Responsive?](https://ui.dev/amiresponsive?url=https://barbykelly.github.io/quizproject/) to show how website looks on different screen sizes.

![Am I Responsive](assets/images/readmeimg/amiresponsive.png)


## Contents

[User Experience](#user-experience)
  - [User Stories](#user-stories)

[Wireframes](#wireframes)

[Design](#design)
  - [Images](#images)
  - [Color](#color)
  - [Font/Style](#fontstyle)

[Features](#features)

  - [Existing Features](#existing-features)

  - [Future Features](#future-features)
  
[Languages Used](#languages-used)

[Sites, Apps Used](#sites-apps-used)

[Testing](#testing)

[Bug fixing](#bug-fixing)

[Known Bugs](#known-bugs)

[Deployment](#deployment)

[Credits](#credits)
  - [Code](#code)
  - [Questions](#questions)
  - [Images](#images)

[Acknowledgements](#acknowledgements)


## User Experience

### User Stories

#### First Time User:

First time user, may want to:

- Check their knowledge about Estonia
- Learn something new about Estonia
- Click on "Start Estonia Quiz" button
- Experience that all buttons work on the website
- See one question at a time displayed on the screen
- Click on any of the answer options
- Find out which answer was correct when the correct answer option turns green
- Click on the button: "Next Question"
- Go through all of the questions
- Restart the quiz at the end of 10 questions by clicking on "Restart Quiz" button


#### Returning User:

Returning user may want to:

- Do all that First Time User may do, as well as:
  - See different quiz options (future feature)
  - Test their knowledge again
  - See updated info on the website, if any details should change (eg population)
  - Improve their score (score counting: future feature)
  - See new buttons added (future feature: eg Quit Quiz button, check your best score, choose type of quiz)
  - Be able to click on links (future feature, links to resources)

[Back to top](#contents)


## Website Structure

This website includes one page:
- With "Start Estonia Quiz" button
- Leading player to questions, answer options
- And an option to click "Next Question" button, when player wants to see another question displayed
- At the end of the quiz i.e. 10 questions, "Restart Quiz" button appears
- Clicking on "Reset Quiz" starts the same 10 questions all over again, shuffled in a different order 


### Wireframes

This website is for anyone interested in doing a quiz, or who wants to learn more about Estonia.

Goal of the quiz is to:
  - test knowledge
  - play a game
  - see one question at a time displayed on the screen, without the correct answer option being highlighted,
    until the player has chosen one option for their answer
  - be able to click on any option for an answer
  - see the correct answer displayed as green
  - see incorrect answers turn red
  - have an option to restart the quiz (either by refreshing the page or at the end of 10 questions)
  

Website visitors are likely to:
  - click on "Start Estonia Quiz"
  - read the questions
  - answer the questions by clicking on any answer option
  - click on "Next Question"
  - try again by clicking on "Restart Quiz"
 

Screenshot of Estonia Quiz Home Page with the original image idea, with Estonian books and DVD's, Wireframe:

![Image of Estonian books, dvds](assets/images/readmeimg/wireframehomepageestquiz.png)


Screenshot of Estonia Quiz "Quiz Score" view, Wireframe

![Quiz Score view](assets/images/readmeimg/wireframequizscore.png)


Buttons top left, languages:
  - English
  - Eesti (Estonian)
(Part of Future Development plan due to time constraint, and developer being a beginner in coding)

[Back to top](#contents)


## Design

### Images

FAVICON

Developer used an image of a cornflower (Estonian national flower), from her own collection, to create a Favicon.

The original image: 

![cornflower](assets/images/cornflower.jpg)


[Favicon.io](https://favicon.io/favicon-converter/) helped to convert the image into Favicon:


Screenshot of favicon on the website:
![cornflower favicon image](assets/images/readmeimg/faviconreadme.png)


### Color

As the Estonian national flower is a Cornflower, developer chose 'cornflower blue' as a Background color for the website. Developer found Cornflower blue color code from this website: 
![Colorcodes.com](assets/images/readmeimg/cornflowerblue.png)


Color palette from this website:
[Mycolor.space](https://mycolor.space/?hex=%236495ED&sub=1)


### Font/style

![Comfortaa](assets/images/readmeimg/comfortaareadme.png)


[Back to top](#contents)

## Features

### Existing Features 

- Favicon icon
- Background image of Estonian national flower, cornflower
- Clickable "Start Estonia Quiz" button
- Ten questions, shuffled in random order
- After clicking on "Start Estonia Quiz", one random question is displayed
- Player then has an option to click on any of the answer option buttons
- Correct answer option turns green, and incorrect options turn red, when any of the options is chosen as an answer
- "Next Question" button appears when the first question has been answered, if correct or incorrect
- Player can click on the "Next Question" button
- "Restart Quiz" button shows up when all 10 questions have been answered
- Clicking on "Restart Quiz" button or refreshing browser, will start the game again, with the same questions shuffled in a different order
- Footer text with copyright sign
- Player can exit the game at any time by closing the webpage or browser


### Future Features

- Estonia Quiz instructions displayed before the quiz starts
- Clear indicator of which option was correct, and which option was chosen by the player, and if those options matched or not
- Add buttons for different languages, for example English and Estonian
- How many questions answered indicator
- Percentage of correct vs incorrect answer options chosen
- Player can choose how many questions they want to answer per game
- Increased number of questions
- Add variations of the quiz eg wildlife, culture, music, authors, movies, national symbols and so on
- Add Buttons on top of the page with different languages, for the quiz and for the "Extra" area:
  - English
  - Eesti (Estonian)
- Add "Extra" button to the website, which would bring visitors to an area with links and images to find out more about Estonia 
- Add code to make images pop up when visitor has made their choice. Image of the correct answer (eg picture of lynx)
- Ensure that links open in a new tab, to keep Estonia Quiz page open

[Back to top](#contents)


## Languages Used

- JavaScript
- CSS
- HTML

![Languages used](assets/images/readmeimg/languagesused.png)


[Back to top](#contents)


## Sites, Apps Used

Developer used these sites/apps to create Estonia Quiz: 

- [Balsamiq Wireframes](https://balsamiq.com/)
- [GitHub](https://github.com/)
- [Gitpod](https://www.gitpod.io/)


[Back to top](#contents)


## Testing

### HTML

Tested HTML with
[Validator.W3](https://validator.w3.org/)

![HTML validation](assets/images/readmeimg/htmlvalidation.png)







### CSS

Tested CSS with

[Jigsaw.W3](https://jigsaw.w3.org/css-validator/)

![CSS validation](assets/images/readmeimg/cssvalidation.png)


### JavaScript

[Site 24X7](https://www.site24x7.com/tools/javascript-validator.html)

![JavaScript validation](assets/images/readmeimg/jsvalidator.png)


### Lighthouse

Tested with Lighthouse:

![Lighthouse test](assets/images/readmeimg/lighthousetest.png)

[Back to top](#contents)


## Bug fixing

### Favicon

At first favicon icon did not appear on the website. Developer had used the four line code from
[Favicon.io](https://favicon.io/favicon-converter/)

![favicon codes](assets/images/readmeimg/faviconcodes.png)

After comparing Favicon codes vs codes from Love Running, developer noticed that path needed to be adjusted. After adjusting the path, favicon appeared on the website. 


### HTML error

Developer saw the following error when inspecting the website: "Uncaught TypeError: startQuizBtn is not a function at HTMLButtonElement.onclick".

Developer found the solution after reading this [article](https://stackoverflow.com/questions/51282433/typeerror-functionname-is-not-a-function-at-htmlbuttonelement-onclick)

Error had been caused by startQuizBtn, were it was supposed to be startQuizBtnFunction instead.

[Back to top](#contents)


### Color of correct/incorrect answer

When developer tested answer options, and chose the correct or incorrect option, color of the answer options did not change. After checking out [this page](https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/), the developer noticed that script should be in a different place. Once script was moved into the container, green and red colors showed up for correct/incorrect options, when "Next Question" button was clicked. This testing led to the next bug:

### One of the questions had no correct answer option

Once color showed up correctly for correct vs incorrect answers, developer noticed one of the questions had all options showing up as incorrect. Developer realised that she must have typed 'false' instead of 'true' for all of the options. After setting the correct option as "true", the error remained. Developer cleared the cache, started port again, and then the correct answer turned green.

### Commented out text showing up on deployed version

404 error page displayed commented out parts. Developer realised, she had used CSS commenting style for HTML. Once the comments were corrected as appropriate for HTML,
commented out text no longer appeared on 404 error page.

![CSS comments instead of HTML](assets/images/readmeimg/csscommentinsteadofhtml.png)


### Error page styling

- Developer needed to check error pages only on the deployed site, as GitPod would only show the default error page.
  Thanks to mentor Lauren-Nicole Popich, developer knew that error page might not show up properly when testing on GitPod
  
![Error page in GitPod](assets/images/readmeimg/errorpageingitpod.png)

- 404 error page styling was not showing up. Developer edited stylesheet link, which fixed the issue:

![Background-image not displaying](assets/images/readmeimg/imagenotthere.png)

- Background-image for 404 error page was not showing. Developer removed the background-image from error-container styling, which fixed the issue

![404 error page](assets/images/readmeimg/errorpageongithub.png)

### HTML code lines not showing in README

- Developer noticed that HTML codelines for favicon credit did not show up in README. With tutor Sarah's help, backticks were added, developer
  adjusted the indentation, and the HTML code lines showed up in README

![Backticks for HTML code](assets/images/readmeimg/backticks.png)

![Code showing up in README as expected](assets/images/readmeimg/codelinesshowinginreadme.png)

### Button tag error

- When 'Guidelines' and 'Choose Quiz level' buttons were not responsive, developer first checked html validation.

- HTML Validation test showed an error on line 67:

  ![HTML error](<assets/images/readmeimg/html_error.png>)

- Developer checked index.html, and couldn't see any error on line 67. She then checked Slack, and Google for solution.
  Solution came from [this site](https://rocketvalidator.com/html-validation/start-tag-button-seen-but-an-element-of-the-same-type-was-already-open):

  [Help from Rocket Validator](assets/images/readmeimg/rocket_validator_help.png)

  Developer investigated line 67 again, and noticed that issue was on line 66, as she had deleted '<' jin button's closing tag, by accident, while changing names for quiz levels:

  [HTML line 66 missing >](assets/images/readmeimg/html_tag_error.png)

- Developer added '<' back in front of the closing button, and error was fixed:

  [Fixed button tag](assets/images/readmeimg/button_tag_fixed.png)

- Developer learned from this bug how it's important to look at lines before and after the error, not just the line marked with an error.

#### js version error

- After fixing html error, Developer used [jshint.com](https://jshint.com/) to validate js files. And lots of errors where shown as: "...available in ES6(use     'esversion:6'):

  ![js validation before](assets/images/readmeimg/jshint_test_before.png)

  Developer checked Google, and found a solution on [Stack overflow](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const):

  ![jshint advice](assets/images/readmeimg/jshint_advice.png)

  She swapped previous:

  // jshint esversion: 6 in script.js, 
  
  for

  {
   "esversion: 6"
  }

  ![js version fix](assets/images/readmeimg/js_version_fix.png)

  And she added same to the top of questions.js file. After this, jshint found only couple of issues, no more issues with: "...available in ES6(use 'esversion:6'), but issue with '{' :}

  ![jshint after](assets/images/readmeimg/jshint_after.png)

  Developer contacted tutoring, and was given:

  //jshint esversion: 8

  to be used instead. This finally fixed esversion error.

  #### Const and function wording not matching

  - Developer checked id's and classes for Levels, index.html vs script.js, vs questions.js.
  - She noticed that function had 'beginnerQuestions', while in questions.js she had used: 'beginnerLevelQuestions':

  ![Words not matching](assets/images/readmeimg/const_not_matching.png)

  - Developer removed 'level' from all three levels in questions.js,
    to match with script.js's wording.

  #### Uncaught Syntax Error: brackets missing

  - Next developer used DevTools to see what was still blocking Guidelines button from working:

  ![DevTools check](assets/images/readmeimg/devtools.png)

  - She checked line 117 in script.js, and noticed brackets missing:

  ![Missing brackets](assets/images/readmeimg/missing_brackets.png)

  - Developer fixed line 117 brackets, and also fixed similar issues on lines 126 and 135:

  ![Fixed brackets line 117](assets/images/readmeimg/fixed_brackets.png)

  #### Uncaught SyntaxError: Unexpected token

  - After brackets were fixed, script.js line 289 showed an error:

  ![Unexpected token error](assets/images/readmeimg/unexpected_token.png)

  - While investing where this error was coming from, developer noticed
  that she hadn't swapped 'LevelPrompt' for 'QuizLevelPrompt' on line 35 in script.js,
  while she had swapped it on line 62 in index.html, and on line 10 in script.js.
  Developer corrected the error.

  - Developer deleted ')' from line 289 script.js, to be able to see other errors, as she hadn't located
  the opening '(', to fix that error.

  #### Uncaught TypeError: Cannot read properties of null (reading 'classList')

  - Next, when inspecting the page after clicking on 'Guidelines' button, Uncaught TypeError: Cannot read properties of null (reading 'classList')
    Error showed up for line 46 script.js:

  ![Uncaught type error](assets/images/readmeimg/uncaught_type_error.png)

  - Guidelines were now visible, but Main Menu was not hidden as expected:

  ![Guidelines visible, and main menu](assets/images/readmeimg/guidelines_visible.png)

  - Developer checked if all Main menu wording was same in all files, and noticed that she had 
    used camelCase instead of 'id' in const line 8 script.js. Developer fixed the error:

  ![camelCase error](assets/images/readmeimg/camelcase_error.png)

  - Developer tested website again after this fix, and Guidelines opened as expected, 
  while Main Menu became hidden:

  

## Known Bugs

- When player clicks on any option to answer the question, and then clicks "Next Question", all answer options change color: one correct, and two incorrect ones, 
  instead of just changing the color of the chosen option, and the correct option (if correct option was not chosen)
- There is no question counter as part of the game. Developer could not get it to work, and opted to leave it out
- Developer would have liked to have "Quit" button set up, so player could quit quiz at any time
- "Next Question" button is more responsive than "Option" buttons, when screen size changes:

![Next Question Btn vs Option Buttons](assets/images/readmeimg/nextbtnvsoptions.png)

- On a smaller screen, developer would have liked to have container in a lower right position, so cornflower would remain more visible. am I responsive test
  showed the flower covered by the quiz container, while lighthouse testing shows the flower and container box how the developer wanted them to fit together

- There's no option to choose Quiz Level straight from Guidelines Menu, instead user needs to click to exit that menu, and then click on 'Choose quiz level' menu.

- When guiding user to click on 'x' to close Guidelines menu, user might use the 'x' to close the website. Important to make sign clear, and ideally user can just go straight to   Quiz levels, without having to close Guidelines menu. Or to add a rotate-left icon, to return to main menu. Or burger menu, to return to main menu.

- 'Close modal' * is clickable on all screen sizes, yet on a smallest screen size, it doesn't change when hovering over it, and hovering isn't working for Main menu buttons on a smallest screen

[Back to top](#contents)


## Creating a GitHub repo:

- Developer clicked on [GitHub link](https://github.com/Code-Institute-Org/ci-full-template) under Love Maths "Getting Set Up" video.

![link for code template](assets/images/readmeimg/citemplate.png)



- As the original template was for CodeAnywhere, and developer works with GitPod, developer clicked on [GitPod template](https://github.com/Code-Institute-Org/ci-full-template)

![gitpod template](assets/images/readmeimg/githubTemplate.png)



- Next the developer clicked on "Use this template", and then clicked on "Create a new repository":

![use this template](assets/images/readmeimg/repolink.png)



- Filled in Repository name, and clicked on "Create repository"

![create repo](assets/images/readmeimg/createRepo.png)


## Deployment

- Click on Github project that you wish to deploy
- Go to Settings (menu at the top)
- Click on Pages (left side menu, under Code and automation)
- Under Build and deployment:
  - Click on "Deploy from a branch"
  - From the drop down menu under Branch, choose "main"
  - After choosing "main", a "/root" folder becomes visible beside it. Leave the root folder as it is
  - Click on "Save"
- GitHub Pages link on top of the "GitHub Pages", will be replaced with your live link

[Back to top](#contents)


## Credits

### Favicon 

Favicon created using [favicon converter](https://favicon.io/favicon-converter/)

These 3 lines of code, for favicon, were copied from Love Running:
```
<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
```
This line of code:
```
<link rel="manifest" href="/site.webmanifest"> 
```

for Favicon, was copied from
https://favicon.io/favicon-converter/

Rest of the code credited in index.html, script.js, questions.js, style.css and in other parts of README.


### Readme

Parts of the Readme template used from [Code Institute's Sample README](https://github.com/Code-Institute-Solutions/SampleREADME?tab=readme-ov-file) 

The Contents menu learned from: [Everything Quiz](https://github.com/Tony118g/the-everything-quiz/blob/main/README.md) 

Reading The Everything Quiz README, highlighted for the developer the level of details that Quiz website README needs, and demonstrated the value of README. 


### User Stories:

Template used from
[Atlassian.com](https://www.atlassian.com/agile/project-management/user-stories)


### Wirefames

- Ideas, how to articulate user's goals, written down after reading this [article](https://balsamiq.com/learn/articles/five-steps-to-great-wireframes/)

![Articulate article screenshot](assets/images/readmeimg/articulate.png)

- The developer learned how to use Wirefames from [this Youtube video](https://www.youtube.com/watch?v=9Pv002d0Kls&list=PLVlyYfbClWxQDCGC-A1FkbGyIxtuIN5IM&index=1)

- All Wireframes created with [Balsamic Wireframes](https://balsamiq.com/)

- Estonia Quiz home page Wireframe:

![Wireframe Home Page](assets/images/readmeimg/wireframe_quiz_opt_50.png)

Photo taken by the developer. Developer opted for a photo with Cornwlower, as it's the national flower of Estonia.

- Guidelines page Wireframe:

![Wireframe Guidelines Page](assets/images/readmeimg/wireframe_guidelines_opt_50.png)
  
- Screenshot of Estonia Quiz test score page, created with Balsamiq Wireframes:





### Code

- At the start Developer followed code for Estonia quiz from [Build A Quiz App With JavaScript](https://youtu.be/riDzcEQbX6k?feature=shared). Most of the code for this project is credit to Web Dev Simplified's quiz.

- Code for the Final version of Estonia Quiz, learned from: [The Everything Quiz](https://tony118g.github.io/the-everything-quiz/) . Developer found the layout and functionality of The Everything Quiz, more suitable for Estonia Quiz.


- Footer

Developer learned how to make Copyright sign &copy; from [Mental-Arithmetic-Quiz project](https://github.com/Shida18719/Mental-Arithmetic-Quiz/blob/main/index.html)



### Questions

All of the questions created by the developer, from her own experience, her own knowledge or researching updated information eg population details. 

Below are the websites/images that developer used to validate the answers for the Estonia quiz:

- Northern Europe, screenshot from [gisgeography.com](https://gisgeography.com/europe-map/)

![Northern Europe](assets/images/popupextraimages/northerneurope.png)



- The developer found this Story about colors of Estonian flag some time ago, unfortunately the link to this article's origin has gone missing. Developer did not take this photo, it's visible on the screenshot who took the photo. Developer did not write this story about the flag. Developer is continuing search to find the origin of this flag story. The previous link no longer seems to be available

![Flag story](assets/images/popupextraimages/flagstory.png)


- [eesti.ee](https://www.eesti.ee/en/republic-of-estonia/republic-of-estonia/state-insignia)


- Estonian national bird: 

![Barn swallow](assets/images/popupextraimages/nationalbird.png)



- [Lynx watching tour](https://www.visitestonia.com/en/lynx-and-bear-watching-tour-in-alutaguse-and-lahemaa-national-park?gad_source=5&gclid=EAIaIQobChMI5f2Whpa_gwMVhJhQBh28dgSrEAAYASAAEgIPl_D_BwE)


- Population statistics from [stat.ee](https://www.stat.ee/en/find-statistics/statistics-theme/population)


- Due to covid, the Estonian Song and Dance festival is after 4 years this time:

![Different years notice](assets/images/readmeimg/differentyears.png) 


Usually every 5 years [the Estonian Song and Dance Festival](https://www.visitestonia.com/en/why-estonia/welcome-to-the-estonian-song-and-dance-celebration)

- To hear numbers in Estonian, visitor can watch this [Youtube video](https://youtube.com/shorts/y2RQWWda-Nc?feature=shared)



### Images 

Website's background image, cornflower, and the image with Estonian books and DVD's (wireframe), both taken by the developer.

Same background image used to create a favicon image, using [favicon converter](https://favicon.io/favicon-converter/)

#### Resized Images

- Developer used [Simple image resizer](https://www.simpleimageresizer.com/resize-image-to-50-kb) to reduce README images

[Back to top](#contents)



### Error pages

- Developer created Error pages by following code from [this article](https://www.geeksforgeeks.org/create-a-404-page-using-html-and-css/)

- Developer learned from [this site](https://www.presslabs.com/how-to/error-pages/) how site visitors may help themselves with error pages, and added these tips to html



## Acknowledgements

- Code for the Final version of Estonia Quiz, learned from: [The Everything Quiz](https://tony118g.github.io/the-everything-quiz/) . Developer liked the layout and functionality of The Everything Quiz.

- Grateful to my Mentor Lauren-Nicole Popich for supporting me with my project, for listening, for sharing examples like the Leeds Quiz, for guiding me to improve my project, and for suggesting to convert the links into clickable text, among other suggestions.

- Grateful to Coding Group member Patrick Hladun for guiding developer via Slack, to get console errors to show up, and how to track errors one by one. He also pointed out where names of the functions were clashing, and some ; vs : errors in developer's code.

- Thank you to Laura Mayock, group's Cohort Facilitator, for our weekly group meetings and guidance, encouraging students to show and talk about their projects. And to everyone who took part of the group meetings, shared their projects, and everyone who supported via Slack.

- On the 31st of January 2024, while testing Estonia Quiz in a different browser (Microsoft Edge), and placing developer's own GitHub Estonia Quiz link into search bar, the developer came across [Estonian quizzes](https://www.visitestonia.com/en/why-estonia/play-quizzes-and-test-your-knowledge-about-estonia#). The developer was previously not aware of this Estonian quizzes page, even though she had seen other parts of www.visitestonia.com website, and credited the main page in README. The developer understands for the future that it is important to Google first, to see if there are similar named projects.

[Back to top](#contents)