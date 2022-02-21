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
let goalPosition1 = 4;
let goalPosition2 = 5;

// * road variables to be refactored =================================================================================================================================================================================
let roadBottom1 = 79;
let roadBottom2 = 78;
let roadBottom3 = 77;
let roadBottom4 = 76;
let roadBottom5 = 75;
let roadBottom6 = 74;
let roadBottom7 = 73;
let roadBottom8 = 72;
let roadBottom9 = 71;
let roadBottom10 = 70;
let roadTop1 = 60;
let roadTop2 = 61;
let roadTop3 = 62;
let roadTop4 = 63;
let roadTop5 = 64;
let roadTop6 = 65;
let roadTop7 = 66;
let roadTop8 = 67;
let roadTop9 = 68;
let roadTop10 = 69;

// * water variables to be refactored ===========================================================================================================================================================================
let waterBottom1 = 39;
let waterBottom2 = 38;
let waterBottom3 = 37;
let waterBottom4 = 36;
let waterBottom5 = 35;
let waterBottom6 = 34;
let waterBottom7 = 33;
let waterBottom8 = 32;
let waterBottom9 = 31;
let waterBottom10 = 30;
let waterTop1 = 20;
let waterTop2 = 21;
let waterTop3 = 22;
let waterTop4 = 23;
let waterTop5 = 24;
let waterTop6 = 25;
let waterTop7 = 26;
let waterTop8 = 27;
let waterTop9 = 28;
let waterTop10 = 29;
// * GRID CREATION GOES HERE ====================================================================================================================================================================

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
// *  FUNCTIONS ===========================================================================================================================================================================
function addGoal() {
  cells[goalPosition1].classList.add('goal');
  cells[goalPosition2].classList.add('goal');
}

function addFrog() {
  cells[frogPosition].classList.add('frog'); //adds frog to grid
}

function removeFrog() {
  cells[frogPosition].classList.remove('frog'); //removes frog from grid
}
function placeCarsLeft() {
  for (let i = 0; i < carsLeft.length; i++) {
    cells[carsLeft[i]].classList.add('car-left');
  }
}

function placeCarsRight() {
  for (let i = 0; i < carsRight.length; i++) {
    cells[carsRight[i]].classList.add('car-right');
  }
}

function placeLogsLeft() {
  for (let i = 0; i < logsLeft.length; i++) {
    cells[logsLeft[i]].classList.add('logs-left');
  }
}

function placeLogsRight() {
  for (let i = 0; i < logsRight.length; i++) {
    cells[logsRight[i]].classList.add('logs-right');
  }
}

function moveCarLeft() {
  for (let i = 0; i < carsLeft.length; i++) {
    carsLeft[i]--;
  }
}

function moveCarRight() {
  for (let i = 0; i < carsRight.length; i++) {
    carsRight[i]++;
  }
}

function moveLogsLeft() {
  for (let i = 0; i < logsLeft.length; i++) {
    if (logsLeft[i] % 10 !== 0) logsLeft[i]--;
    else {
      logsLeft[i] += 9;
    }
  }
}

function moveLogsRight() {
  for (let i = 0; i < logsRight.length; i++) {
    logsRight[i]++;
  }
}

//moveLogsRight()
// moveLogsLeft();
// moveCarLeft();
// moveCarRight();
function move() {
  //setInterval()
  setInterval(() => {
    console.log(moveLogsLeft);
    moveLogsLeft();
  }, 1000);
}

move();
// FUNCTIONS THAT NEED TO BE REFACT ORED AT A LATER DATE
function addRoadBottom() {
  cells[roadBottom1].classList.add('road-bottom');
  cells[roadBottom2].classList.add('road-bottom');
  cells[roadBottom3].classList.add('road-bottom');
  cells[roadBottom4].classList.add('road-bottom');
  cells[roadBottom5].classList.add('road-bottom');
  cells[roadBottom6].classList.add('road-bottom');
  cells[roadBottom7].classList.add('road-bottom');
  cells[roadBottom8].classList.add('road-bottom');
  cells[roadBottom9].classList.add('road-bottom');
  cells[roadBottom10].classList.add('road-bottom');
}

function addRoadTop() {
  cells[roadTop1].classList.add('road-top');
  cells[roadTop2].classList.add('road-top');
  cells[roadTop3].classList.add('road-top');
  cells[roadTop4].classList.add('road-top');
  cells[roadTop5].classList.add('road-top');
  cells[roadTop6].classList.add('road-top');
  cells[roadTop7].classList.add('road-top');
  cells[roadTop8].classList.add('road-top');
  cells[roadTop9].classList.add('road-top');
  cells[roadTop10].classList.add('road-top');
}

function addWaterBottom() {
  cells[waterBottom1].classList.add('water-bottom');
  cells[waterBottom2].classList.add('water-bottom');
  cells[waterBottom3].classList.add('water-bottom');
  cells[waterBottom4].classList.add('water-bottom');
  cells[waterBottom5].classList.add('water-bottom');
  cells[waterBottom6].classList.add('water-bottom');
  cells[waterBottom7].classList.add('water-bottom');
  cells[waterBottom8].classList.add('water-bottom');
  cells[waterBottom9].classList.add('water-bottom');
  cells[waterBottom10].classList.add('water-bottom');
}
function addWaterTop() {
  cells[waterTop1].classList.add('water-top');
  cells[waterTop2].classList.add('water-top');
  cells[waterTop3].classList.add('water-top');
  cells[waterTop4].classList.add('water-top');
  cells[waterTop5].classList.add('water-top');
  cells[waterTop6].classList.add('water-top');
  cells[waterTop7].classList.add('water-top');
  cells[waterTop8].classList.add('water-top');
  cells[waterTop9].classList.add('water-top');
  cells[waterTop10].classList.add('water-top');
}

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
}

document.addEventListener('keyup', handleKeyUp);
