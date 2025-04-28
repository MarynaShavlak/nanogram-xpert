import {cell, ctx} from "../config/config.js";

export function drawErrorCell(x, y) {
    const posX = cell * x;
    const posY = cell * y;

    // Draw the red background
    ctx.fillStyle = '#B0203A'; // deep red
    ctx.fillRect(posX, posY, cell, cell);

    // Draw the black cross
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2; // Thickness of the cross lines
    ctx.beginPath();
    // First line \
    ctx.moveTo(posX + 4, posY + 4);
    ctx.lineTo(posX + cell - 4, posY + cell - 4);
    // Second line /
    ctx.moveTo(posX + cell - 4, posY + 4);
    ctx.lineTo(posX + 4, posY + cell - 4);
    ctx.stroke();
}
