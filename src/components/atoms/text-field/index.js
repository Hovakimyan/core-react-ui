import React from 'react';
import styled from 'styled-components';

const StyledTextField = styled.textarea`
    display: flex;
`;

const TextField = props =>
  <StyledTextField
      {...props}
  />;

export default React.memo(TextField);
