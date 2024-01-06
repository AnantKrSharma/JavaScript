# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code


## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (item) {
  console.log(item);
  item.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        document.body.style.backgroundColor = e.target.id;
        break;

      case 'white':
        document.body.style.backgroundColor = e.target.id;
        break;

      case 'yellow':
        document.body.style.backgroundColor = e.target.id;
        break;

      case 'blue':
        document.body.style.backgroundColor = e.target.id;
        break;

      case 'pink':
        document.body.style.backgroundColor = e.target.id;
        break;

      default:
        document.body.style.backgroundColor = 'white';
        break;
    }
  });
});

```

## Project 2

```javascript

const form = document.querySelector('form')

/* The method attribute of form tag specifies how to send form-data (the form-data is sent to the page specified in the action attribute).

The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post"). */

form.addEventListener('submit', function(e){
  e.preventDefault()

  const heightVal = parseInt(document.querySelector('#height').value)
  const weightVal = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if( heightVal === '' || heightVal < 0 || isNaN(heightVal) ){
    result.innerHTML = 'Please give a valid height value.';
  }

 else if( weightVal === '' || weightVal < 0 || isNaN(weightVal) ){
    result.innerHTML = 'Please give a valid weight value.';
  }

  else{
    //show the result
    const BMI = (weightVal / ((heightVal*heightVal)/10000)).toFixed(2)

    if(BMI <= 18.6){
      result.innerHTML= `<span> ${BMI} </span><br> Under Weight`
    }
    else if(BMI > 18.6 && BMI <= 24.9){
      result.innerHTML= `<span> ${BMI} </span><br> Normal Range`
    }
    else{
      result.innerHTML= `<span> ${BMI} </span><br> Overweight`
    }
  }
} )

```

## Project 3

```javascript

const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')

// this is used to run a function repeatedly after a set interval of time, which is passed in it as an argument (in milliseconds).
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## Project 4

```javascript

let RandomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const para = document.createElement('p');

let prevGuess = [];
let numOfGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  /* checks whether the value is between 1 and 100 or not. */
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numOfGuesses >= 10) {
      cleanUpGuess(guess);
      displayMessage(`Game over. Random Number was ${RandomNum}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  /* checks if the guessed value is equal to the actual value. */
  if (guess === RandomNum) {
    displayMessage(`You guessed it right!!`);
    endGame();
  } else if (guess < RandomNum) {
    displayMessage(`Number is too low..`);
  } else if (guess > RandomNum) {
    displayMessage(`Number is too high..`);
  }
}

function cleanUpGuess(guess) {
  /* cleans the input area for next guess, and keeps a record of guessed values in the array 
  and also updates the number of guesses left. */
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numOfGuesses++;
  remaining.innerHTML = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
  // used to display a message.
  lowOrHi.innerHTML = `${message}`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  /* The disabled attribute is a boolean attribute.
     When present, it specifies that the <input> element should be disabled.
     A disabled input element is unusable and un-clickable. */
  para.classList.add('button');
  para.innerHTML = '<h2 id="newGame">Start new game</h2>';
  startOver.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    RandomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numOfGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(para);

    playGame = true;
  });
}


```