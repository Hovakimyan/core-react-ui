import {PureComponent} from 'react';
import styled from 'styled-components';

const styledTextField = styled.textarea`
    display: flex;
`;

export default class TextField extends PureComponent {
    state = {
        value: '',
    };
    
    handleChange = (state) => {
        this.setState({
            value: state.value,
        });
    };
    
    render() {
        return <styledTextField
                value={this.state.value}
                onChange={this.handleChange}
            />;
    }
}
