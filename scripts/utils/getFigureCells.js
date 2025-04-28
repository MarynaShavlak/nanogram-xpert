import {areasData} from "../config/areasData.js";

export function getFigureCells(areaId) {
    return areasData.find(area => area.id === areaId).cells;
}
