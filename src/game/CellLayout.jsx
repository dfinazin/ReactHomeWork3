import styles from './CellLayout.module.css';
export const CellLayout = (prop) => {
    return <div className={styles.cell}>{prop.value}</div>;
};
