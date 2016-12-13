var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')

var resultBox = document.getElementById('result')
var playerChoiceBox = document.getElementById('playerChoice')
var computerChoiceBox = document.getElementById('computerChoice') 

// instantiated variables - placeholders for future value
var playerChoice;
var computerChoice;
var winner;

// var playerScore = 0;
// var computerScore = 0;

var getRandomInt = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var displayWinner = function (){
  playerChoiceBox.innerHTML = '<h2>Your Choice: ' + playerChoice + '</h2>';
  computerChoiceBox.innerHTML = '<h2>Computer Choice: ' + computerChoice + '</h2>';
  resultBox.innerHTML = '<h1>' + winner + ' Wins!!</h1>';
}


var checkWinner = function () {
  if(playerChoice === 'rock'){
    if(computerChoice === 'scissors'){
      winner = 'Player';
      // playerScore +=1;  
    } else if (computerChoice === 'paper') {
      winner = 'Computer';
      // computerScore +=1;
    } else {
      winner = 'No';
    }
  } else if(playerChoice === 'paper'){
    if(computerChoice === 'rock') {
      winner = 'Player';
      // playerScore +=1;
    } else if (computerChoice === 'scissors') {
      winner = 'Computer';
      // computerScore +=1;
    } else {
      winner = 'No';
    }
  } else if(playerChoice === 'scissors') {
    if(computerChoice === 'paper') {
      winner = 'Player';
      // playerScore +=1;
    } else if(computerChoice === 'rock') {
      winner = 'Computer';
      // computerScore +=1;
    } else {
      winner = 'No';
    }
  }
  displayWinner();
}


// document.write("<p>Your Score: " + playerScore);
// document.write("<p>Computer Score: " + computerScore);


var generateComputerChoice = function () {
// get random num and pick for comp
  var randNum = getRandomInt(1, 3);
    if(randNum === 1) {
    computerChoice ='rock';
  } else if(randNum === 2) {
    computerChoice ='paper';
  } else {
    computerChoice ='scissors';
  }
  checkWinner(); 
}

rock.addEventListener('click', function () {
  playerChoice = 'rock';
  generateComputerChoice();
});


paper.addEventListener('click', function () {
  playerChoice = 'paper';
  generateComputerChoice();
});


scissors.addEventListener('click', function () {
  playerChoice = 'scissors';
  generateComputerChoice();
});