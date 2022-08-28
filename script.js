// Function that creates a 16x16 grid
function createGrid() {
    const GRID_SIZE = 16;
    let container = document.querySelector(".grid-container");

    // TODO - better understand how these properties work
    container.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${GRID_SIZE}, 1fr)`;

    // Create the grid, give them a class, and add event listeners
    for (var row = 0; row < GRID_SIZE; row++) {
        for (var col = 0; col < GRID_SIZE; col++) {
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

createGrid();