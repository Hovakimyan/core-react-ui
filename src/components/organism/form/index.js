import React from 'react';
import PropTypes from 'prop-types';

import Button from 'atoms/button';

class Form extends React.PureComponent {

  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.node.isRequired,
    ]),
    cancelText: PropTypes.string,
    submitText: PropTypes.string,
  }

  static defaultProps = {
    cancelText: 'Cancel',
    submitText: 'Submit',
  }

  render() {
    return (
      <div className="form">
        <div className="form-header">
          {this.props.title}
        </div>
        <div className="form-footer">
          <Button onClick={this.props.onCancel}>
            {this.props.cancelText}
          </Button>
          <Button onClick={this.props.onSubmit}>
            {this.props.submitText}
          </Button>
        </div>
      </div>
    );
  }
}

export default Form;
