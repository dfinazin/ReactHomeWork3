import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const FieldContainer = (prop) => {
    const { field, playerMove } = prop;
    return <FieldLayout field={field} playerMove={playerMove} />;
};

FieldContainer.propTypes = {
    field: PropTypes.array,
    playerMove: PropTypes.func,
};
