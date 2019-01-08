import React from 'react';
import PropTypes from 'prop-types';

class Text extends React.PureComponent {
    render() {
        return <div>{this.props.children}</div>;
    }
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Text;
