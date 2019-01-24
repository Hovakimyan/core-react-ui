import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    display: flex;
    color: #fafafa;
    height: 36px;
    box-sizing: border-box;
    padding: 0 14px;
    border: 1px solid rgba(#ffffff, 0.19);
    outline: none;
    background: rgb(23, 28, 44);
    font-weight: normal;
    font-size: 12px;
    color: #fafafa;
    caret-color: #fafafa;
    transition: border-color 0.23s, background-color 0.23s;
`;

const Input = props => {
    const { children, ...customProps } = props;
    <StyledInput value={children} {...customProps} />
};
console.log(process.env.REACT_APP_TEST_VAR);

export default React.memo(Input);
