import React from 'react';
import logo from '../../img/pokeball-icon.png';
import './Footer.scss';
const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer__logo-box'>
          <picture className='footer__logo'>
            <img alt='Full logo' src={logo} />
          </picture>
        </div>

        <div className='footer__copyright'>
          <p className='footer__copyright-paragraf'>
            &copy; Copyright by
            <a
              className='ln-link'
              target='_blank'
              href='https://github.com/popovic-nedeljko'
              rel='noreferrer'
            >
              Nedeljko Popovic
            </a>
            . Welcome to PokemonApp. Have a nice time browsing for your favorite
            pokemons.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
