const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const cell = 30;
const width = 750;
const height = 750;
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

const owlConfig = [
  {
    color: '#0056AB',
    cells: [
        [3,1],
      [4,1],
      [5,1],
      [6,1],
      [11,1],
      [12,1],
      [13,1],
      // [14,1],
      // [15,1],
      // [20,1],
      // [21,1],
      // [22,1],
      // [23,1],

      [4,2],
      [5,2],
      [6,2],
      [7,2],
      [9,2],
      [10,2],
      [11,2],
      [12,2],
      [13,2],

      [4,3],
      [5,3],
      [6,3],
      [7,3],
      [8,3],
      [9,3],
      [10,3],
      [11,3],
      [12,3],
      [13,3],

      [5,4],
      [6,4],
      [7,4],
      [8,4],
      [9,4],
      [10,4],
      [11,4],
      [12,4],
      [13,4],

      [4,5],
      [5,5],
      [6,5],
      [7,5],
      [8,5],
      [9,5],
      [10,5],
      [11,5],
      [12,5],
      [13,5],

      [4,6],
      [5,6],
      [6,6],
      [7,6],

      [11,6],
      [12,6],
      [13,6],

      [3,7],
      [4,7],
      [5,7],
      [6,7],



      [12,7],
      [13,7],

    ]
  },
  {
    color: '#69BEF7',
    cells: [
      [8,6],
      [9,6],
      [10,6],
      [7,7],
      [11,7],
    ]
  }
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

grid();
drawOwl();
// drawHeart();


function drawOwl() {
  owlConfig.forEach(({ color, cells }) =>
      cells.forEach(([x, y]) => drawCell(x, y, color)),
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

function grid() {
  ctx.strokeStyle = 'black';

  function drawLine(startX, startY, endX, endY) {
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
  }

  for (let i = 0; i <= 750; i += cell) {
    drawLine(i, 0, i, 750);
    drawLine(0, i, 750, i);
  }

  ctx.stroke();
}

function drawCell(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(cell * x, cell * y, cell, cell);
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
