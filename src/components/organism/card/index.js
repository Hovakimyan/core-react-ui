import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {
        return <div>{this.props.children}</div>;
    }
}

export default Card;
