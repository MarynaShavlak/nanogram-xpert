import {cell, ctx} from "../config/config.js";

export function drawGrid() {
    ctx.strokeStyle = 'black';

    function drawLine(startX, startY, endX, endY, width = 1) {
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    let vLineCount = 0;
    let hLineCount = 0;

    for (let i = 0; i <= 820; i += cell) {
        vLineCount++;
        hLineCount++;

        let verticalWidth = (vLineCount === 9 || vLineCount === 39) ? 4 : 1;
        let horizontalWidth = (hLineCount === 8) ? 4 : 1;

        drawLine(i, 0, i, 820, verticalWidth);
        drawLine(0, i, 820, i, horizontalWidth);
    }
}
