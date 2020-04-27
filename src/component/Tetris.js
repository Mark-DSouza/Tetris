import React, {useState} from "react";

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

// Styled components
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';

// Custom hooks
import {usePlayer} from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage';

// Supporting files
import {createStage} from '../gameHelper';

function Tetris(props) {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player, setPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');

    const movePlayer = dir => {
        updatePlayerPos({ x: dir, y: 0});
    }

    const startGame = () => {
        // Reset everything
        setStage(createStage());
        resetPlayer();
    }

    const drop = () => {
        updatePlayerPos({ x: dir, y: 0});
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({keyCode}) => {
        if (gameOver) {
            if (keyCode === 37 || keyCode === 65) {
                movePlayer(-1);
            }
            if (keyCode === 39 || keyCode === 68) {
                movePlayer(1);
            }
            if (keyCode === 40 || keyCode === 83) {
                dropPlayer();
            }
        }
    }

    return (
        // role="button" otherwise the component won't respond to key presses
        // tabIndex="0" so that it is the first thing focused when user hits tab
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>

            <StyledTetris>

            <Stage stage={stage}/>

            <aside>
                {gameOver ? (
                    <Display gameOver={gameOver} text={"Game Over"}/>
                ) : (
                        <div>
                            <Display text={"Score"} />
                            <Display text={"Rows"} />
                            <Display text={"Level"} />
                        </div>

                )}
                

                <StartButton />
            </aside>

            </StyledTetris>
        </StyledTetrisWrapper>

    )
}

export default Tetris;