import styles from './CellLayout.module.css';
export const CellLayout = (prop) => {
    const { value, cellId, onSetCellId } = prop;
    const movePlayer = () => {
        onSetCellId(cellId);
    };
    return (
        <div className={styles.cell} onClick={() => movePlayer()}>
            {value}
        </div>
    );
};
