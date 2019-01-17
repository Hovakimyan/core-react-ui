import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../atoms/text';
import Input from '../../atoms/input';

/**
 * Numeric input field. The component will handle stuff with number user inputs.
 */

class NumericInput extends React.PureComponent {

  static defaultProps = {
    errorMessage: 'Validation not passed',
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
  };


  /**
   * @param {Object} propTypes
   * @param {string} propTypes.defaultErrorMessage ['Validation not passed']- If no message was passed
   * Component will use this one.
   */
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
  }

  /**
   * @param {Object} state - component default state
   * @param {boolean} state.hasError - error detecting flag
   */
  state = {
    hasError: false,
  }

  /**
   * OnChange handler will propagate event to the parent component(controlled state) or
   * if no handlers are passed it will make the data flow for own(uncontrolled)
   */

  onChange = event => {
    const value = event.target.value;
    const { min, max } = this.props;

    const hasError = value >= min && value <= max;

    if (this.props.onChange) {
      this.props.onChange(event);
    } else {
      this.setState({
        value,
        hasError,
      });
    }
  }

  render() {
    return (
      <div>
        <Input
          type="number"
          value={this.props.value || this.state.value}
          onChange={this.onChange}
        />
        {
          this.state.hasError &&
          <Text>
            this.props.errorMessage
          </Text>
        }
      </div>
    );
  }
}

export default NumericInput;
