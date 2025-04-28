import {digitsConfig} from "./config/task.js";
import {areasData} from "./config/areasData.js";


const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const cell = 20;
const width =820;
const height = 820;



const drawArea= {
  x: {min: 8, max: 37 },
  y: {min: 7, max: 40 },
}



let color;
const colorInput = document.querySelector('.color-input');
colorInput.addEventListener('input', function () {
  color = this.value;
});

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

        return figX === cellIndexByX && figY === cellIndexByY
      }
  );

  if (isInside && isCellInFigure) {
    ctx.fillStyle = color;
    ctx.fillRect(cellIndexByX * cell, cellIndexByY * cell, 20, 20);
  } else {
    console.log('Wrong cell!');
  }
};


drawDigitTask();
drawFigure();
grid();



function drawFigure() {

  areasData.forEach(area => {
    if (Array.isArray(area.cells)) {
      area.cells.forEach(([x, y]) => drawCell(x, y, color));
    } else {
      console.error(`Missing or invalid cells array in area with id ${area.id}`);
    }
  });
}

function drawDigitTask()  {
    digitsConfig.forEach(({ color, cells }) =>
      cells.forEach(([x, y, digit]) => drawDigitCell(x, y, color, digit)),
  );

}

function grid() {
  ctx.strokeStyle = 'black';

  function drawLine(startX, startY, endX, endY, width = 1) {
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }

  let vLineCount = 0;
  let hLineCount = 0;

  for (let i = 0; i <= 820; i += cell) {
    vLineCount++;
    hLineCount++;

    let verticalWidth = (vLineCount === 9 || vLineCount === 39) ? 4 : 1;
    let horizontalWidth = (hLineCount === 8) ? 4 : 1;

    drawLine(i, 0, i, 820, verticalWidth);
    drawLine(0, i, 820, i, horizontalWidth);
  }
}

function drawCell(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(cell * x, cell * y, cell, cell);
}

function drawDigitCell(x, y, color, digit) {
  ctx.fillStyle = color;
  ctx.fillRect(cell * x, cell * y, cell, cell);
  ctx.font = '14px Arial';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center'; // <<< center horizontally
  ctx.textBaseline = 'middle'; // <<< center vertically

  const centerX = cell * x + cell / 2;
  const centerY = cell * y + cell / 2;

  ctx.fillText(digit, centerX, centerY);
}

function isDrawAvailable(x, y) {

  return (
      x >= drawArea.x.min &&
      x <= drawArea.x.max &&
      y >= drawArea.y.min &&
      y <= drawArea.y.max
  );
}


function findDrawArea(cellX, cellY) {
  const area = areasData.find(area =>
      cellX >= area.x.min &&
      cellX <= area.x.max &&
      cellY >= area.y.min &&
      cellY <= area.y.max
  );

  return area ? area.id : null; // Return the id if found, otherwise null
}
