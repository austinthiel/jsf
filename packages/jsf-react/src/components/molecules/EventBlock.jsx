import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import '../../css/EventBlock.css'

const EventBlock = (props) => {

  return (
    <div className="event_block__wrapper">
      <div className='event_block__title'>
        {props.title}
      </div>
      <div className='event_block__time'>
        {props.time}
      </div>
      <div className='event_block__cost'>
        Cost: {props.cost}
      </div>
      <br />
      <Button onClick={() => console.log('button click')} label='Details' />
    </div>    
  );
};

EventBlock.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired
};

export default EventBlock;