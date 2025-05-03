import styles from './GameLayout.module.css';
import { InfoContainer } from './InfoContainer';
import { FieldContainer } from './FieldContainer';
import { ButtonLayout } from './ButtonLayout';
export const GameLayout = (prop) => {
    const { currentPlayer, isGameEnded, isDraw, field, onSetCellId, isDefault, onRestartGame } = prop;
    return (
        <div className={styles.game}>
            <InfoContainer currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
            <FieldContainer field={field} onSetCellId={onSetCellId} />
            {isDefault ? <ButtonLayout>Настройки</ButtonLayout> : <ButtonLayout onRestartGame={onRestartGame}>Начать игру</ButtonLayout>}
        </div>
    );
};
