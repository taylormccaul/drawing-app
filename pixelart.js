let body = document.getElementById('body');
let grid = document.querySelector('#grid-container')

let canvasSize = prompt("Choose your canvas size (1-64): ");

grid.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${canvasSize}, 1fr)`;

let pxColor = document.getElementById('color-input');
let disco = document.getElementById('disco');
let rainbow = document.getElementById('rainbow');
let borderOn = document.getElementById('border-on');
let borderOff = document.getElementById('border-off');
let clear = document.getElementById('clear');
let gridDivs = document.querySelector('#grid-container > div');

let hue = 0;
let min = 0;
let max = 360;

    for (let i = 0; i < canvasSize; i++) {
        for (let j = 0; j < canvasSize; j++) {
let newDiv = document.createElement('div');
newDiv.classList.add('grid-divs');
grid.appendChild(newDiv);

newDiv.addEventListener('mouseover', () => {
    newDiv.style.backgroundColor = pxColor.value;
});

pxColor.addEventListener('click', () => {
    newDiv.removeEventListener('mouseover', rainbow);
    newDiv.removeEventListener('mouseover', disco);
});

rainbow.addEventListener('click', () => {
    hue = 0;
    newDiv.removeEventListener('mouseover', disco);
    newDiv.addEventListener('mouseover', function rainbow() {
        newDiv.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        hue++;
    });
});

disco.addEventListener('click', () => {
    newDiv.removeEventListener('mouseover', rainbow);
    newDiv.addEventListener('mouseover', function disco() {
        let random = Math.floor(Math.random() * max - min) + min;
        newDiv.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        hue = random;
    });
});

borderOn.addEventListener('click', () => {
    newDiv.style.border = '1px solid black';
});

borderOff.addEventListener('click', () => {
    newDiv.style.border = 'none';
})

clear.addEventListener('click', () => {
    if (newDiv.style.border === '1px solid black') {
        newDiv.style.backgroundColor = 'white';
    } else {
        newDiv.style.backgroundColor = 'rgb(242, 242, 242)';
    }
});
        }
    }
