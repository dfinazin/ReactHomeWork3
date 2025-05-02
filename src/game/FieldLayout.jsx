import styles from './FieldLayout.module.css';
import { CellLayout } from './CellLayout';
export const FieldLayout = () => {
    const cellsArray = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
    ];
    return (
        <>
            <div className={styles.field}>
                {cellsArray.map((rowEl, rowIndex) => {
                    return rowEl.map((cellEl, columnIndex) => {
                        return <CellLayout key={`${rowIndex}${columnIndex}`} value={cellEl} />;
                    });
                })}
            </div>
        </>
    );
};
