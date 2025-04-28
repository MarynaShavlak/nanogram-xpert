import {areasData} from "../config/areasData.js";

export function findDrawArea(cellX, cellY) {
    const area = areasData.find(area =>
        cellX >= area.x.min &&
        cellX <= area.x.max &&
        cellY >= area.y.min &&
        cellY <= area.y.max
    );

    return area ? area.id : null; // Return the id if found, otherwise null
}
