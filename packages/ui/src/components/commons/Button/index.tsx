/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import Link from 'src/components/commons/Link';
import { ButtonStyle, IButtonStyle } from './styles';

interface IButton extends IButtonStyle{
  /**
   * Passe via children o que deseja renderizar dentro do botão
   */
  children: React.ReactNode;
}

export default function Button({
  children,
  disabled = false,
  fullWidth = false,
  ghost = false,
  href,
  onClick = () => {},
  type = 'button',
  variant = 'primary.main',
  ...props
}: IButton) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonStyle
      as={tag}
      disabled={disabled}
      fullWidth={fullWidth}
      ghost={ghost}
      href={href}
      onClick={onClick}
      type={type}
      variant={variant}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
}
