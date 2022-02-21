// * DOM ELEMENTS GO HERE ======================================================================================================================================================================
const button = document.querySelector('#button');
const result = document.querySelector('#result');
const grid = document.querySelector('.grid');

//const gridBoxes = Array.from(document.querySelectorAll('.grid div'));
const cells = [];
// let direction = 1;

// * GRID VARIABLES GO HERE ===============================================================================================================================================================
const width = 10;
const cellCount = width * width;

// * GAME VARIABLES GO HERE ===============================================================================================================================================================
let frogPosition = 94;

// * GRID CREATION GOES HERE ==========================================================================================================================================================================

for (let i = 0; i < cellCount; i++) {
  const cell = document.createElement('div');
  cell.textContent = i;
  grid.appendChild(cell);
  cells.push(cell);
}
// * ARRAYS GO HERE ==================================================================================================================================================================================
const carsLeft = [72, 75, 78];
const carsRight = [62, 65, 68];
const logsLeft = [30, 31, 33, 34, 36, 37];
const logsRight = [21, 22, 24, 25, 27, 28];
const finishLine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const roadTop = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
const roadBottom = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
const waterTop = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
const waterBottom = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

// *  FUNCTIONS =======================================================================================================================================================================================
function addGoal() {
  // cells[goalPosition1].classList.add('goal');
  // cells[goalPosition2].classList.add('goal');
  for (let i = 0; i < finishLine.length; i++) {
    cells[finishLine[i]].classList.add('goal');
  }
}

// ADDS FROG TO GRID
function addFrog() {
  cells[frogPosition].classList.add('frog'); //adds frog to grid
}
// REMOVES FROG FROM GRID
function removeFrog() {
  cells[frogPosition].classList.remove('frog'); //removes frog from grid
}

//* ADDS CARS TO TRAVEL LEFT ON GRID
function placeCarsLeft() {
  for (let i = 0; i < carsLeft.length; i++) {
    cells[carsLeft[i]].classList.add('car-left');
  }
}
//* REMOVES CARS TO TRAVEL LEFT ON GRID
function removeCarsLeft() {
  for (let i = 0; i < carsLeft.length; i++) {
    cells[carsLeft[i]].classList.remove('car-left');
  }
}
//* ADDS CARS TO TRAVEL RIGHT ON GRID
function placeCarsRight() {
  for (let i = 0; i < carsRight.length; i++) {
    cells[carsRight[i]].classList.add('car-right');
  }
}
//* REMOVES CARS TO TRAVEL RIGHT ON GRID
function removeCarsRight() {
  for (let i = 0; i < carsRight.length; i++) {
    cells[carsRight[i]].classList.remove('car-right');
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
  placeCarsLeft(); //places car in desired loaction
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
  placeCarsRight(); // places car in desired location
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
  placeLogsLeft(); // places log in desired location
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
  placeLogsRight(); //places log in desired location
}
function addRoadBottom() {
  for (let i = 0; i < roadBottom.length; i++) {
    cells[roadBottom[i]].classList.add('road-bottom');
  }
}

function addRoadTop() {
  for (let i = 0; i < roadTop.length; i++) {
    cells[roadTop[i]].classList.add('road-top');
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

//* WIN AND LOSE FUNCTIONS
// function win() {
//   if (cells[finishLine[i].classList.contains('frog')) {
//     result.innerHTML = 'YOU WIN!';
//     cells[finishLine[i].classList.remove('frog');
//   }
// }

//* LOOP TO MOVE CARS AND LOGS AUTOMATICALLY
setInterval(() => {
  moveLogsLeft();
  moveLogsRight();
  moveCarsRight();
  moveCarsLeft();
}, 1000);

//* FUNCTION THAT WILL MOVE THE PLAYER ================================================================================================================================================================================================
function handleKeyUp(event) {
  removeFrog(frogPosition); // * removes frog from current position

  const x = frogPosition % width;
  const y = Math.floor(frogPosition / width);

  switch (event.keyCode) {
    case 39:
      if (x < width - 1) frogPosition++;
      break;
    case 37:
      if (x > 0) frogPosition--;
      break;
    case 38:
      if (y > 0) frogPosition -= width;
      break;
    case 40:
      if (y < width - 1) frogPosition += width;
      break;
    default:
      console.log('INVALID KEY');
  }

  addFrog(frogPosition); // * adds frog back at the new position
  //win();
}
// CALLBACK FUNCTIONS TO THE GRID
placeCarsRight();
placeCarsLeft();
addFrog();
placeLogsLeft();
placeLogsRight();
addWaterBottom();
addWaterTop();
addRoadBottom();
addRoadTop();
addGoal();

// EVENT LISTENERS
document.addEventListener('keyup', handleKeyUp);
