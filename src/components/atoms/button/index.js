import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    color: red;
`;

export default function Button(props) {
    return(
        <StyledButton>
            {props.children}
        </StyledButton>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

