/**
 * @file This file declares the ChessBoard1 component.
 */

import React, {useState} from 'react';
import ChessSquare from './ChessSquare.tsx';

const ChessBoard: React.FC = () => {
    const [board, setBoard] = useState<string[][]>(initialBoard());
    const [selectedSquare, setSelectedSquare] = useState<{ row:number; col:number } | null>(null);

    /**
     * Initializes the chess board with the standard chess starting position.
     * The board is represented as a 2D array of strings, where each string represents a piece.
     * Pieces are represented as follows: 'r' for rook, 'n' for knight, 'b' for bishop, 'q' for queen, 'k' for king, and 'p' for pawn.
     * Uppercase letters represent white pieces, and lowercase letters represent black pieces.
     * An empty string represents an empty square.
     * @returns A 2D array representing the chess board.
     */
    function initialBoard(): string[][] {
        return [
            ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
            ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
        ];
    }

    const handleSquareClick = (row: number, col: number):void => {
        const piece = board[row][col]; // Select the piece

        if (selectedSquare) { // If a square is already selected, move the piece
            const [selectedRow, selectedCol] = [selectedSquare.row, selectedSquare.col];
            const boardCopy = [...board]; // Create a copy of the board
            boardCopy[row][col] = board[selectedRow][selectedCol]; // Move the piece to the new square
            boardCopy[selectedRow][selectedCol] = ''; // Clear the original square
            setBoard(boardCopy); // Update the board
            setSelectedSquare(null); // Deselect the square
            return;
        } else if (piece) { // If a piece is clicked, select the square
            setSelectedSquare({ row, col }); // Select the square
        }

        console.log(`Clicked square ${String.fromCharCode(97 + col)}${8 - row}, piece: ${piece}`);
    };

    return (
        <div>
            {board.map((_row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {_row.map((piece, colIndex) => (
                        <ChessSquare
                            key={colIndex}
                            color={(rowIndex + colIndex) % 2 === 1 ? 'light' : 'dark'}
                            piece={piece}
                            onClick={() => handleSquareClick(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ChessBoard;