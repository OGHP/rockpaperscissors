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
    } else if (computerChoice === 'paper') {
      winner = 'Computer';
    } else {
      winner = 'No';
    }
  } else if(playerChoice === 'paper'){
    if(computerChoice === 'rock') {
      winner = 'Player';
    } else if (computerChoice === 'scissors') {
      winner = 'Computer';
    } else {
      winner = 'No';
    }
  } else if(playerChoice === 'scissors') {
    if(computerChoice === 'paper') {
      winner = 'Player';
    } else if(computerChoice === 'rock') {
      winner = 'Computer';
    } else {
      winner = 'No';
    }
  }
  displayWinner();
}

// var compare = function() {}


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