import {cell, ctx, height, width} from "../config/config.js";
import {drawDigitTask} from "./drawDigitTask.js";
import {drawGrid} from "./drawGrid.js";
import {filledCells} from "../index.js";

export function redrawCanvas() {
    ctx.clearRect(0, 0, width, height);
    drawDigitTask();
    drawGrid();


    for (const position in filledCells) {
        const [x, y] = position.split(',').map(Number);
        ctx.fillStyle = filledCells[position];
        ctx.fillRect(x * cell, y * cell, cell, cell);
    }
}
