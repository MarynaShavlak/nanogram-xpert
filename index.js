import {canvas, } from "./config/config.js";
import {drawGrid} from "./draw/drawGrid.js";
import {drawDigitTask} from "./draw/drawDigitTask.js";

import {handleCanvasClick} from "./eventHandlers/handleCanvasClick.js";
import {handleCanvasMouse, handleCanvasMouseLeave} from "./eventHandlers/handleCanvasMouse.js";



export let color;
const colorInput = document.querySelector('.color-input');
colorInput.addEventListener('input', function () {
  color = this.value;
});



export let filledCells = {};

drawDigitTask();
drawGrid();




canvas.addEventListener('click', handleCanvasClick);
canvas.addEventListener('mousemove', handleCanvasMouse);
canvas.addEventListener('mouseleave', handleCanvasMouseLeave);






