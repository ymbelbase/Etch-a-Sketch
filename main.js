const sketch = document.querySelector('#sketch');
const erase = document.querySelector('#erase');
const rainbow = document.querySelector('#rainbow');
const clear = document.querySelector('#clear');
const glider = document.querySelector('#glider');
const sizeValue = document.querySelector('#sizeValue');



function updateGlider(){
    currentRange = glider.value;
    sizeValue.textContent = `${currentRange} x ${currentRange}`;
    console.log(currentRange);
}
//range selection
let defaultRange = glider.value;
console.log(defaultRange);//////////////////////////////
let currentRange = defaultRange;

glider.addEventListener("input",updateGlider);
console.log(currentRange);