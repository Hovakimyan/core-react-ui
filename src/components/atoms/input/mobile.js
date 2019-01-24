import React from 'react';
import { TextInput } from 'react-native';

// const StyledInput = styled.TextInput`
//   Some styles for mobile input
// `;

const Input = props => {
    const { children, ...customProps } = props;
    <TextInput value={children} {...customProps} />
};

export default Input;
