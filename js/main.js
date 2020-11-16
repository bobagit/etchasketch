// Create grid
function createGrid(divWidth = 10) {
  const containerWidth = 600; // constant
  let container = document.querySelector('.container');
  container.style.width = `${containerWidth}px`;
  container.style["grid-template-columns"] = `repeat(${divWidth}, ${containerWidth / divWidth}px)`;
  container.style["grid-template-rows"] = `repeat(${divWidth}, ${containerWidth / divWidth}px)`;

  for (let i = 0; i < (divWidth * divWidth); i++) {
    let div = document.createElement('div');
    div.className = "inner";
    div.style["border"] = "1px solid #cccccc"
    container.appendChild(div)
  };
  let innerDiv = document.querySelectorAll('.inner');
  Array.from(innerDiv).forEach(div => div.addEventListener("mouseover", () => {
    div.style["background-color"] = 'black';
  }));
}

// Reset Button
function reset() {
  let innerDiv = document.querySelectorAll('.inner');
  Array.from(innerDiv).forEach(div => div.remove());
  let newSize = parseInt(prompt("Enter a new size between 1 and 100:"));
  promptForGridSize(newSize);
}

let resetButton = document.getElementById("reset")
resetButton.addEventListener('click', reset)


// Prompt for New Grid Size
let promptForGridSize = (num) => {
  if (num > 100 || num < 1 || isNaN(num)) {
    alert("Invalid entry, enter a new size between 1 and 100");
    createGrid(10)
  } else {
    createGrid(num)
  };
};

// App: Create Grid
createGrid(10)