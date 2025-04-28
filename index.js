// import {areasData} from "./config/areasData.js";
// import {canvas, cell, ctx, drawArea, height, width} from "./config/config.js";
// import {drawGrid} from "./draw/drawGrid.js";
// import {drawDigitTask} from "./draw/drawDigitTask.js";
// import {isDrawAvailable} from "./utils/isDrawAvailable.js";
// import {findDrawArea} from "./utils/findDrawArea.js";
//
//
//
// let color;
// const colorInput = document.querySelector('.color-input');
// colorInput.addEventListener('input', function () {
//   color = this.value;
// });
//
// // Track the last hovered row and column
// let lastHoveredRow = -1;
// let lastHoveredCol = -1;
//
// // Store the original cell state to restore after hover
// let originalCellStates = [];
//
// canvas.onclick = function (e) {
//   let x = e.offsetX;
//   let y = e.offsetY;
//
//   let cellIndexByX = Math.floor(x / cell);
//   let cellIndexByY = Math.floor(y / cell);
//   console.log(cellIndexByX, cellIndexByY);
//   const isInside = isDrawAvailable(cellIndexByX, cellIndexByY);
//   console.log(isInside);
//
//   const areaId = findDrawArea(cellIndexByX, cellIndexByY);
//   console.log('Clicked in area:', areaId);
//
//   if (!areaId) {
//     console.log('Click outside any draw area');
//     return;
//   }
//
//   const figureCells = areasData.find(area => area.id === areaId).cells;
//   console.log('figureCells', figureCells);
//   const isCellInFigure = figureCells.some(
//       ([figX, figY]) => {
//         return figX === cellIndexByX && figY === cellIndexByY;
//       }
//   );
//
//   if (isInside && isCellInFigure) {
//     ctx.fillStyle = color;
//     ctx.fillRect(cellIndexByX * cell, cellIndexByY * cell, 20, 20);
//   } else {
//     console.log('Wrong cell!');
//   }
// };
//
// // Add mousemove event listener to handle hovering
// canvas.addEventListener('mousemove', function (e) {
//   let x = e.offsetX;
//   let y = e.offsetY;
//
//   let cellIndexByX = Math.floor(x / cell);
//   let cellIndexByY = Math.floor(y / cell);
//
//   // Check if mouse is in draw area
//   const isInside = isDrawAvailable(cellIndexByX, cellIndexByY);
//
//   // If not in draw area or hovering the same row/column, do nothing
//   if (!isInside || (cellIndexByX === lastHoveredCol && cellIndexByY === lastHoveredRow)) {
//     return;
//   }
//
//   // First, restore the original cells from the last hover
//   restoreOriginalCells();
//
//   // Save new hover position
//   lastHoveredCol = cellIndexByX;
//   lastHoveredRow = cellIndexByY;
//
//   // Highlight the current row and column
//   highlightRowAndColumn(cellIndexByX, cellIndexByY);
// });
//
// // Add mouseleave event listener to restore original cells when mouse leaves canvas
// canvas.addEventListener('mouseleave', function () {
//   restoreOriginalCells();
//   lastHoveredRow = -1;
//   lastHoveredCol = -1;
// });
//
// // Alternative approach using a semi-transparent overlay for hover effects
// let overlayCanvas = document.createElement('canvas');
// overlayCanvas.width = width;
// overlayCanvas.height = height;
// let overlayCtx = overlayCanvas.getContext('2d');
//
// // Function to highlight a row and column
// function highlightRowAndColumn(colIndex, rowIndex) {
//   // Clear any previous highlights
//   overlayCtx.clearRect(0, 0, width, height);
//
//   // For each cell in the row and column within the draw area
//   for (let x = drawArea.x.min; x <= drawArea.x.max; x++) {
//     for (let y = drawArea.y.min; y <= drawArea.y.max; y++) {
//       // Only highlight cells in the same row or column
//       if (x === colIndex || y === rowIndex) {
//         overlayCtx.fillStyle = 'rgba(255, 255, 0, 0.3)'; // Yellow highlight with 30% opacity
//         overlayCtx.fillRect(x * cell, y * cell, cell, cell);
//       }
//     }
//   }
//
//   // Draw the overlay on the main canvas
//   ctx.drawImage(overlayCanvas, 0, 0);
// }
//
// // Function to restore original cells
// function restoreOriginalCells() {
//   // Redraw the canvas to remove highlights
//   // This is more reliable than using putImageData for complex canvases
//   ctx.clearRect(0, 0, width, height);
//   drawDigitTask();
//
//   drawGrid();
// }
//
// drawDigitTask();
// drawGrid();
//
//
//
//
//
//
//
//


import {areasData} from "./config/areasData.js";
import {canvas, cell, ctx, drawArea, height, width} from "./config/config.js";
import {drawGrid} from "./draw/drawGrid.js";
import {drawDigitTask} from "./draw/drawDigitTask.js";
import {isDrawAvailable} from "./utils/isDrawAvailable.js";
import {findDrawArea} from "./utils/findDrawArea.js";

// Color selection input
let color;
const colorInput = document.querySelector('.color-input');
colorInput.addEventListener('input', function () {
  color = this.value;
});

// Track the last hovered row and column
let lastHoveredRow = -1;
let lastHoveredCol = -1;

// Create a data structure to track filled cells
// Format: { "x,y": color }
let filledCells = {};

// Overlay canvas for hover effects
let overlayCanvas = document.createElement('canvas');
overlayCanvas.width = width;
overlayCanvas.height = height;
let overlayCtx = overlayCanvas.getContext('2d');

// Handle cell click
canvas.onclick = function (e) {
  let x = e.offsetX;
  let y = e.offsetY;

  let cellIndexByX = Math.floor(x / cell);
  let cellIndexByY = Math.floor(y / cell);
  console.log(cellIndexByX, cellIndexByY);

  const isInside = isDrawAvailable(cellIndexByX, cellIndexByY);
  console.log(isInside);

  const areaId = findDrawArea(cellIndexByX, cellIndexByY);
  console.log('Clicked in area:', areaId);

  if (!areaId) {
    console.log('Click outside any draw area');
    return;
  }

  const figureCells = areasData.find(area => area.id === areaId).cells;
  console.log('figureCells', figureCells);
  const isCellInFigure = figureCells.some(
      ([figX, figY]) => {
        return figX === cellIndexByX && figY === cellIndexByY;
      }
  );

  if (isInside && isCellInFigure) {
    // Store the filled cell in our tracking structure
    filledCells[`${cellIndexByX},${cellIndexByY}`] = color;

    // Redraw the canvas with all filled cells
    redrawCanvas();
  } else {
    console.log('Wrong cell!');
  }
};

// Add mousemove event listener to handle hovering
canvas.addEventListener('mousemove', function (e) {
  let x = e.offsetX;
  let y = e.offsetY;

  let cellIndexByX = Math.floor(x / cell);
  let cellIndexByY = Math.floor(y / cell);

  // Check if mouse is in draw area
  const isInside = isDrawAvailable(cellIndexByX, cellIndexByY);

  // If not in draw area or hovering the same row/column, do nothing
  if (!isInside || (cellIndexByX === lastHoveredCol && cellIndexByY === lastHoveredRow)) {
    return;
  }

  // Save new hover position
  lastHoveredCol = cellIndexByX;
  lastHoveredRow = cellIndexByY;

  // Redraw the canvas with all filled cells and highlight the current row/column
  redrawCanvas();
  highlightRowAndColumn(cellIndexByX, cellIndexByY);
});

// When mouse leaves canvas, redraw without highlighting
canvas.addEventListener('mouseleave', function () {
  lastHoveredRow = -1;
  lastHoveredCol = -1;
  redrawCanvas();
});

// Function to redraw the entire canvas with filled cells
function redrawCanvas() {
  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Draw the base elements
  drawDigitTask();
  drawGrid();

  // Draw all filled cells
  for (const position in filledCells) {
    const [x, y] = position.split(',').map(Number);
    ctx.fillStyle = filledCells[position];
    ctx.fillRect(x * cell, y * cell, cell, cell);
  }
}

// Function to highlight a row and column
function highlightRowAndColumn(colIndex, rowIndex) {
  // Clear any previous highlights
  overlayCtx.clearRect(0, 0, width, height);

  // For each cell in the row and column within the draw area
  for (let x = drawArea.x.min; x <= drawArea.x.max; x++) {
    for (let y = drawArea.y.min; y <= drawArea.y.max; y++) {
      // Only highlight cells in the same row or column
      if (x === colIndex || y === rowIndex) {
        overlayCtx.fillStyle = 'rgba(255, 255, 0, 0.3)'; // Yellow highlight with 30% opacity
        overlayCtx.fillRect(x * cell, y * cell, cell, cell);
      }
    }
  }

  // Draw the overlay on the main canvas
  ctx.drawImage(overlayCanvas, 0, 0);
}

// Initial draw
drawDigitTask();
drawGrid();
