import {color, errorCells, filledCells} from "../../index.js";

export function fillCell(cellX, cellY, isError= false) {
    if (!isError) {
        filledCells[`${cellX},${cellY}`] = color;
    } else {
        errorCells[`${cellX},${cellY}`] = '#B0203A'
    }

}
