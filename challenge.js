// window.addEventListener('DOMContentLoaded', (event) => {
//     const buttons = document.querySelectorAll('section button');

//     buttons.forEach((button) => {
//         button.addEventListener('click', () => {
//             const currentIndex = Array.from(button.parentNode.parentNode.parentNode.children).indexOf(button.parentNode.parentNode);

//             if (currentIndex < buttons.length - 1) {
//                 const nextPage = currentIndex + 2;
//                 const nextPage = currentIndex + 3;
//                 const nextPage = currentIndex + 4;
//                 const nextPage = currentIndex + 5;
//                 const nextPage = currentIndex + 6;
//                 const nextPage = currentIndex + 7;
//                 const nextPageURL = 'section' + nextPage + '_index.html';
//                 stopTimer();
//                 location.href = nextPageURL;
//             }
//         });
//     });

//     startTimer(); 
// });





/* allowing you to grab the section through the html based off id */
const opening_section = document.getElementById('start')
const start_button = document.getElementById('begin_quiz')
    start_button.addEventListener('click', begin_quiz)
const nextPage = document.getElementById('question')
const main_question = document.getElementById('main_question')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
var current_index = 0
var time = 60
var timer;
var timerel = document.getElementById('Timer')

const question_list = [
    {
        question: 'Commonly used data types do not include:',
        options: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        question:'Arrays in Javascript can be used to store ___.',
        options: ['numbers and strings', 'booleans', 'other arrays', 'all of the above'],
        answer: 'other arrays' 
    },
    {
        question:'The condition in an if/else statement is enclosed in ___.',
        options: ['quotes', 'curly brackets', 'paratheses', 'square brackets'],
        answer: 'curly brackets' 
    },
    {
        question:'String Values must be enclosed in ____.',
        options: ['commas', 'curly brackets', 'paratheses', 'quotes'],
        answer: 'quotes' 
    },
    {
        question:'A very useful tool used in development and debugging for printing content to the debugger is:',
        options: ['Javascript', 'terminal/bash', 'console logs', 'for loops'],
        answer: 'terminal/bash' 
    },
]

function begin_quiz() {
    opening_section.classList.add('hide')
    nextPage.classList.remove('hide')
    render_question()
    start_timer()
}

function render_question() {
    main_question.textContent= question_list[current_index].question
    option1.textContent = question_list[current_index].options[0]
    option2.textContent = question_list[current_index].options[1]
    option3.textContent = question_list[current_index].options[2]
    option4.textContent = question_list[current_index].options[3]
}

nextPage.addEventListener("click", function(event){
    if (event.target.nodeName==="BUTTON") {
        var correct = question_list[current_index].answer
        var choice = event.target.innerText
        if (choice !== correct) {
            time-=10
        }
        current_index++
        if (current_index >= question_list.length) {
            document.getElementById("end").style.display="block"
            nextPage.style.display="none"
            return
        }
        render_question()
    }
})

function start_timer() {
    timer = setInterval(function(){
        if (time > 1) {
            time--
            timerel.innerText=time
        }
    }, 1000)
}

document.getElementById("initials_button").addEventListener("click", function(){
    var initials = document.getElementById("initials").value
    // document.getElementById("score").innerText=initials + " " + time
    var scores = JSON.parse(localStorage.getItem("score"))||[]
    scores.push({time, initials})
    localStorage.setItem("score", JSON.stringify(scores))
})