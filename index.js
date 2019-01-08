import React from 'react'

class Text extends React.PureComponent {
    render() {
        return <div>{this.props.children}</div>
    }
}

export default Text;
