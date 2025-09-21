import PropTypes from 'prop-types';
import styles from './CellLayout.module.css';
export const CellLayout = (prop) => {
    const { value, cellId, playerMove } = prop;
    return (
        <div className={!value ? styles.cell_empty : styles.cell_full} onClick={() => playerMove(cellId)}>
            {value}
        </div>
    );
};

CellLayout.propTypes = {
    value: PropTypes.string,
    cellId: PropTypes.number,
    playerMove: PropTypes.func,
};
