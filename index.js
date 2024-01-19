const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(50, 100, 130, 50); // x, y, width, height:

// //one more figure
// ctx.fillStyle = 'blue';
// ctx.fillRect(20, 30, 100, 10);

// // clear 2 figures
// ctx.clearRect(0, 0, 400, 200);

// ctx.strokeStyle = 'red';
// ctx.lineWidth = '5'; // border-width
// ctx.rect(100, 75, 100, 100); // without background
// ctx.stroke();
// ctx.fillStyle = 'orange'; // background color
// ctx.fill();

// draw line between 2 points:
// ctx.beginPath(); // to make each line as independent element with own style
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = '3';
// ctx.moveTo(100, 50); // start point: x, y
// ctx.lineTo(150, 150); // end point : x, y
// ctx.stroke();

// ctx.lineTo(250, 50);
// ctx.stroke();

// // independent line:
// ctx.beginPath(); // to make each line as independent element with own style
// ctx.strokeStyle = 'green';
// ctx.lineWidth = '6';
// ctx.moveTo(150, 50);
// ctx.lineTo(100, 250); // end point : x, y
// ctx.stroke();

// ctx.clearRect(0, 0, 400, 200); // clear all

// ctx.beginPath(); // to make each line as independent element with own style
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = '3';
// ctx.moveTo(50, 150);
// ctx.lineTo(150, 50);
// ctx.lineTo(200, 150);
// ctx.lineTo(50, 150);
// ctx.fillStyle = 'yellow';
// ctx.stroke();
// ctx.fill();

// draw circle
// const pi = Math.PI;
// ctx.beginPath();
// ctx.lineWidth = '3';
// ctx.strokeStyle = 'blue';
// ctx.fillStyle = 'red';
// // pi - 180 degrees
// ctx.arc(150, 100, 70, 0, 2 * pi, false); // center x, center y, radius, 0, true(проти годиинникової стрілки)/ false (за стрілкою)
// ctx.stroke();
// ctx.fill();

// ctx.beginPath();
// ctx.lineWidth = '3';
// ctx.strokeStyle = 'green';
// ctx.fillStyle = 'yellow';
// // pi - 180 degrees
// ctx.arc(300, 100, 70, 0, pi, false); // center x, center y, radius, 0, true(проти годиинникової стрілки)/ false (за стрілкою)
// ctx.stroke();
// ctx.fill();

// paint
// let color = 'red';
// const colorInput = document.querySelector('.color-input');
// colorInput.addEventListener('input', function () {
//   color = this.value;
// });
// canvas.onmousedown = function (e) {
//   canvas.onmousemove = function (e) {
//     let x = e.offsetX;
//     let y = e.offsetY;
//     ctx.fillRect(x, y, 7, 7);
//     ctx.fillStyle = color;
//     ctx.fill();
//   };
//   canvas.onmouseup = function () {
//     canvas.onmousemove = null;
//   };
// };

//spirograf
// const R = 150;
// const r = 120;
// const d = 50;
// let t = 0;
// let timer;
// function spirograf() {
//   let x = (R - r) * Math.cos(t) + d * Math.cos(((R - r) * t) / r);
//   let y = (R - r) * Math.sin(t) - d * Math.sin(((R - r) * t) / r);
//   t = t + 0.2;
//   ctx.fillRect(250 + x, 250 + y, 5, 5);
//   timer = setTimeout(spirograf, 50);
// }

// spirograf();

//__________________Graph_______________
