import React from 'react';
import colorTypes from '../../../constants/colorTypes';
import { useGlobalContext } from '../../../context';
import PokemonStatsTemplate from './PokemonStatsTemplate';
import './Card.scss';

const PokemonCard = ({
  id,
  name,
  height,
  picture,
  pictureSub,
  health,
  attack,
  defense,
  speed,
  type,
  abilities,
}) => {
  const { catchedPokemons } = useGlobalContext();
  const isCatched = catchedPokemons.some((pokemon) => pokemon.id === id);

  return (
    <div className='card '>
      <div
        className={
          isCatched
            ? 'card__side card__side__catched-pokemon  card__side--front'
            : 'card__side  card__side--front'
        }
      >
        <div className='card__picture'>
          <img
            className='card__pokeImg'
            src={picture || pictureSub}
            alt={name}
          />
        </div>
        <div className='card__pokemon__name'>
          <span className='card__pokemon__name-span'>{name}</span>
        </div>
      </div>

      <div
        className={
          isCatched
            ? 'card__side card__side__catched-pokemon--back  card__side--back'
            : 'card__side  card__side--back'
        }
      >
        <div className='card__pokemon-details'>
          <div className='card__pokeheader'></div>
          <figure className='card__pokemon-details-pic-back'>
            <img
              className='card__pokemon-details-pic-back--img'
              src={picture}
              alt={name}
            />
          </figure>

          <div className='card__pokemon-atributes'>
            <PokemonStatsTemplate
              templateName='height'
              value={`${(height * 0.1).toFixed(2)}m`}
            />
            <PokemonStatsTemplate templateName='attack' value={attack} />
            <PokemonStatsTemplate templateName='defense' value={defense} />
            <PokemonStatsTemplate templateName='health' value={health} />
            <PokemonStatsTemplate templateName='speed' value={speed} />

            <li className='card__pokemon-atribute'>
              <div className='card__pokemon-atribute card__pokemon-atribute--types'>
                type:
                {type.map((typeName) => (
                  <p
                    className='card__pokemon-atribute card__pokemon-atribute--type'
                    key={typeName}
                    style={{ backgroundColor: colorTypes[typeName] }}
                  >
                    <span>{typeName}</span>
                  </p>
                ))}
              </div>
            </li>

            <PokemonStatsTemplate templateName='abilities' value={abilities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
