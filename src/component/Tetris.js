import React from "react";

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

function Tetris(props) {
    return (
        <div>
            Tetris

            <Stage />

            <aside>
                <Display />
                <StartButton />
            </aside>

        </div>
    )
}

export default Tetris;