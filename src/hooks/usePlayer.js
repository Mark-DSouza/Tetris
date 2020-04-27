import {useState, useCallback} from 'react';
import { randomTetromino } from '../tetrominos';
import { STAGE_WIDTH } from '../gameHelper';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0},
        tetromino: randomTetromino().shape,
        collided: false
    });

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prevPlayer => ({
            ...prevPlayer,
            pos: { x: prevPlayer.pos.x += x, y: prevPlayer.pos.y += y},
            collided
        }))
    };

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {x: STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetromino().shape,
            collided: false
        })
    }, []);

    return [player, updatePlayerPos, resetPlayer];
}