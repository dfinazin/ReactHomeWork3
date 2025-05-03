import { useState } from 'react';
import { GameLayout } from './GameLayout';

const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8],
    [2, 4, 6], // Варианты побед по диагонали
];

export const GameContainer = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
    const [cellId, setCellId] = useState();

    const winCheck = (cells) => {
        let isWin = false;
        WIN_PATTERNS.forEach((el) => {
            if (cells[el[0]] !== '' && cells[el[0]] === cells[el[1]] && cells[el[1]] === cells[el[2]]) {
                isWin = true;
            }
        });
        return isWin;
    };

    const playerMove = () => {
        if (!isGameEnded && field[cellId] === '') {
            const newField = [...field];
            newField[cellId] = currentPlayer;
            setField(newField);
            if (
                winCheck(newField) ||
                field.every((el) => {
                    return el !== '';
                })
            ) {
                setIsGameEnded(true);
            } else {
                setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
            }

            if (
                !winCheck(newField) &&
                field.every((el) => {
                    return el !== '';
                })
            ) {
                setIsDraw(true);
            }
        }

        //console.log(cellId, isDraw, isGameEnded, field, currentPlayer);
    };

    playerMove();

    return <GameLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} field={field} onSetCellId={setCellId} />;
};
