import {cell, ctx} from "../config/config.js";

export function drawDigitCell(x, y, color, digit) {
    ctx.fillStyle = color;
    ctx.fillRect(cell * x, cell * y, cell, cell);
    ctx.font = '14px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const centerX = cell * x + cell / 2;
    const centerY = cell * y + cell / 2;

    ctx.fillText(digit, centerX, centerY);
}
