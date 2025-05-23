const isValid = (
    board: (number | null)[][],
    row: number,
    col: number,
    value: number
): boolean => {
    for (let c = 0; c < 9; c++) {
        if (board[row][c] === value) return false;
    }

    for (let r = 0; r < 9; r++) {
        if (board[r][col] === value) return false;
    }

    const
        startRow = Math.floor(row / 3) * 3,
        startCol = Math.floor(col / 3) * 3;

    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            if (board[r][c] === value) return false;
        }
    }

    return true;
}

export default isValid;