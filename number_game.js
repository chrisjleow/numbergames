const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
};
//Just need to get it to modify highGuess/lowGuess now
let highGuess = 100;
let lowGuess = 1;
//return value of current guess and assign it as a new variable?
start();
async function start() {
const currentGuess = Math.floor(Math.random() * (highGuess - lowGuess + 1) + lowGuess);
//ask 'is your number (guess) Y/N?' between two values.
let answer = await ask('Is your number...' + currentGuess + ' Y/N? ')
if (answer.toLowerCase() === 'y') {
  console.log('I am a victorious computer!');
  process.exit()
}
else if (answer.toLowerCase() === 'n') {
  //modifies range according to user input (H/L)
  let highLow = await ask('Is my number high or low (H/L)? ')
  if (highLow.toLowerCase() === 'h') {
    //if computer's number is high modify highGuess, doesn't work
    highGuess = currentGuess;
    start()
  }
  else if (highLow.toLowerCase() === 'l') {
    //if computer's number is low modify lowGuess, doesn't work
    lowGuess = currentGuess;
    start()
  }
  else {console.log('Error. Invalid input. Goodbye.');
process.exit()};
}

  }