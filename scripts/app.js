// * DOM ELEMENTS GO HERE
const result = document.querySelector('#result');
const grid = document.querySelector('.grid');
const cells = [];
// let direction = 1;

// * GRID VARIABLES GO HERE ===============================================================================================================================================================
const width = 10;
const cellCount = width * width;

// * GAME VARIABLES GO HERE ===============================================================================================================================================================
let frogPosition = 94;
let goalPosition1 = 4;
let goalPosition2 = 5;

// car variables =================================================================================================================================================================================
let carLeftPosition1 = 78;
let carLeftPosition2 = 75;
let carLeftPosition3 = 72;
let carRightPosition1 = 62;
let carRightPosition2 = 65;
let carRightPosition3 = 68;
// const carsLeft = [72, 75, 78];
// const carsRight = [62, 65, 68];
// const lillipadsLeft = [31, 34, 37];
// const lillipadsRight = [21, 24, 27];

// road variables =================================================================================================================================================================================
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

// lillipad variables ========================================================================================================================================================================
let lillipadLeftPosition1 = 37;
let lillipadLeftPosition2 = 34;
let lillipadLeftPosition3 = 31;
let lillipadRightPosition1 = 21;
let lillipadRightPosition2 = 24;
let lillipadRightPosition3 = 27;

//water variables ===========================================================================================================================================================================
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
// *  FUNCTIONS ===========================================================================================================================================================================

function addCarsLeft() {
  // carsLeft[(72, 75, 78)].classList.add('car-left');
  cells[carLeftPosition1].classList.add('car-left');
  cells[carLeftPosition2].classList.add('car-left');
  cells[carLeftPosition3].classList.add('car-left');
}
function addCarsRight() {
  // carsRight[62,65,68].classList.add('car-right');
  cells[carRightPosition1].classList.add('car-right');
  cells[carRightPosition2].classList.add('car-right');
  cells[carRightPosition3].classList.add('car-right');
}

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
      console.log('INVALID KEY');
  }

  addFrog(frogPosition); // * adds frog back at the new position
}

document.addEventListener('keyup', handleKeyUp);
