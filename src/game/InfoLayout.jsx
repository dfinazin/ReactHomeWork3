import styles from './InfoLayout.module.css';

export const InfoLayout = ({ children }) => {
    return <div className={styles.info}>{children}</div>;
};
