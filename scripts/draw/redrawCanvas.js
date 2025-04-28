import {cell, ctx, height, width} from "../config/config.js";
import {drawDigitTask} from "./drawDigitTask.js";
import {drawGrid} from "./drawGrid.js";
import {errorCells, filledCells} from "../../index.js";
import {drawErrorCell} from "./drawErrorCell.js";

export function redrawCanvas() {
    ctx.clearRect(0, 0, width, height);
    drawDigitTask();
    drawGrid();


    // for (const position in filledCells) {
    //     const [x, y] = position.split(',').map(Number);
    //     ctx.fillStyle = filledCells[position];
    //     ctx.fillRect(x * cell, y * cell, cell, cell);
    // }
    for (const position in filledCells) {
        const [x, y] = position.split(',').map(Number);
        ctx.fillStyle = filledCells[position];
        ctx.fillRect(x * cell, y * cell, cell, cell);
    }

    // Redraw all error cells with the cross
    for (const position in errorCells) {
        const [x, y] = position.split(',').map(Number);
        drawErrorCell(x, y);
    }
}
