import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../../css/Button.css';

const Button = (props) => {
  const buttonClasses = classNames('Button-base', {
    // Button colors
    'Button-red': props.color === 'red',

    // Button sizes
    'Button-small': props.size ==='small',
    'Button-medium': props.size === 'medium',
    'Button-large': props.size === 'large',
    'Button-xl': props.size === 'xl'
  });
  return (
    <button 
      className={buttonClasses}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.string
};

Button.defaultProps = {
  disabled: false,
  size: 'small'
};

export default Button;