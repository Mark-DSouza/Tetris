import React from "react";

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

// Styled components
import {StyledTetrisWrapper} from './styles/StyledTetris';

// Supporting files
import {createStage} from '../gameHelper';
import { StyledCell } from "./styles/StyledCell";

function Tetris(props) {
    return (
        <StyledTetrisWrapper>
            <div>

            Tetris

            <Stage stage={createStage}/>

            <aside>
                <Display />
                <StartButton />
            </aside>

            </div>
        </StyledTetrisWrapper>

    )
}

export default Tetris;