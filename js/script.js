var computerMove;
computerMove = "kamień";
printMessage(
  "Zagrałem " + computerMove + "! Jeśli Twój ruch to papier, to wygrywasz!"
);

var computerMove;
computerMove = "papier";
printMessage(
  "Zagrałem " + computerMove + "! Jeśli Twój ruch to papier, to jest remis!"
);

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("wylosowana liczba to: " + randomNumber);
if (randomNumber == "1") {
  computerMove = "kamień";
} else {
  computerMove = "nieznany ruch";
}
printMessage("Mój ruch: " + computerMove);

if (randomNumber == "2") {
  computerMove = "papier";
} else {
  computerMove = "nieznany ruch";
}
printMessage("Mój ruch: " + computerMove);

if (randomNumber == "3") {
  computerMove = "nożyce";
} else {
  computerMove = "nieznany ruch";
}
printMessage("Mój ruch: " + computerMove);

var playerMove, playerInput;
playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("Wpisana odpowiedź to: " + playerInput);
if (playerInput == "1") {
  playerMove = "kamień";
} else {
  playerMove = "nieznany ruch";
}
printMessage("Twój ruch: " + playerMove);

var playerMove, playerInput;
playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("Wpisana odpowiedź to: " + playerInput);
if (playerInput == "2") {
  playerMove = "kamień";
} else {
  playerMove = "nieznany ruch";
}
printMessage("Twój ruch: " + playerMove);

var playerMove, playerInput;
playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("Wpisana odpowiedź to: " + playerInput);
if (playerInput == "3") {
  playerMove = "kamień";
} else {
  playerMove = "nieznany ruch";
}
printMessage("Twój ruch: " + playerMove);

function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 2) {
    return 'papier';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "papier".');
    return 'papier';
  }
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "nożyce".');
    return 'nożyce';
  }
}
/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
  printMessage('Wygrywasz!');
} else {
  printMessage('Przegrywasz :(');
}
printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);

if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
  printMessage('Wygrywasz!');
} else {
  printMessage('Przegrywasz :(');
}
printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);


if (argPlayerMove == argComputerMove) {
  printMessage('Remis!');
} else {
  printMessage('Remis');
}
printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);


playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

var argButtonName, buttonTest;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
buttonTest = document.getElementById('button-rock');
buttonTest.addEventListener('click', function(){ buttonClicked('kamień'); });

function buttonClicked(argButtonName) 
buttonTest = document.getElementById('button-paper');
buttonTest.addEventListener('click', function(){ buttonClicked('papier'); });

function buttonClicked(argButtonName) 
buttonTest = document.getElementById('button-scissors');
buttonTest.addEventListener('click', function(){ buttonClicked('nożyce'); });