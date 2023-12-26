const canvas = document.querySelector('.canvas');

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
        /*gridSquare.addEventListener('hover', () => {
            gridSquare.style.backgroundColor = 'black';
        });*/
        canvas.appendChild(gridSquare);
    }
}

function reset() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

createGrid(1);