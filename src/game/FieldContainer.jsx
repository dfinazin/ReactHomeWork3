import { FieldLayout } from './FieldLayout';

export const FieldContainer = (prop) => {
    const { field, onSetCellId } = prop;
    return <FieldLayout field={field} onSetCellId={onSetCellId} />;
};
