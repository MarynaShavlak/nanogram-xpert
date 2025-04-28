import {digitsConfig} from "../config/task.js";
import {drawDigitCell} from "./drawDigitCell.js";

export function drawDigitTask() {
    digitsConfig.forEach(({color, cells}) =>
        cells.forEach(([x, y, digit]) => drawDigitCell(x, y, color, digit)),
    );
}
