import React from 'react';
import styled from 'styled-components';

const styledTextField = styled.textarea`
    display: flex;
`;

export default class TextField extends React.PureComponent {
    state = {
        value: '',
    };
    
    handleChange = (state) => {
        this.setState({
            value: state.value,
        });
    };
    
    render() {
        return (
            <styledTextField
                value={this.state.value}
                onChange={this.handleChange}
            />
        );
    }
}
