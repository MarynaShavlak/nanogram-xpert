import {getCellIndices} from "../utils/getCellIndices.js";
import {isDrawAvailable} from "../utils/isDrawAvailable.js";
import {redrawCanvas} from "../draw/redrawCanvas.js";
import {highlightRowAndColumn} from "../draw/highlightRowAndColumn.js";

let lastHoveredRow = -1;
let lastHoveredCol = -1;

export function handleCanvasMouse(e) {
    const { x, y } = getMouseCoordinates(e);
    const { cellX, cellY } = getCellIndices(x, y);

    const isInside = isDrawAvailable(cellX, cellY);

    if (!isInside || isSameCell(cellX, cellY)) {
        return;
    }

    updateHoveredCell(cellX, cellY);
    redrawCanvas();
    highlightRowAndColumn(cellX, cellY);
}

export function handleCanvasMouseLeave() {
    resetHoveredCell();
    redrawCanvas();
}

function getMouseCoordinates(event) {
    return {
        x: event.offsetX,
        y: event.offsetY,
    };
}

function isSameCell(cellX, cellY) {
    return cellX === lastHoveredCol && cellY === lastHoveredRow;
}

function updateHoveredCell(cellX, cellY) {
    lastHoveredCol = cellX;
    lastHoveredRow = cellY;
}

function resetHoveredCell() {
    lastHoveredCol = -1;
    lastHoveredRow = -1;
}
