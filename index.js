const body = document.body;
body.setAttribute('style', 'display: flex; flex-direction: column; gap: 20px');

const frameButton = document.createElement('button');
const sketchContainer = document.createElement('div');

frameButton.textContent = 'resize';
frameButton.setAttribute('style', 'width: 60px; height: 20px')
frameButton.addEventListener('click', handleResize);
body.appendChild(frameButton);

function createSketchContainer () {
    while(sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild)
    }
    sketchContainer.classList.toggle('container')
    sketchContainer.setAttribute('style', 'display: flex; flex-direction: column; width: 960px; height: max-content; border: 1px solid #808080' );
    body.appendChild(sketchContainer);
}

function handleHover () {
 this.style.background = 'rgb(219, 148, 178)'
}
function handleResize () {
    const value = prompt('Enter row and column include space (example: 10 12)');
    const [row, column] = value.split(' ');
    createSketchPad(Number(row), Number(column))
}
function createSketchPad (rowValue = 16, columnValue = 16) {
    createSketchContainer()
    for(let i=0; i < rowValue; i++){
        debugger
        const row = document.createElement('div');
        const width = 960 / rowValue;
        const height = 960 / columnValue;
        row.setAttribute('style', 'display: flex; width: inherit; height: max-content')
        for(let j=0; j < columnValue; j++){
            const grid = document.createElement('div')
            grid.classList.toggle('gridItem')
            grid.setAttribute('style', `height: ${height}px; width: ${width}px`);
            grid.addEventListener('mouseover', handleHover, { once: true })
            row.appendChild(grid)
        }
        sketchContainer.appendChild(row)
    }
}
createSketchPad();

