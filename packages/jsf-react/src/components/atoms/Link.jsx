import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import '../../css/Link.css';


const Link = (props) => {
  return (
    <span
      className={classNames(
        props.className || 'Link-base', { 
          'Link-disabled': props.disabled 
        })
      }
      onClick={!props.disabled ? props.onClick : null}
    >
      {/* TODO make this children instead?*/}
      {props.label} 
    </span> 
  );
};

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

Link.defaultProps = {
  disabled: false
};

export default Link;