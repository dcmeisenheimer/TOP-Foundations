const container = document.querySelector('container');
const grid = document.getElementById('grid');
const defaultSize = 16;

//Makes rows and columns for the grid
function makeRows(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);

    for(let i = 0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        grid.appendChild(cell);
    }
}


//Add Color function for button to call
function addColor() {
    //Gets all the grid item squares
    let squares= document.querySelectorAll('.grid-item');
    //loops through every grid item if hovered changes color.
    squares.forEach(item => item.addEventListener('mouseover', (e) => {
        changeColor(item);
    }))
}

//Rainbow color function for rainbow mode button
function rainbowColor() {
    let rainbow = document.querySelectorAll('.grid-item');

    rainbow.forEach(item => item.addEventListener('mouseover', (e) => {
        let rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        item.style.background = rndColor;
    }))
}

//random color generator
function random(number) {
    return Math.floor(Math.random() * (number+1));
}

//changes the color depending on event listener color type
const changeColor = (item) => {
  item.style.background = color.value;
}

//variable for color typr
let color = document.getElementById("colorWell");

//event listener to make color the color the user choice
color.addEventListener("input", function(){
  this.color = color.value;
  
  // Do something with `theColor` here.
}, false);


//removes color with eraser button
function removeColor() {
    let eraser = document.querySelectorAll('.grid-item');
    eraser.forEach(item => item.addEventListener('mouseover', (e) =>{
        item.style.background = 'transparent';
    }))
}

//Clears all the colors in the grid
function clearGrid() {
    let gridBox = document.querySelectorAll('.grid-item');
    gridBox.forEach(gridBox => {gridBox.style.backgroundColor =null});
}


//Slider Variables to store info
const input = document.querySelector('input[type="range"');
const outputs = document.querySelectorAll("output");
let slider = document.getElementById("gridSize");

//Event listener to change text value for gridsize
input.addEventListener("input", () => {
    for (let output of outputs) {
      output.innerText = input.value;
    }
})

//modifies grid slide function depending on slider value.
function modifyGridSize() {
    let boxes = grid.querySelectorAll(".grid-item");
    boxes.forEach(box => box.remove());
    makeRows(slider.value, slider.value);
}

//Event listner for slider movement
slider.addEventListener("mouseup", modifyGridSize);

//loads default grid size
window.onload = () => {
    makeRows(defaultSize, defaultSize);
}