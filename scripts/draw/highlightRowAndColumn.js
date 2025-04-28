import {cell, ctx, drawArea, height, width} from "../config/config.js";

let overlayCanvas = document.createElement('canvas');
overlayCanvas.width = width;
overlayCanvas.height = height;
let overlayCtx = overlayCanvas.getContext('2d');

export function highlightRowAndColumn(colIndex, rowIndex) {
    overlayCtx.clearRect(0, 0, width, height);


    for (let x = drawArea.x.min; x <= drawArea.x.max; x++) {
        for (let y = drawArea.y.min; y <= drawArea.y.max; y++) {

            if (x === colIndex || y === rowIndex) {
                overlayCtx.fillStyle = 'rgba(255, 255, 0, 0.3)';
                overlayCtx.fillRect(x * cell, y * cell, cell, cell);
            }
        }
    }


    ctx.drawImage(overlayCanvas, 0, 0);
}
