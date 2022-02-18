// * DOM ELEMENTS GO HERE
const result = document.querySelector('#result');
const grid = document.querySelector('.grid');
const cells = [];

// * GRID VARIABLES GO HERE ===============================================================================================================================================================
const width = 10;
const cellCount = width * width;

// * GAME VARIABLES GO HERE ===============================================================================================================================================================
let frogPosition = 94;
let goalPosition = 4;
//car variables
let carLeftPosition1 = 78;
let carLeftPosition2 = 75;
let carLeftPosition3 = 72;
let carRightPosition1 = 61;
let carRightPosition2 = 64;
let carRightPosition3 = 67;
// road variables
let roadBottom1 = 79;
let roadBottom2 = 77;
let roadBottom3 = 76;
let roadBottom4 = 74;
let roadBottom5 = 73;
let roadBottom6 = 71;
let roadBottom7 = 70;
let roadTop1 = 60;
let roadTop2 = 62;
let roadTop3 = 63;
let roadTop4 = 65;
let roadTop5 = 66;
let roadTop6 = 68;
let roadTop7 = 69;

// lillipad variables
let lillipadLeftPosition1 = 38;
let lillipadLeftPosition2 = 35;
let lillipadLeftPosition3 = 32;
let lillipadRightPosition1 = 21;
let lillipadRightPosition2 = 24;
let lillipadRightPosition3 = 27;

//water variables
let waterBottom1 = 39;
let waterBottom2 = 37;
let waterBottom3 = 36;
let waterBottom4 = 34;
let waterBottom5 = 33;
let waterBottom6 = 31;
let waterBottom7 = 30;
let waterTop1 = 20;
let waterTop2 = 22;
let waterTop3 = 23;
let waterTop4 = 25;
let waterTop5 = 26;
let waterTop6 = 28;
let waterTop7 = 29;
// *  FUNCTIONS ===========================================================================================================================================================================

function addCarsLeft() {
  cells[carLeftPosition1].classList.add('car-left');
  cells[carLeftPosition2].classList.add('car-left');
  cells[carLeftPosition3].classList.add('car-left');
}
function addCarsRight() {
  cells[carRightPosition1].classList.add('car-right');
  cells[carRightPosition2].classList.add('car-right');
  cells[carRightPosition3].classList.add('car-right');
}

function addRoadBottom() {
  cells[roadBottom1].classList.add('road');
  cells[roadBottom2].classList.add('road');
  cells[roadBottom3].classList.add('road');
  cells[roadBottom4].classList.add('road');
  cells[roadBottom5].classList.add('road');
  cells[roadBottom6].classList.add('road');
  cells[roadBottom7].classList.add('road');
}

function addRoadTop() {
  cells[roadTop1].classList.add('road');
  cells[roadTop2].classList.add('road');
  cells[roadTop3].classList.add('road');
  cells[roadTop4].classList.add('road');
  cells[roadTop5].classList.add('road');
  cells[roadTop6].classList.add('road');
  cells[roadTop7].classList.add('road');
}

function addLillipadLeft() {
  cells[lillipadLeftPosition1].classList.add('lillipad-left');
  cells[lillipadLeftPosition2].classList.add('lillipad-left');
  cells[lillipadLeftPosition3].classList.add('lillipad-left');
}
function addLillipadRight() {
  cells[lillipadRightPosition1].classList.add('lillipad-right');
  cells[lillipadRightPosition2].classList.add('lillipad-right');
  cells[lillipadRightPosition3].classList.add('lillipad-right');
}

function addWaterBottom() {
  cells[waterBottom1].classList.add('water');
  cells[waterBottom2].classList.add('water');
  cells[waterBottom3].classList.add('water');
  cells[waterBottom4].classList.add('water');
  cells[waterBottom5].classList.add('water');
  cells[waterBottom6].classList.add('water');
  cells[waterBottom7].classList.add('water');
}
function addWaterTop() {
  cells[waterTop1].classList.add('water');
  cells[waterTop2].classList.add('water');
  cells[waterTop3].classList.add('water');
  cells[waterTop4].classList.add('water');
  cells[waterTop5].classList.add('water');
  cells[waterTop6].classList.add('water');
  cells[waterTop7].classList.add('water');
}

function addGoal() {
  cells[goalPosition].classList.add('goal');
}

function addFrog() {
  cells[frogPosition].classList.add('frog'); //adds frog to grid
}

function removeFrog() {
  cells[frogPosition].classList.remove('frog'); //removes frog from grid
}

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div');
    cell.textContent = i;
    grid.appendChild(cell);
    cells.push(cell);
  }
  addFrog();
  addGoal();
  addCarsLeft();
  addCarsRight();
  addRoadBottom();
  addRoadTop();
  addLillipadLeft();
  addLillipadRight();
  addWaterBottom();
  addWaterTop();
}

createGrid();

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
      console.log('INVALID KEY DO NOTHING');
  }

  addFrog(frogPosition); // * adds frog back at the new position
}
document.addEventListener('keyup', handleKeyUp);
