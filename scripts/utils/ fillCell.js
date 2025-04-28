import {color, filledCells} from "../../index.js";

export function fillCell(cellX, cellY) {
    filledCells[`${cellX},${cellY}`] = color;
}
