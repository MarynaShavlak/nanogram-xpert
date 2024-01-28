const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const cell = 17;
const width = 255;
const height = 255;
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
drawHeart();

let color;
const colorInput = document.querySelector('.color-input');
colorInput.addEventListener('input', function () {
  color = this.value;
});

canvas.onclick = function (e) {
  console.log('color: ', color);

  let x = e.offsetX;
  console.log('x: ', x);
  let y = e.offsetY;
  console.log('y: ', y);
  let cellIndexByX = Math.floor(x / cell);
  let cellIndexByY = Math.floor(y / cell);
  const isInside = isInsideHeart(cellIndexByX, cellIndexByY);
  console.log('isInside : ', isInside);
  if (isInsideHeart(cellIndexByX, cellIndexByY)) {
    ctx.fillStyle = color;
    ctx.fillRect(cellIndexByX * cell, cellIndexByY * cell, 17, 17);
    ctx.fill();
  }
};

function grid() {
  ctx.strokeStyle = 'black';

  function drawLine(startX, startY, endX, endY) {
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
  }

  for (let i = 0; i <= 255; i += cell) {
    drawLine(i, 0, i, 255);
    drawLine(0, i, 255, i);
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
