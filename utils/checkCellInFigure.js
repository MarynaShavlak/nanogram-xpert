export function checkCellInFigure(cellX, cellY, figureCells) {
    return figureCells.some(
        ([figX, figY]) => figX === cellX && figY === cellY
    );
}
