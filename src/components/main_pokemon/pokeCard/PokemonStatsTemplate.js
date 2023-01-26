import React from 'react';
import './Card.scss';

const PokemonStatsTemplate = ({ templateName, value }) => {
  return (
    <li className='card__pokemon-atribute'>
      <p
        className={`card__pokemon-atribute card__pokemon-atribute--${templateName}`}
      >
        {templateName}: <span> {value}</span>
      </p>
    </li>
  );
};

export default PokemonStatsTemplate;
