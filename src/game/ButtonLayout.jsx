import PropTypes from 'prop-types';
import styles from './ButtonLayout.module.css';

export const ButtonLayout = ({ onRestartGame, children }) => {
    const onClickFunction = () => {
        if (onRestartGame) {
            onRestartGame();
        } else {
            return;
        }
    };
    return (
        <div className={styles.button} onClick={() => onClickFunction()}>
            {children}
        </div>
    );
};

ButtonLayout.propTypes = {
    onRestartGame: PropTypes.func,
};
