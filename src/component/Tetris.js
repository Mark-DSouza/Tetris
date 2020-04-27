import React from "react";

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

// Supporting files
import {createStage} from '../gameHelper';

function Tetris(props) {
    return (
        <div>
            Tetris

            <Stage stage={createStage}/>

            <aside>
                <Display />
                <StartButton />
            </aside>

        </div>
    )
}

export default Tetris;