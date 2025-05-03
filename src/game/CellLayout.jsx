import styles from './CellLayout.module.css';
export const CellLayout = (prop) => {
    const { value, cellId, onSetCellId } = prop;
    const movePlayer = () => {
        onSetCellId(cellId);
    };
    return (
        <div className={!value ? styles.cell_empty : styles.cell_full} onClick={() => movePlayer()}>
            {value}
        </div>
    );
};
