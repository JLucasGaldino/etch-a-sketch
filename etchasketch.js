const canvas = document.querySelector('.canvas');
const buttonCreateGrid = document.querySelector('#button-create-grid');

function getRandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

function colorTransform() {
    let transformingSquare = false;
    //Each square, when hovered, is assigned a color transform = true value
    //Each square, when hovered, is assigned a color delta value = difference from black/10
    //Each time a new square is hovered, every square in the grid is added the delta value
}

function createGrid(gridSize) { 
    let squareSideSize = 100 / gridSize;
    if (canvas.hasChildNodes) {
        reset ();
    }
    for (i = 1; i <= gridSize ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.style.width = squareSideSize + '%';
        gridSquare.style.height = squareSideSize + '%';
        gridSquare.style.boxSizing = 'border-box';
        gridSquare.style.border = '1px black solid';
        gridSquare.style.flex = 'initial';
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = '#' + getRandomColor();
        });
        canvas.appendChild(gridSquare);
    }
}

function reset() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function selectGridSize() {
    let gridSizeChoice = prompt("Select a grid size between 1 - 100:");
    if (gridSizeChoice > 100) {
        alert("Grid size too big, please select a number between.");
    } else if (gridSizeChoice <= 0) {
        alert("Grid Grid size too small, please select a number between.")
    } else {
        createGrid(gridSizeChoice);
    }
}

createGrid(1);

buttonCreateGrid.addEventListener('click', selectGridSize);

