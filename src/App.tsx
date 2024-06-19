/**
 * @file The main application component which serves as the entry point for the React application.
 * @since 0.0.1
 */

import React from 'react';

import './App.css';
import ChessBoard from './ChessBoard/ChessBoard.tsx';

/**
 * Main component of the application.
 * @returns JSX App element.
 * @since 0.0.1
 */
function App(): React.JSX.Element {

    return (
        <>
            <div>
                <ChessBoard />
            </div>
        </>
    );
}

export default App;
