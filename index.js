import {digitsConfig} from "./config/task.js";
import {drawAreas} from "./config/drawAreas.js";

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const cell = 20;
const width =820;
const height = 820;




// const notColoredCells = [
//   [7, 6],
//   [7, 7],
//   [7, 8],
//   [7, 9],
//   [7, 10],
//   [7, 11],
//   [8, 5],
//   [8, 6],
//   [8, 7],
//   [8, 8],
//   [8, 9],
//   [8, 10],
//   [9, 4],
//   [9, 5],
//   [9, 6],
//   [9, 7],
//   [9, 8],
//   [9, 9],
//   [10, 3],
//   [10, 4],
//   [10, 5],
//   [10, 6],
//   [10, 7],
//   [10, 8],
//   [11, 3],
//   [11, 4],
//   [11, 5],
//   [11, 6],
//   [11, 7],
//   [12, 4],
//   [12, 5],
//   [12, 6],
// ];

const drawArea= {
  x: {min: 8, max: 37 },
  y: {min: 7, max: 40 },
}



const figureConfig = [
  {
    color: 'black',
    cells: [
        [13,7],
        [14,7],
        [13,8],
        [14,8],
        [15,8],
      [13,9],
      [15,9],
      [16,9],
      [13,10],
      [16,10],
      [17,10],
      [13,11],
      [17,11],
      [18,11],

      [13,12],
      [14,12],
      [15,12],
      [16,12],
      [17,12],
      [18,12],
      [19,12],
      [22,12],
      [23,12],
      [24,12],
      [25,12],
      [26,12],
      [27,12],
      [28,12],

// right ear
      [27,7],
      [28,7],
      [26,8],
      [27,8],
      [28,8],
      [25,9],
      [26,9],
      [28,9],
      [24,10],
      [25,10],
      [28,10],
      [23,11],
      [24,11],
      [28,11],

        // head
      [13,13],
      [14,13],
      [15,13],
      [16,13],
      [17,13],
      [18,13],
      [19,13],
      [20,13],
      [21,13],
      [22,13],
      [23,13],
      [24,13],
      [25,13],
      [26,13],
      [27,13],
      [28,13],

      [12,14],
      [13,14],
      [14,14],
      [15,14],
      [16,14],
      [25,14],
      [26,14],
      [27,14],
      [28,14],
      [29,14],

      [11,15],
      [12,15],
      [13,15],
      [14,15],
      [27,15],
      [28,15],
      [29,15],
      [30,15],

      [11,16],
      [12,16],
      [13,16],
      [17,16],
      [23,16],
      [28,16],
      [29,16],
      [30,16],

      [11,17],
      [12,17],
      [18,17],
      [17,17],
      [23,17],
      [24,17],
      [29,17],
      [30,17],

      [11,18],
      [12,18],
      [18,18],
      [17,18],
      [23,18],
      [24,18],
      [29,18],
      [30,18],
      [8,19],
      [9,19],
      [10,19],
      [11,19],
      [12,19],
      [13,19],
      [14,19],
      [20,19],
      [21,19],
      [27,19],
      [28,19],
      [29,19],
      [30,19],
      [31,19],
      [32,19],
      [33,19],
      [11,20],
      [12,20],
      [29,20],
      [30,20],


      [9,21],
      [10,21],
      [11,21],
      [12,21],
      [13,21],
      [14,21],

      [27,21],
      [28,21],
      [29,21],
      [30,21],
      [31,21],
      [32,21],

      [11,22],
      [12,22],
      [29,22],
      [30,22],
      [19,22],
      [20,22],
      [21,22],
      [22,22],

      [11,23],
      [12,23],
      [13,23],
      [28,23],
      [29,23],
      [30,23],
      [15,24],
      [14,24],
      [12,24],
      [13,24],
      [28,24],
      [29,24],
      [27,24],
      [26,24],
      [13,25],
      [14,25],
      [15,25],
      [16,25],
      [17,25],
      [18,25],
      [19,25],
      [20,25],
      [21,25],
      [22,25],
      [23,25],
      [24,25],
      [25,25],
      [26,25],
      [27,25],
      [28,25],


      [14,26],
      [15,26],
      [16,26],
      [17,26],
      [18,26],
      [19,26],
      [20,26],
      [21,26],
      [22,26],
      [23,26],
      [24,26],
      [25,26],
      [26,26],
      [27,26],

        // body
      [15,27],
      [16,27],
      [17,27],
      [23,27],
      [24,27],
      [25,27],
      [26,27],

      [15,28],
      [16,28],
      [17,28],
      [18,28],
      [22,28],
      [23,28],
      [24,28],
      [25,28],
      [26,28],

      [14,29],
      [15,29],
      [16,29],
      [17,29],
      [18,29],
      [22,29],
      [23,29],
      [24,29],
      [25,29],
      [26,29],
      [27,29],

      [14,30],
      [15,30],
      [16,30],
      [17,30],
      [18,30],
      [22,30],
      [23,30],
      [24,30],
      [25,30],
      [26,30],
      [27,30],
      [28,30],

      [14,31],
      [15,31],
      [16,31],
      [23,31],
      [24,31],
      [25,31],
      [26,31],
      [27,31],
      [28,31],
      [29,31],

      [14,32],
      [15,32],
      [35,32],
      [26,32],
      [27,32],
      [28,32],
      [29,32],
      [30,32],



// paws
      [14,33],
      [15,33],
      [19,33],
      [23,33],
      [36,33],
      [27,33],
      [28,33],
      [29,33],
      [30,33],
      [31,33],


      [14,34],
      [15,34],
      [19,34],
      [23,34],
      [24,34],
      [29,34],
      [30,34],
      [31,34],


      [14,35],
      [15,35],
      [19,35],
      [23,35],
      [24,35],
      [25,35],
      [29,35],
      [30,35],
      [31,35],


      [14,36],
      [15,36],
      [19,36],
      [23,36],
      [24,36],
      [25,36],
      [29,36],
      [30,36],
      [31,36],

      [13,37],
      [14,37],
      [15,37],
      [17,37],
      [18,37],
      [19,37],
      [23,37],
      [24,37],
      [29,37],
      [30,37],
      [31,37],

      [13,38],
      [17,38],
      [18,38],
      [22,38],
      [23,38],
      [28,38],
      [29,38],
      [30,38],
      [31,38],

      [13,39],
      [17,39],
      [18,39],
      [22,39],
      [23,39],
      [28,39],
      [29,39],
      [30,39],
      [31,39],

      [13,40],
      [13,40],
      [13,40],
      [13,40],
      [13,40],[14,40],[15,40],[16,40],
      [17,40],
      [18,40],[19,40],[20,40],[21,40],[22,40],[23,40],[24,40],[25,40],[26,40],
      [27,40],
      [28,40],
      [29,40],
      [30,40],
















// tail
      [34,28],
      [35,28],
      [36,28],
      [37,28],
      [34,29],
      [35,29],
      [36,29],
      [37,29],

      [34,30],
      [35,30],
      [36,30],
      [37,30],

      [34,31],
      [35,31],
      [36,31],
      [37,31],

      [34,32],
      [35,32],
      [36,32],
      [37,32],

      [34,33],
      [35,33],
      [36,33],
      [37,33],
      [34,34],
      [37,34],
      [34,35],
      [37,35],
      [32,36],
      [33,36],
      [34,36],
      [37,36],
      [37,37],
      [32,38],
      [33,38],
      [34,38],
      [35,38],
      [36,38],
      [37,38],

// column
      [8,28],
      [9,28],
      [10,28],
      [11,28],
      [8,29],
      [11,29],
      [9,30],
      [10,30],
      [8,31],
      [11,31],
      [8,32],
      [11,32],
      [8,33],
      [11,33],
      [8,34],
      [11,34],
      [8,35],
      [11,35],
      [8,36],
      [11,36],
      [8,37],
      [11,37],
      [9,38],
      [10,38],
      [8,39],
      [11,39],
      [8,40],
      [9,40],
      [10,40],
      [11,40],
    ]

  }
  ]

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

  const figureCells = figureConfig[0].cells;
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
  figureConfig.forEach(({ color, cells }) =>
    cells.forEach(([x, y]) => drawCell(x, y, color)),
  );
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
  const area = drawAreas.find(area =>
      cellX >= area.x.min &&
      cellX <= area.x.max &&
      cellY >= area.y.min &&
      cellY <= area.y.max
  );

  return area ? area.id : null; // Return the id if found, otherwise null
}
