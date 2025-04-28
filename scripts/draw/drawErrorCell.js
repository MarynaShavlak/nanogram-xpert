import {cell, ctx} from "../config/config.js";

export function drawErrorCell(x, y) {
    const posX = cell * x;
    const posY = cell * y;

    ctx.fillStyle = '#B0203A'; // deep red
    ctx.fillRect(posX, posY, cell, cell);

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();

    ctx.moveTo(posX + 4, posY + 4);
    ctx.lineTo(posX + cell - 4, posY + cell - 4);

    ctx.moveTo(posX + cell - 4, posY + 4);
    ctx.lineTo(posX + 4, posY + cell - 4);
    ctx.stroke();
}
