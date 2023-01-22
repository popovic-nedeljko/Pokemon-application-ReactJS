import React from 'react';
import colorTypes from '../components/colorTypes';
import { useGlobalContext } from '../context';

const PokemonCard = ({
  id,
  name,
  height,
  picture,
  pictureSub,
  Hp,
  attack,
  defense,
  speed,
  type,
  ability,
}) => {
  const { catchedPokemons } = useGlobalContext();

  return (
    <div className='card '>
      <div
        className={
          catchedPokemons.some((pokemon) => pokemon.id === id)
            ? 'card__side card__side__catched-pokemon  card__side--front'
            : 'card__side  card__side--front'
        }
      >
        <div className='card__picture'>
          <img
            className='card__pokeImg'
            src={picture || pictureSub}
            alt='img'
          />
        </div>

        <div className='card__click-instructions'></div>
        <div className='card__pokemon__name'>
          <span className='card__pokemon__name-span'>{name}</span>
        </div>
      </div>

      <div
        className={
          catchedPokemons.some((pokemon) => pokemon.id === id)
            ? 'card__side card__side__catched-pokemon--back  card__side--back'
            : 'card__side  card__side--back'
        }
      >
        <div className='card__pokemon-details'>
          <div className='card__pokeheader'></div>

          <div className='card__pokemon-details__picture--back'>
            <figure className='card__pokemon-details-pic-back'>
              <img
                className='card__pokemon-details-pic-back--img'
                src={picture}
                alt='pict'
              />
            </figure>
          </div>

          <div className='card__pokemon-atributes'>
            <li className='card__pokemon-atribute'>
              <p className='card__pokemon-atribute card__pokemon-atribute--height'>
                height:
                <span> {(height * 0.1).toFixed(2)}m</span>
              </p>
            </li>
            <li className='card__pokemon-atribute'>
              <p className='card__pokemon-atribute card__pokemon-atribute--attack'>
                attack: <span> {attack}</span>
              </p>
            </li>
            <li className='card__pokemon-atribute'>
              <p className='card__pokemon-atribute card__pokemon-atribute--deffense'>
                deffense: <span> {defense}</span>
              </p>
            </li>
            <li className='card__pokemon-atribute'>
              <p className='card__pokemon-atribute card__pokemon-atribute--health'>
                health: <span> {Hp}</span>
              </p>
            </li>
            <li className='card__pokemon-atribute'>
              <p className='card__pokemon-atribute card__pokemon-atribute--speed'>
                speed: <span> {speed}</span>
              </p>
            </li>

            <li className='card__pokemon-atribute'>
              <div className='card__pokemon-atribute card__pokemon-atribute--types'>
                type:
                {type.map((type, index) => {
                  return (
                    <p
                      className='card__pokemon-atribute
                    card__pokemon-atribute--type'
                      key={index}
                      style={{ backgroundColor: colorTypes[type] }}
                    >
                      <span>{type}</span>
                    </p>
                  );
                })}
              </div>
            </li>

            <li className='card__pokemon-atribute'>
              <p className='card__pokemon-atribute card__pokemon-atribute--abilities'>
                abilities:<span>{ability}</span>
              </p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
