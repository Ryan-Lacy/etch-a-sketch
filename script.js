// Creates a 16x16 grid
    const GRID_SIZE = 16;
    var container = document.querySelector(".grid-container");
    container.style.setProperty("--grid-rows", GRID_SIZE);
    container.style.setProperty("--grid-cols", GRID_SIZE);
    for (var row = 0; row < (GRID_SIZE*GRID_SIZE); row++) {
        for (var col = 0; col < GRID_SIZE; col++) {
            var cell = document.createElement("div");
            cell.classList.add("square");
            container.appendChild(cell);
        }
    }