import {isDrawAvailable} from "../utils/isDrawAvailable.js";
import {getClickCoordinates} from "../utils/getClickCoordinates.js";
import {findDrawArea} from "../utils/findDrawArea.js";
import {fillCell} from "../utils/ fillCell.js";
import {checkCellInFigure} from "../utils/checkCellInFigure.js";
import {getFigureCells} from "../utils/getFigureCells.js";
import {getCellIndices} from "../utils/getCellIndices.js";
import {drawErrorCell} from "../draw/drawErrorCell.js";

export function handleCanvasClick(e) {
    const { x, y } = getClickCoordinates(e);
    const { cellX, cellY } = getCellIndices(x, y);

    console.log(cellX, cellY);

    const isInside = isDrawAvailable(cellX, cellY);
    const areaId = findDrawArea(cellX, cellY);
    if (!areaId) {
        return;
    }

    const figureCells = getFigureCells(areaId);
    const isCellInFigure = checkCellInFigure(cellX, cellY, figureCells);

    if (isInside && isCellInFigure) {
        fillCell(cellX, cellY);
        // redrawCanvas();
    } else {
        drawErrorCell(cellX, cellY)
        console.log('Wrong cell!');
    }
}









