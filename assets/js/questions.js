/* Questions for Estonia Quiz, links and extra research gathered by developer. 
All of the Questions created by the developer.
Layout structure for js file used from https://github.com/andreas-ka/leeds-quiz/blob/main/assets/js/questions.js */

/* Create an Array with all of the questions, and answers */

const quiz = [
    {
    numb: 1,
    question: "Where is Estonia, one of the Baltic States, located?",
    answer: "Northern Europe",
    options: [
        "Northern Europe",
        "Asia",
        "America"
    ]
},

/* Future dev: Correct answer to be made hidden, and then pop up for all of the questions,
with image and link on the side, or on the extra page? Add links to readme, and images, or only here? make answer images
as part of a comment for now, until correct code, where to place them
Estonia-Quiz/questions/northerneurope.png
Screenshot from this website:
https://gisgeography.com/europe-map/ */

{
    numb: 2,
    question: "What colour is the Estonian flag?",
    answer: "Blue, black and white",
    options: [
        "White, green and blue",
        "Yellow, black and white",
        "Blue, black and white"
    ]
},

/* Future dev: Estonia-Quiz/questions/estonianflag.png  
Estonia-Quiz/questions/flagstory.png
Link to image of Estonia, with the story about Estonian flag colours, used from this website:
https://www.visitestonia.com/en//estonian-flag */

{
    numb: 3,
    question: "What is the capital of Estonia?",
    answer: "Tallinn",
    options: [
        "Tallinn",
        "Helsinki",
        "Riga"
    ]
},

/* Future dev: Add link to visit Estonia, inside the question/answer brackets or separate? */

{   numb: 4,
    question: "What is the official language of Estonia?",
    answer: "Estonian",
    options: [
        "English",
        "Finnish",
        "Estonian"
    ]
},

/* Future dev: add image of English Estonian keyboard incidents */

/* Future dev: add https://www.eesti.ee/en/republic-of-estonia/republic-of-estonia/state-insignia. 
assets/images/nationalbird.png */

{
    numb: 5,
    question: ",
    answer: "Barn swallow",
    options: [
        "Barn swallow",
        "Owl",
        "Robin"
    ]
},

/* Future dev: Add image of a lynx. Credit where got the image.
https://www.visitestonia.com/en/lynx-and-bear-watching-tour-in-alutaguse-and-lahemaa-national-park?gad_source=5&gclid=EAIaIQobChMI5f2Whpa_gwMVhJhQBh28dgSrEAAYASAAEgIPl_D_BwE */

{
    numb: 6,
    question: "Which of these wild animals lives in Estonia?",
    answer: "Lynx",
    options: [
        "Lion",
        "Lynx",
        "Leopard"
    ]
},

{
    numb: 7,
    question: "Which of these letters are part of the Estonian alphabet?",
    answer: "õ,ä,ö,ü",
    options: [
        "æ, ø, å", /* Danish. From: https://www.danishnet.com/culture/danish-alphabet/ */
        "õ,ä,ö,ü",
        "δ, ζ, θ, λ" /* Greek: Delta, Zeta, Theta, Lambda from: https://www.greekalphabetletters.com/ */
    ]
},

/* Future dev, add to answer/extra: https://www.stat.ee/en/find-statistics/statistics-theme/population */

{
    numb: 8,
    question: "Population of Estonia in 2024?",
    answer: "1,366,491",
    options: [
        "1,366,491",
        "1,333,290",
        "1,315,819"
    ]
},

/* Future dev or now: add explanation, as due to cov it changed for few years, info from this website:
https://www.visitestonia.com/en/why-estonia/welcome-to-the-estonian-song-and-dance-celebration
due to covid, after 4 years this time:
Estonia-Quiz/questions/differentyears.png */

{
    numb: 9,
    question: "How often does the 'Estonian Singing and Dancing Festival' take place?",
    answer: "every 5 years",
    options: [
        "every 3 years",
        "every 5 years",
        "every 7 years"
    ]
},

/* Future dev add: You can watch this to hear numbers in Estonian: https://youtube.com/shorts/y2RQWWda-Nc?feature=shared */
{
    numb: 10,
    question: "How do you say 'One, two, three' in Estonian?",
    answer: "Kolm",
    options: [
        "Üks, kaks, kolm",
        "Yksi, kaksi, kolme",
        "Eins, zwei, drei"
    ]
}];