import styles from './FieldLayout.module.css';
import { CellLayout } from './CellLayout';
export const FieldLayout = (prop) => {
    const { field, onSetCellId } = prop;

    return (
        <>
            <div className={styles.field}>
                {field.map((el, index) => {
                    return <CellLayout key={index} cellId={index} value={el} onSetCellId={onSetCellId} />;
                })}
            </div>
        </>
    );
};
