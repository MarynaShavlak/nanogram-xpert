import {ctx} from "../config/config.js";

export function drawCell(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(cell * x, cell * y, cell, cell);
}
