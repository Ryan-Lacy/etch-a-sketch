const DEFAULT_GRID_SIZE = 16;

// Function that creates a square grid
function createGrid(newGridSize) {
    // If size not passed, fall to system default size
    if (typeof newGridSize == 'undefined') {
        newGridSize = GRID_SIZE;
    }
    let container = document.querySelector(".grid-container");

    // TODO - better understand how these properties work
    container.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${newGridSize}, 1fr)`;

    // Create the grid, give them a class, and add event listeners
    for (var row = 0; row < newGridSize; row++) {
        for (var col = 0; col < newGridSize; col++) {
            var cell = document.createElement("div");
            cell.classList.add("square");
            container.appendChild(cell);
            cell.addEventListener("mouseover", changeColor);
        }
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = "black";
}

let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click",resetGrid);

// Prompts the user for a new grid size, then creates it
function resetGrid() {
    let userInput = prompt("Enter a new grid size (<=100): ", "16");
    let newGridSize = parseInt(userInput);

    if (isNaN(newGridSize) || newGridSize >100 || newGridSize < 1) {
        window.alert(`Value must be a number between 1 and 100 (you entered ${userInput}). Please try again.`);
        return;
    }

    clearGrid();
    createGrid(newGridSize);
}

// This function removes the currently existing grid
function clearGrid() {
    let squares = document.querySelectorAll(".square");

    for (let square of squares) {
        square.remove();
    }
}

createGrid(DEFAULT_GRID_SIZE);