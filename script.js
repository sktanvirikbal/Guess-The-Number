'use strict'
//below codes are for learning
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Number!'
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20
// //to get data from input box we use value property
// document.querySelector('.guess').value = 15
// console.log(document.querySelector('.guess').value)
// //now we will see event handling
//now we develop the application
//get the secret number when we start the application only
let secretNumber = Math.trunc(Math.random() * 20) + 1
//get the base score
let score = 20//decrease the value
let highScore = 0
//event will happen at check button
//name of event : click
document.querySelector('.check').
    addEventListener('click', function () {
        const guess = Number(document.querySelector('.guess').value)

        // incase there is no input
        if (!guess) {
            document.querySelector('.message').textContent = "No number!"
        }
        else if (guess === secretNumber) {
            displayWhenCorrectGuess()
            //inline styles that are applied directly to the html elements
            //not changing the css file

        }
        else if (guess > secretNumber)
            helper1('Too high!')
        else
            helper1('Too low!')



    })

//helper functions
function helper1(str) {
    if (score > 1) {
        document.querySelector('.message').textContent = str
        score--
        document.querySelector('.score').textContent = score

    }
    else {
        score--
        document.querySelector('.message').textContent = 'You lost the game!'
        document.querySelector('.score').textContent = score

    }
}
function displayWhenCorrectGuess() {
    document.querySelector('.message').textContent = 'Correct Number!'
    document.querySelector('.number').textContent = secretNumber
    //as soon as someone wins the game the highscore should change
    if (score > highScore) {
        highScore = score
        document.querySelector('.highscore').textContent = highScore
    }
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').style.backgroundColor = '#FF7276'
    document.querySelector('.number').style.color = 'black'
    document.querySelector('.number').style.border = '5px solid white'
    document.querySelector('.number').style.borderRadius = '25rem'
}
//implementing again button
document.querySelector('.again').addEventListener('click', () => {
    //need to change all variables to their initial values
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1

    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.backgroundColor = '#eee'

})
//console will show the input we have given in the input box
//this function will only be called if the event happens
