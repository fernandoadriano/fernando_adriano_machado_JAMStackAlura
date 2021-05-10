import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import Button from '../Button';
import MenuStyle from './styles';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
];

interface IMenu {
  onCadastrarClick?: () => {};
}
export default function Menu({ onCadastrarClick }: IMenu) {
  return (
    <MenuStyle>
      <MenuStyle.LeftSide>
        <Logo size="small" />
      </MenuStyle.LeftSide>
      <MenuStyle.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuStyle.CentralSide>
      <MenuStyle.RightSide>
        <Button ghost variant="secondary.main" href="/app/login/">
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuStyle.RightSide>
    </MenuStyle>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
