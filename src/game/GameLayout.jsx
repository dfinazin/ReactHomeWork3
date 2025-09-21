import PropTypes from 'prop-types';
import styles from './GameLayout.module.css';
import { InfoContainer } from './InfoContainer';
import { FieldContainer } from './FieldContainer';
import { ButtonLayout } from './ButtonLayout';
export const GameLayout = (prop) => {
    const { currentPlayer, isGameEnded, isDraw, field, playerMove, isDefault, onRestartGame } = prop;
    return (
        <div className={styles.game}>
            <InfoContainer currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
            <FieldContainer field={field} playerMove={playerMove} />
            {!isDefault && <ButtonLayout onRestartGame={onRestartGame}>Начать игру</ButtonLayout>}
        </div>
    );
};

GameLayout.propTypes = {
    currentPlayer: PropTypes.string,
    isGameEnded: PropTypes.bool,
    isDraw: PropTypes.bool,
    field: PropTypes.array,
    playerMove: PropTypes.func,
    isDefault: PropTypes.bool,
    onRestartGame: PropTypes.func,
};
