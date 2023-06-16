import { EMPTY } from "./globals.js";

export function detectWinner(p) {
    let winner = null;
    let winningCombos = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left col
        [1, 4, 7], // middle col
        [2, 5, 8], // right col
        [0, 4, 8], // diag top left to bottom right
        [2, 4, 6] // diag top right to bottom left
    ];

    winningCombos.forEach((combo) => {
        if (p[combo[0]] != null) {
            if (p[combo[0]] === p[combo[1]] && p[combo[1]] === p[combo[2]]) {
                winner = p[combo[0]];
            }
        }
    });

    if (winner === "X") return "X";
    if (winner === "O") return "O";
    if (p.every(position => position !== EMPTY)) return "It is a tie";
}