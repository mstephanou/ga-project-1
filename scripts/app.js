// * DOM ELEMENTS GO HERE
const result = document.querySelector('#result');
const grid = document.querySelector('.grid');
const cells = [];

// * GRID VARIABLES GO HERE
const width = 10;
const cellCount = width * width;

// * GAME VARIABLES GO HERE
let frogPosition = 94;

let goalPosition = 4;

// *  FUNCTIONS

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
}

createGrid();

function handleKeyUp(event) {
  removeFrog(frogPosition); // * removes frog from current position

  const x = frogPosition % width;
  const y = Math.floor(frogPosition / width);

  switch (event.keycode) {
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
