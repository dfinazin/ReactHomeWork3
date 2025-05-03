import styles from './GameLayout.module.css';
import { InfoContainer } from './InfoContainer';
import { FieldContainer } from './FieldContainer';
export const GameLayout = (prop) => {
    const { currentPlayer, isGameEnded, isDraw, field, onSetCellId } = prop;
    return (
        <div className={styles.game}>
            <InfoContainer currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
            <FieldContainer field={field} onSetCellId={onSetCellId} />
            <div>3</div>
        </div>
    );
};
