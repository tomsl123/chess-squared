/**
 * @file This file declares the ChessSquareProps interface.
 */


interface ChessSquareProps {
    color: 'light' | 'dark';
    piece?: string;
    onClick?: () => void;
}

export default ChessSquareProps