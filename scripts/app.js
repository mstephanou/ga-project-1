// * DOM ELEMENTS GO HERE ======================================================================================================================================================================
const grid = document.querySelector('.grid');
let hasGameStarted = false;
const cells = [];
const startButton = document.querySelector('#start-button');
const resetButton = document.querySelector('#reset');
const gameResult = document.querySelector('#result');
const timer = document.querySelector('#timer');
let myAudio = document.querySelector('#audio');
let ribbit = document.querySelector('#audio2');
let winAudio = document.querySelector('#win');
let loseAudio = document.querySelector('#lose');
// * GRID VARIABLES  ===============================================================================================================================================================
const width = 10;
const cellCount = width * width;


// * GAME VARIABLES  ===============================================================================================================================================================
let frogPosition = 94;
let intervalID;
let time = parseInt(timer.innerText);

// * CREATE A GRID USING A FOR LOOP AND FOR EACH NEW ITERATION CREATE A NEW DIV ELEMENT THAT IS TO BE ADDED ONTO THE GRID ==========================================================================================================================================================================

for (let i = 0; i < cellCount; i++) {
  const cell = document.createElement('div');
  //cell.textContent = i;
  grid.appendChild(cell);
  cells.push(cell);
}
// * ARRAYS  ==================================================================================================================================================================================
const carsLeft = [72, 75, 78];
const carsLeft2 = [52, 55, 58];
const carsRight = [62, 65, 68];
const carsRight2 = [82, 85, 88];
const logsLeft = [30, 31, 33, 34, 36, 37];
const logsRight = [21, 22, 24, 25, 27, 28];
const finishLine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const roadTop = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
const roadBottom = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
const roadTop2 = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
const roadBottom2 = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89];
const waterTop = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
const waterBottom = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

// *  FUNCTIONS =======================================================================================================================================================================================
function addGoal() {
  for (let i = 0; i < finishLine.length; i++) {
    cells[finishLine[i]].classList.add('goal');
  }
}

//* ADDS FROG TO GRID
function addFrog() {
  cells[frogPosition].classList.add('frog'); //adds frog to grid
}
//* REMOVES FROG FROM GRID
function removeFrog() {
  cells[frogPosition].classList.remove('frog'); //removes frog from grid
}

//* ADDS CARS TO TRAVEL LEFT ON GRID
function placeCarsLeft() {
  for (let i = 0; i < carsLeft.length; i++) {
    cells[carsLeft[i]].classList.add('car-left');
  }
}
function placeCarsLeft2() {
  for (let i = 0; i < carsLeft2.length; i++) {
    cells[carsLeft2[i]].classList.add('car-left2');
  }
}
//* REMOVES CARS TO TRAVEL LEFT ON GRID
function removeCarsLeft() {
  for (let i = 0; i < carsLeft.length; i++) {
    cells[carsLeft[i]].classList.remove('car-left');
  }
}
function removeCarsLeft2() {
  for (let i = 0; i < carsLeft2.length; i++) {
    cells[carsLeft2[i]].classList.remove('car-left2');
  }
}
//* ADDS CARS TO TRAVEL RIGHT ON GRID
function placeCarsRight() {
  for (let i = 0; i < carsRight.length; i++) {
    cells[carsRight[i]].classList.add('car-right');
  }
}
function placeCarsRight2() {
  for (let i = 0; i < carsRight2.length; i++) {
    cells[carsRight2[i]].classList.add('car-right2');
  }
}
//* REMOVES CARS TO TRAVEL RIGHT ON GRID
function removeCarsRight() {
  for (let i = 0; i < carsRight.length; i++) {
    cells[carsRight[i]].classList.remove('car-right');
  }
}
function removeCarsRight2() {
  for (let i = 0; i < carsRight2.length; i++) {
    cells[carsRight2[i]].classList.remove('car-right2');
  }
}
//* ADDS LOGS TO TRAVEL LEFT ON GRID
function placeLogsLeft() {
  for (let i = 0; i < logsLeft.length; i++) {
    cells[logsLeft[i]].classList.add('logs-left');
  }
}
//* REMOVES LOGS TO TRAVEL LEFT ON GRID
function removeLogsLeft() {
  for (let i = 0; i < logsLeft.length; i++) {
    cells[logsLeft[i]].classList.remove('logs-left');
  }
}
//* ADDS LOGS TO TRAVEL RIGHT ON GRID
function placeLogsRight() {
  for (let i = 0; i < logsRight.length; i++) {
    cells[logsRight[i]].classList.add('logs-right');
  }
}
//* REMOVES LOGS TO TRAVEL RIGHT ON GRID
function removeLogsRight() {
  for (let i = 0; i < logsRight.length; i++) {
    cells[logsRight[i]].classList.remove('logs-right');
  }
}

//* MOVES CARS TO THE LEFT ONE SPACE
function moveCarsLeft() {
  removeCarsLeft(); //removes car from grid
  for (let i = 0; i < carsLeft.length; i++) {
    if (carsLeft[i] % 10 !== 0) carsLeft[i]--;
    else {
      carsLeft[i] += 9;
    }
  }
  placeCarsLeft(); //places car in new location
}
function moveCarsLeft2() {
  removeCarsLeft2(); //removes car from grid
  for (let i = 0; i < carsLeft2.length; i++) {
    if (carsLeft2[i] % 10 !== 0) carsLeft2[i]--;
    else {
      carsLeft2[i] += 9;
    }
  }
  placeCarsLeft2(); //places car in new location
}
//* MOVES CARS TO THE RIGHT ONE SPACE
function moveCarsRight() {
  removeCarsRight(); //removes car from grid
  for (let i = 0; i < carsRight.length; i++) {
    if (carsRight[i] % 10 !== 9) carsRight[i]++;
    else {
      carsRight[i] -= 9;
    }
  }
  placeCarsRight(); // places car in new location
}
function moveCarsRight2() {
  removeCarsRight2(); //removes car from grid
  for (let i = 0; i < carsRight2.length; i++) {
    if (carsRight2[i] % 10 !== 9) carsRight2[i]++;
    else {
      carsRight2[i] -= 9;
    }
  }
  placeCarsRight2(); // places car in new location
}
//* MOVES LOGS TO THE LEFT ONE SPACE
function moveLogsLeft() {
  removeLogsLeft(); // removes log from grid
  for (let i = 0; i < logsLeft.length; i++) {
    if (logsLeft[i] % 10 !== 0) logsLeft[i]--;
    else {
      logsLeft[i] += 9;
    }
  }
  placeLogsLeft(); // places log in new location
}
//* MOVES LOGS TO THE RIGHT ONE SPACE
function moveLogsRight() {
  removeLogsRight(); //removes log from grid
  for (let i = 0; i < logsRight.length; i++) {
    if (logsRight[i] % 10 !== 9) logsRight[i]++;
    else {
      logsRight[i] -= 9;
    }
  }
  placeLogsRight(); //places log in new location
}

//* PLACE ITEMS ON THE GRID
function addRoadBottom() {
  for (let i = 0; i < roadBottom.length; i++) {
    cells[roadBottom[i]].classList.add('road-bottom');
  }
}
function addRoadBottom2() {
  for (let i = 0; i < roadBottom.length; i++) {
    cells[roadBottom2[i]].classList.add('road-bottom');
  }
}

function addRoadTop() {
  for (let i = 0; i < roadTop.length; i++) {
    cells[roadTop[i]].classList.add('road-top');
  }
}
function addRoadTop2() {
  for (let i = 0; i < roadTop2.length; i++) {
    cells[roadTop2[i]].classList.add('road-top');
  }
}

function addWaterBottom() {
  for (let i = 0; i < waterBottom.length; i++) {
    cells[waterBottom[i]].classList.add('water-bottom');
  }
}
function addWaterTop() {
  for (let i = 0; i < waterTop.length; i++) {
    cells[waterTop[i]].classList.add('water-top');
  }
}

//* WIN/LOSE CONDITIONS ========================================================================================================================================================================================================================================================================================================================================
function win() {
  if (cells[frogPosition].classList.contains('goal')) {
    gameResult.innerHTML = 'YOU WIN!';
    cells[frogPosition].classList.remove('frog');
    clearInterval(intervalID);
    document.removeEventListener('keyup', handleKeyUp);
    myAudio.pause();
    winAudio.play();
  }
}
// If frog position is equal to any of these cells, or if timer hits zero,
// player must reset game to play
function lose() {
  if (
    cells[frogPosition].classList.contains('car-left') ||
    cells[frogPosition].classList.contains('car-left2') ||
    cells[frogPosition].classList.contains('car-right2') ||
    cells[frogPosition].classList.contains('car-right') ||
    (!cells[frogPosition].classList.contains('logs-right') &&
      cells[frogPosition].classList.contains('water-top')) ||
    (!cells[frogPosition].classList.contains('logs-left') &&
      cells[frogPosition].classList.contains('water-bottom')) ||
    time <= 0
  ) {
    gameResult.innerHTML = 'YOU LOSE!';
    cells[frogPosition].classList.remove('frog');
    clearInterval(intervalID);
    document.removeEventListener('keyup', handleKeyUp);
    frogPosition = 94;
    resetButton;
    myAudio.pause();
    loseAudio.play();
  }
}
//* FUNCTION THAT HANDLES COUNTDOWN TIMER ==========================================================================================================================================================================================================================================================
function startTimer() {
  if (time <= 0) {
    return;
  }
  time--;
  timer.innerText = time;
}
// * START & RESET GAME FUNCTIONS ===========================================================================================================================================================================================================================================================

function startGame() {
  if (hasGameStarted) {
    moveLogsLeft();
    moveLogsRight();
    moveCarsRight();
    moveCarsRight2();
    moveCarsLeft();
    moveCarsLeft2();
    startTimer();
    win();
    lose();
  }
}
function resetGame() {
  window.location.reload();
}

//* FUNCTION THAT WILL MOVE THE FROG AND ALSO CHECK WIN/LOSE CONDITION ON EACH NEW KEY PRESS ============================================================================================================================================================================================================================================
function handleKeyUp(event) {
  removeFrog(frogPosition); // * removes frog from current position

  const x = frogPosition % width;
  const y = Math.floor(frogPosition / width);

  switch (event.keyCode) {
    case 39:
      if (x < width - 1) frogPosition++;
      win();
      lose();
      break;
    case 37:
      if (x > 0) frogPosition--;
      win();
      lose();
      break;
    case 38:
      if (y > 0) frogPosition -= width;
      win();
      lose();
      break;
    case 40:
      if (y < width - 1) frogPosition += width;
      win();
      lose();
      break;
    default:
      console.log('INVALID KEY');
  }
  addFrog(frogPosition); // * adds frog back at the new position
}

//* EVENT LISTENER FOR handleKeyUp FUNCTION
document.addEventListener('keyup', handleKeyUp);

//* EVENT LISTENERS THAT WILL HANDLE START GAME BUTTON AND RESET GAME FUNCTION ================================================================================================================
startButton.addEventListener('click', () => {
  startButton.remove();
  hasGameStarted = true;
  intervalID = setInterval(startGame, 1000);
});

resetButton.addEventListener('click', () => {
  resetGame();
});

//* PLAY THE AUDIO WHENEVER THE PLAYER CLICKS THE MOUSE BUTTON ====================================================================================================================================
document.addEventListener('click', () => {
  myAudio.play();
  ribbit.play();
});

window.addEventListener(
  'keydown',
  function (e) {
    if (
      ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  },
  false
);

//* FUNCTION THAT HANDLES CALLBACKS FOR ALL NON-MOVING GRID ITEMS
function placeGridItems() {
  placeCarsRight();
  placeCarsRight2();
  placeCarsLeft();
  placeCarsLeft2();
  addFrog();
  placeLogsLeft();
  placeLogsRight();
  addWaterBottom();
  addWaterTop();
  addRoadBottom();
  addRoadBottom2();
  addRoadTop();
  addRoadTop2();
  addGoal();
}
placeGridItems();
