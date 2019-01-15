import React from 'react';
import styled from 'styled-components';

const StyledTextField = styled.textarea`
    display: flex;
`;

export default function TextField(props){
    return (
        <StyledTextField
            {...props}
        />
    );
}
