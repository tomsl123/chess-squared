/**
 * @file This file declares the ChessSquare component.
 */

import React from 'react';
import ChessSquareProps from './ChessSquareClass.ts';

const ChessSquare: React.FC<ChessSquareProps> = ( {color, piece, onClick } ) => {
    const squareColor = color === 'light' ? 'light-square' : 'dark-square';
    const backgroundColor = squareColor === 'light-square' ? '#f4fee8' : '#aacb87'; // '#f1f2f6' : '#a0c0ff'; '#fff2d4' : '#d79d66'; '#f4fee8' : '#90b16c' (#aacb87)

    return (
        <div className={'chessboard'}
             onClick={onClick}
             style={{
                    display: 'flex',
                    backgroundColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50px',
                    height: '50px',
                    cursor: typeof onClick === 'function' ? 'pointer' : 'default'
            }}>
            {piece && <img src={`./pieces/${piece}.png`} alt={piece} />}
        </div>
    )
}

export default ChessSquare;
