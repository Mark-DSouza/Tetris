import React from "react";

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

// Styled components
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';


// Supporting files
import {createStage} from '../gameHelper';

function Tetris(props) {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            
            <Stage stage={createStage}/>

            <aside>
                <Display />
                <StartButton />
            </aside>

            </StyledTetris>
        </StyledTetrisWrapper>

    )
}

export default Tetris;