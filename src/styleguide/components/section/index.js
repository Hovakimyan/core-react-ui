import React from 'react';
import PropTypes from 'prop-types';

export function SectionsRenderer({children}) {
    return (
        <div>
            {children}
        </div>
    );
}

SectionsRenderer.propTypes = {
    children: PropTypes.node,
};

export default SectionsRenderer;
