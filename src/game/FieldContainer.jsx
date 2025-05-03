import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const FieldContainer = (prop) => {
    const { field, onSetCellId } = prop;
    return <FieldLayout field={field} onSetCellId={onSetCellId} />;
};

FieldContainer.propTypes = {
    field: PropTypes.array,
    onSetCellId: PropTypes.func,
};
