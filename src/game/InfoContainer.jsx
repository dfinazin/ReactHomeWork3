import { InfoLayout } from './InfoLayout';

export const InfoContainer = (prop) => {
    const isDraw = prop.isDraw;
    const isGameEnded = prop.isGameEnded;
    const currentPlayer = prop.currentPlayer;
    const makeInfoContent = (isDraw, isGameEnded, currentPlayer) => {
        if (isDraw) {
            return 'Ничья';
        } else if (isGameEnded) {
            return 'Победа: ' + currentPlayer;
        } else {
            return 'Ход: ' + currentPlayer;
        }
    };
    const infoContent = makeInfoContent(isDraw, isGameEnded, currentPlayer);
    return <InfoLayout>{infoContent}</InfoLayout>;
};
