import {drawArea} from "../config/config.js";

export function isDrawAvailable(x, y) {
    return (
        x >= drawArea.x.min &&
        x <= drawArea.x.max &&
        y >= drawArea.y.min &&
        y <= drawArea.y.max
    );
}
