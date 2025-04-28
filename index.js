const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const cell = 20;
const width =820;
const height = 820;
const heartConfig = [
  {
    color: '#212121',
    cells: [
      [3, 2],
      [4, 2],
      [10, 2],
      [11, 2],
      [3, 2],
      [2, 3],
      [5, 3],
      [9, 3],
      [12, 3],
      [1, 4],
      [6, 4],
      [8, 4],
      [13, 4],
      [1, 5],
      [7, 5],
      [13, 5],
      [1, 6],
      [13, 6],
      [2, 7],
      [3, 8],
      [4, 9],
      [5, 10],
      [6, 11],
      [7, 12],
      [12, 7],
      [11, 8],
      [10, 9],
      [9, 10],
      [8, 11],
    ],
  },
  {
    color: 'red',
    cells: [
      [2, 6],
      [3, 7],
      [4, 8],
      [5, 9],
      [6, 10],
    ],
  },
  {
    color: 'orange',
    cells: [
      [2, 5],
      [3, 6],
      [4, 7],
      [5, 8],
      [6, 9],
    ],
  },
  {
    color: 'yellow',
    cells: [
      [2, 4],
      [3, 5],
      [4, 6],
      [5, 7],
      [6, 8],
    ],
  },
  {
    color: 'chartreuse',
    cells: [
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ],
  },
  {
    color: 'aqua',
    cells: [
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6],
    ],
  },
  {
    color: 'blue',
    cells: [
      [4, 3],
      [5, 4],
      [6, 5],
    ],
  },
];

// const owlConfig = [
//   {
//     color: '#0056AB',
//     cells: [
//         [3,1],
//       [4,1],
//       [5,1],
//       [6,1],
//       [11,1],
//       [12,1],
//       [13,1],
//       // [14,1],
//       // [15,1],
//       // [20,1],
//       // [21,1],
//       // [22,1],
//       // [23,1],
//
//       [4,2],
//       [5,2],
//       [6,2],
//       [7,2],
//       [9,2],
//       [10,2],
//       [11,2],
//       [12,2],
//       [13,2],
//
//       [4,3],
//       [5,3],
//       [6,3],
//       [7,3],
//       [8,3],
//       [9,3],
//       [10,3],
//       [11,3],
//       [12,3],
//       [13,3],
//
//       [5,4],
//       [6,4],
//       [7,4],
//       [8,4],
//       [9,4],
//       [10,4],
//       [11,4],
//       [12,4],
//       [13,4],
//
//       [4,5],
//       [5,5],
//       [6,5],
//       [7,5],
//       [8,5],
//       [9,5],
//       [10,5],
//       [11,5],
//       [12,5],
//       [13,5],
//
//       [4,6],
//       [5,6],
//       [6,6],
//       [7,6],
//
//       [11,6],
//       [12,6],
//       [13,6],
//
//       [3,7],
//       [4,7],
//       [5,7],
//       [6,7],
//       [12,7],
//       [13,7],
//
//     ]
//   },
//   {
//     color: '#69BEF7',
//     cells: [
//       [8,6],
//       [9,6],
//       [10,6],
//       [7,7],
//       [11,7],
//     ]
//   },
//   {
//     color: '#FFFBE7',
//     cells: [
//       [8,7],
//       [9,7],
//       [10,7],
//     ]
//   }
// ]


const digitsConfig= [
  {
    color: 'red',
    cells: [
        [8,3, 1],
        [8,4, 2],
        [8,5, 7],
        [8,3, 1],
        [8,6, 2],

      [9,1, 1],
      [9,2, 1],
      [9,3, 1],
      [9,4, 1],
      [9,5, 1],
      [9,6, 1],

      [10,1, 1],
      [10,2, 1],
      [10,3, 1],
      [10,4, 1],
      [10,5, 1],
      [10,6, 1],

      [11,3, 9],
      [11,4, 2],
      [11,5, 7],
      [11,6, 2],

      [12,6, 11],

      [13,2, 10],
      [13,3, 1],
      [13,4, 1],
      [13,5, 3],
      [13,6, 4],

      [14,0, 2],
      [14,1, 4],
      [14,2, 1],
      [14,3, 1],
      [14,4, 3],
      [14,5, 9],
      [14,6, 1],

      [15,3, 2],
      [15,4, 3],
      [15,5, 14],
      [15,6, 1],

      [16,3, 2],
      [16,4, 3],
      [16,5, 7],
      [16,6, 1],

      [17,3, 4],
      [17,4, 3],
      [17,5, 6],
      [17,6, 4],

      [18,2, 3],
      [18,3, 2],
      [18,4, 2],
      [18,5, 3],
      [18,6, 4],

      [19,2, 2],
      [19,3, 1],
      [19,4, 2],
      [19,5, 5],
      [19,6, 1],

      [20,2, 1],
      [20,3, 2],
      [20,4, 1],
      [20,5, 2],
      [20,6, 1],

      [21,2, 1],
      [21,3, 2],
      [21,4, 1],
      [21,5, 2],
      [21,6, 1],

      [22,2, 2],
      [22,3, 1],
      [22,4, 2],
      [22,5, 3],
      [22,6, 3],


      [23,3, 3],
      [23,4, 3],
      [23,5, 7],
      [23,6, 8],

      [24,2, 4],
      [24,3, 2],
      [24,4, 7],
      [24,5, 4],
      [24,6, 1],

      [25,2, 2],
      [25,3, 3],
      [25,4, 8],
      [25,5, 2],
      [25,6, 1],

      [26,3, 2],
      [26,4, 3],
      [26,5, 10],
      [26,6, 1],



      [27,0, 2],
      [27,1, 4],
      [27,2, 1],
      [27,3, 1],
      [27,4, 3],
      [27,5, 5],
      [27,6, 1],


      [28,1, 10],
      [28,2, 1],
      [28,3, 1],
      [28,4, 3],
      [28,5, 4],
      [28,6, 3],

      [29,5, 11],
      [29,6, 10],

      [30,5,9],
      [30,6, 8],


      [31,4,1],
      [31,5,1],
      [31,6, 6],

      [32,3,1],
      [32,4,1],
      [32,5,1],
      [32,6, 1],

      [33,4,1],
      [33,5,1],
      [33,6, 1],

      [34,5,9],
      [34,6, 1],
      [35,5,6],
      [35,6, 1],
      [36,5,6],
      [36,6, 1],
      [37,6, 11],


        // Vertical tasks

        [6, 7, 2],
        [7, 7, 2],

      [6, 8, 3],
      [7, 8, 3],

      [4, 9, 1],
      [5, 9, 2],
      [6, 9, 2],
      [7, 9, 1],


      [4, 10, 1],
      [5, 10, 2],
      [6, 10, 2],
      [7, 10, 1],

      [4, 11, 1],
      [5, 11, 2],
      [6, 11, 2],
      [7, 11, 1],


      [6, 12, 7],
      [7, 12, 7],
      [7, 13, 16],

      [6, 14, 5],
      [7, 14, 5],

      [6, 15, 4],
      [7, 15, 4],


      [4, 16, 3],
      [5, 16, 1],
      [6, 16, 1],
      [7, 16, 3],

      [4, 17, 2],
      [5, 17, 2],
      [6, 17, 2],
      [7, 17, 2],

      [4, 18, 2],
      [5, 18, 2],
      [6, 18, 2],
      [7, 18, 2],

      [5, 19, 7],
      [6, 19, 2],
      [7, 19, 7],

      [5, 20, 2],
      [6, 20, 2],
      [7, 20, 2],

      [6, 21, 6],
      [7, 21, 6],


      [5, 22, 2],
      [6, 22, 4],
      [7, 22, 2],

      [6, 23, 3],
      [7, 23, 3],

      [6, 24, 4],
      [7, 24, 4],
      [7, 25, 16],
      [7, 26, 14],

      [6, 27, 3],
      [7, 27, 4],

      [4, 28, 4],
      [5,28, 4],
      [6, 28,5],
      [7, 28, 4],

      [3, 29, 1],
      [4, 29, 1],
      [5,29, 5],
      [6, 29,6],
      [7, 29, 4],

      [4, 30, 2],
      [5,30, 5],
      [6, 30, 7],
      [7, 30, 4],

      [3, 31, 1],
      [4, 31, 1],
      [5,31, 3],
      [6, 31,7],
      [7, 31, 4],

      [3, 32, 1],
      [4, 32, 1],
      [5,32, 2],
      [6, 32,6],
      [7, 32, 4],

      [1, 33, 1],
      [2, 33, 1],
      [3, 33, 2],
      [4, 33, 1],
      [5,33, 1],
      [6, 33,6],
      [7, 33, 4],

      [0, 34, 1],
      [1, 34, 1],
      [2, 34, 2],
      [3, 34, 1],
      [4, 34, 2],
      [5,34, 3],
      [6, 34,1],
      [7, 34, 1],

      [0, 35, 1],
      [1, 35, 1],
      [2, 35, 2],
      [3, 35, 1],
      [4, 35, 3],
      [5, 35, 3],
      [6, 35, 1],
      [7, 35, 1],

      [1, 36, 1],
      [2, 36, 1],
      [3, 36, 2],
      [4, 36, 1],
      [5, 36, 3],
      [6, 36, 6],
      [7, 36, 1],

      [1, 37, 1],
      [2, 37, 1],
      [3, 37, 3],
      [4, 37, 3],
      [5, 37, 2],
      [6, 37, 3],
      [7, 37, 1],


      [3, 38, 2],
      [4, 38, 1],
      [5, 38, 2],
      [6, 38, 2],
      [7, 38, 10],

      [2, 39, 1],
      [3, 39, 1],
      [4, 39, 1],
      [5, 39, 2],
      [6, 39, 2],
      [7, 39, 3],

      [6, 40, 4],
      [7, 40, 17],
    ]
  },

]
const notColoredCells = [
  [7, 6],
  [7, 7],
  [7, 8],
  [7, 9],
  [7, 10],
  [7, 11],
  [8, 5],
  [8, 6],
  [8, 7],
  [8, 8],
  [8, 9],
  [8, 10],
  [9, 4],
  [9, 5],
  [9, 6],
  [9, 7],
  [9, 8],
  [9, 9],
  [10, 3],
  [10, 4],
  [10, 5],
  [10, 6],
  [10, 7],
  [10, 8],
  [11, 3],
  [11, 4],
  [11, 5],
  [11, 6],
  [11, 7],
  [12, 4],
  [12, 5],
  [12, 6],
];
drawDigitTask()
grid();

// drawOwl();
// drawHeart();


// function drawOwl() {
//   owlConfig.forEach(({ color, cells }) =>
//       cells.forEach(([x, y]) => drawCell(x, y, color)),
//   );
//   // setDigitCells();
// }

function drawDigitTask()  {
    digitsConfig.forEach(({ color, cells }) =>
      cells.forEach(([x, y, digit]) => drawDigitCell(x, y, color, digit)),
  );
  // setDigitCells();
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
  const isInside = isInsideHeart(cellIndexByX, cellIndexByY);
  if (isInsideHeart(cellIndexByX, cellIndexByY)) {
    ctx.fillStyle = color;
    ctx.fillRect(cellIndexByX * cell, cellIndexByY * cell, 30, 30);
    ctx.fill();
  }
};

// function grid() {
//   ctx.strokeStyle = 'black';
//
//   function drawLine(startX, startY, endX, endY) {
//     ctx.moveTo(startX, startY);
//     ctx.lineTo(endX, endY);
//   }
//
//   for (let i = 0; i <= 820; i += cell) {
//
//     drawLine(i, 0, i, 820);
//     drawLine(0, i, 820, i);
//   }
//
//   ctx.stroke();
// }
function grid() {
  ctx.strokeStyle = 'black';

  function drawLine(startX, startY, endX, endY, width = 1) {
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }

  let vLineCount = 0; // vertical line counter
  let hLineCount = 0; // horizontal line counter

  for (let i = 0; i <= 820; i += cell) {
    vLineCount++;
    hLineCount++;

    let verticalWidth = (vLineCount === 9 || vLineCount === 39) ? 4 : 1;
    let horizontalWidth = (hLineCount === 8) ? 4 : 1;

    drawLine(i, 0, i, 820, verticalWidth);   // vertical line
    drawLine(0, i, 820, i, horizontalWidth); // horizontal line
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

function drawHeart() {
  heartConfig.forEach(({ color, cells }) =>
    cells.forEach(([x, y]) => drawCell(x, y, color)),
  );
  setDigitCells();
}

function setDigitCells() {
  ctx.fillStyle = '#212121';
  ctx.font = '14px Arial';

  notColoredCells.forEach(([x, y], index) => {
    const offsetX = cell * x + cell / 4;
    const offsetY = cell * y + cell / 1.21;
    ctx.fillText((index % 6) + 1, offsetX, offsetY);
  });
}

function isInsideHeart(x, y) {
  const isEmpty = notColoredCells.find(el => el[0] === x && el[1] === y);
  return !!isEmpty;
}
