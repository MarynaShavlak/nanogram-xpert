import {canvas, } from "./scripts/config/config.js";
import {drawGrid} from "./scripts/draw/drawGrid.js";
import {drawDigitTask} from "./scripts/draw/drawDigitTask.js";
import {handleCanvasClick} from "./scripts/eventHandlers/handleCanvasClick.js";
import {handleCanvasMouse, handleCanvasMouseLeave} from "./scripts/eventHandlers/handleCanvasMouse.js";


export let color;
export let filledCells = {};
const colorInput = document.querySelector('.color-input');
colorInput.addEventListener('input', function () {
  color = this.value;
});


drawDigitTask();
drawGrid();

canvas.addEventListener('click', handleCanvasClick);
canvas.addEventListener('mousemove', handleCanvasMouse);
canvas.addEventListener('mouseleave', handleCanvasMouseLeave);






