const sketch = document.querySelector('#sketch');
const erase = document.querySelector('#erase');
const rainbow = document.querySelector('#rainbow');
const clear = document.querySelector('#clear');
const glider = document.querySelector('#glider');
const sizeValue = document.querySelector('#sizeValue');
const leftBox = document.querySelector('.left.box');
const s = document.querySelector('#sizeValue');
let currentMode = 'sketch';


updateSquareDiv(5);
function updateGlider(){
    currentRange = glider.value;
    sizeValue.textContent = `${currentRange} x ${currentRange}`;
    console.log(currentRange);
    
    updateSquareDiv(currentRange);
    console.log(`Updating grid with ${currentRange}`);
}

//range selection
let defaultRange = glider.value;
console.log(defaultRange);//////////////////////////////
let currentRange = defaultRange;

glider.addEventListener("input",updateGlider);
clear.addEventListener("click", setDefault);

sketch.addEventListener("click", () => {
    // Add event listener to leftBox for sketching
    currentMode = 'sketch';
    leftBox.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains('ok')) {
            event.target.style.backgroundColor = "black";
        }
    });
});
erase.addEventListener("click",(event)=>{
    currentMode = 'erase';
    leftBox.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains('ok')) {
            event.target.style.backgroundColor = "#ccc";
        }
    });
})


//update the square pixels in sketch button
function updateSquareDiv(iteration){
    if(iteration <= 0){
        leftBox.innerHTML = '';
    return;
    }

        const itemSize = 500/iteration;
        leftBox.innerHTML ='';
        for (let i = 0; i < iteration; i++) {
            // Inner loop for columns
            for (let j = 0; j < iteration; j++) {
                const div = document.createElement('div');
                div.style.width = `${itemSize}px`;  // Set width
                div.style.height = `${itemSize}px`; // Set height
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


