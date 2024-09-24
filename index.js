let container = document.querySelector("#container");
let gridSize = 16; // Default grid size (16x16)

// Create the initial grid
createGrid(gridSize);

// Function to create a grid based on the number of squares per side
function createGrid(size) {
    // Clear any existing grid
    container.innerHTML = '';
    
    // Set the dimensions for the container to ensure it remains 960px wide
    container.style.width = '960px';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';

    // Set the size for each square div dynamically
    const squareSize = 960 / size;

    // Create the divs for the grid
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.style.border = '1px solid #ccc'; // Light border to visualize the grid

        // Add hover effect to change background color
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = randomRGB();
        });

        container.appendChild(div);
    }
}

// Function to generate a random RGB color
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Button click event to prompt the user for a new grid size
document.getElementById('new-grid-btn').addEventListener('click', () => {
    let userSize = prompt("Enter the number of squares per side (max 100):");
    if (userSize !== null && userSize > 0 && userSize <= 100) {
        gridSize = userSize;
        createGrid(gridSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});
