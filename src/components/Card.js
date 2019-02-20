import React from 'react';
import './Card.css';

function Card({ content }) {
  const {
    price,
    header,
    infosList,
    buttonMessage,
    isButtonOutline
  } = content;
  let infos = infosList.map((info) => 
    <li>{info}</li>
  );
  return (
    <div className={`
      card
      mb-4
      shadow-sm
    `}>
      <div className={`card-header`}>
        <h4 className={`
          my-0
          font-weight-normal
        `}>
          {header}
        </h4>
      </div>
      <div className={`card-body`}>
        <h1 className={`
          card-title
          pricing-card-title
        `}>
          ${price} <small className={`text-muted`}>/ mo</small>
        </h1>
        <ul className={`
          list-unstyled
          mt-3
          mb-4
        `}>
          {infos}
        </ul>
        <button type='button' className={`
          btn
          btn-lg
          btn-block
          ${isButtonOutline ? 'btn-outline-primary' : 'btn-primary'}
        `}>
          {buttonMessage}
        </button>
      </div>
    </div>
  );
}

export default Card;
