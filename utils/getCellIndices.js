import {cell} from "../config/config.js";

export function getCellIndices(x, y) {
    return {
        cellX: Math.floor(x / cell),
        cellY: Math.floor(y / cell),
    };
}
