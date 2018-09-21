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
//computer creates random number
let computerNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
start();
async function start(){
    let userNum = await ask('Guess my number? (1-100)' )
    if (userNum > computerNum){
        console.log('Your guess is too high')
    start()}
    else if (userNum == computerNum){
        console.log('You are a WINNER!!!')
    process.exit()}
    else if (userNum < computerNum){
        console.log('Your number is too low')
    start()}
    else {console.log('Invalid input!!!')
    start()}    

    }
    
    


//asks user to guess a number
//tells us if our number is high or low


