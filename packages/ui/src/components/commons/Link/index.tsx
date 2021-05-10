/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) => (color
    ? `color: ${get(theme, `colors.${color}.color`)}`
    : 'color: inherit;')};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

interface ILink {
  /**
   * Conteúdo a ser mostrado no *Link* como, por exemplo, texto ou imagem
   */
  children: JSX.Element;
  /**
   * *URL* a para referenciar no *link*
   */
  href: string;
}
export default function Link({ href, children, ...props }: ILink) {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
