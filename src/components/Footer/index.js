import React from 'react';
import Logo from '../../assets/img/Logo.png'
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <img className='Logo' src={Logo} alt='PittaFlix' />
      <p> Orgulhosamente criado durante a Imersão React da Alura </p>
    </FooterBase>
  );
}

export default Footer;
