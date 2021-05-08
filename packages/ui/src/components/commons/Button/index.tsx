/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ButtonWrapper, ButtonWrapperProps } from './styles/ButtonWrapper';

interface ButtonBaseProps {
  /**
   * Passe via children o que deseja renderizar dentro do botão
   */
  children: React.ReactNode;
  /**
   * Essa prop usa o disabled padrão do HTML e aplica um CSS junto
   */
  disabled?: boolean;
  /**
   * Função a ser executada quando clicar o botão
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /**
   * Tipo de elemento a ser renderizado
   */
  type?: 'button' | 'submit' | 'reset';
}

type ButtonProps = Partial<ButtonBaseProps> & Partial<ButtonWrapperProps>;

export default function Button({
  children,
  disabled,
  fullWidth,
  ghost,
  type,
  variant,
  ...props
}: ButtonProps) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper
      as={type}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      ghost={ghost}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  variant: 'primary.main',
  disabled: false,
  fullWidth: false,
  ghost: false,
  onClick: () => {},
  type: 'submit',
};
