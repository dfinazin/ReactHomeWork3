import styles from './GameLayout.module.css';
import { InfoLayout } from './InfoLayout';
import { FieldLayout } from './FieldLayout';
export const GameLayout = () => {
    return (
        <div className={styles.game}>
            <InfoLayout />
            <FieldLayout />
            <div>3</div>
        </div>
    );
};
