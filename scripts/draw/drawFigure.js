import {areasData} from "../config/areasData.js";
import {drawCell} from "./drawCell.js";

export function drawFigure(color='#000000') {
    areasData.forEach(area => {
        if (Array.isArray(area.cells)) {
            area.cells.forEach(([x, y]) => drawCell(x, y, color));
        } else {
            console.error(`Missing or invalid cells array in area with id ${area.id}`);
        }
    });
}
