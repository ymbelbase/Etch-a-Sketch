const sketch = document.querySelector('#sketch');
const erase = document.querySelector('#erase');
const rainbow = document.querySelector('#rainbow');
const clear = document.querySelector('#clear');
const glider = document.querySelector('#glider');
const sizeValue = document.querySelector('#sizeValue');
const leftBox = document.querySelector('.left.box');
const s = document.querySelector('#sizeValue');
const color = document.querySelector('.color');
let currentMode = 'sketch';

// Initialize the grid
updateSquareDiv(5);

function updateGlider() {
    currentRange = glider.value;
    sizeValue.textContent = `${currentRange} x ${currentRange}`;
    updateSquareDiv(currentRange);
}
 
// Range selection
let defaultRange = glider.value;
let currentRange = defaultRange;

// Color selection
let colorValue = color.value;
console.log(colorValue);

glider.addEventListener("input", updateGlider);
clear.addEventListener("click", setDefault);
color.addEventListener("input", updateColor)

// Mouseover event listener on leftBox
leftBox.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains('ok')) {
        if (currentMode === 'sketch') {
            event.target.style.backgroundColor = colorValue;
        } else if (currentMode === 'erase') {
            event.target.style.backgroundColor = "#ccc";
        } else if (currentMode === 'rainbow') {
            event.target.style.backgroundColor = getRandomColor();
        }
    }
});

sketch.addEventListener("click", () => {
    currentMode = 'sketch';
});

erase.addEventListener("click", () => {
    currentMode = 'erase';
});

rainbow.addEventListener("click", () => {
    currentMode = 'rainbow';
});

// Update the square pixels in sketch button
function updateSquareDiv(iteration) {
    if (iteration <= 0) {
        leftBox.innerHTML = '';
        return;
    }

    const itemSize = 500 / iteration;
    leftBox.innerHTML = '';
    for (let i = 0; i < iteration; i++) {
        for (let j = 0; j < iteration; j++) {
            const div = document.createElement('div');
            div.style.width = `${itemSize}px`;
            div.style.height = `${itemSize}px`;
            div.classList.add('ok');
            leftBox.appendChild(div);
        }
    }
}

function setDefault() {
    glider.value = defaultRange; // Reset glider value
    sizeValue.textContent = `${defaultRange} x ${defaultRange}`;
    updateSquareDiv(defaultRange);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateColor()
{
    colorValue = color.value;
    console.log(colorValue);
}