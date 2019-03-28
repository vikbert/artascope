import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title, description, date}) => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-picture">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt=""/>
      </div>

      <div className="cd-timeline-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="cd-date">{date}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Card;
