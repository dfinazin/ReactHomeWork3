import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css';
import { CellLayout } from './CellLayout';
export const FieldLayout = (prop) => {
    const { field, playerMove } = prop;

    return (
        <>
            <div className={styles.field}>
                {field.map((el, index) => {
                    return <CellLayout key={index} cellId={index} value={el} playerMove={playerMove} />;
                })}
            </div>
        </>
    );
};

FieldLayout.propTypes = {
    field: PropTypes.array,
    playerMove: PropTypes.func,
};
