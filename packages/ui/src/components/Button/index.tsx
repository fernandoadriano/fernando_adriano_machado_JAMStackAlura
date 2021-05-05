import React from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  /**
   * Botão com as bordas arredondadas
   */
  rounded?: boolean,
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: #a0a0a0;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  padding: 5px 10px;
  border-color: #303030;
  border-radius: ${({ rounded }) => (rounded ? '10px' : '0px')};
  opacity: 50%;
`;

const ButtonBase = {
  default: StyledButton,
  ghost: styled(StyledButton)`
    background-color: transparent;
    color: #303030;
  `,
};

interface ButtonPropsBase {
  children: React.ReactNode;
  /**
   * Essa prop usa o disabled padrão do HTML e aplica um CSS junto
   */
  disabled?: boolean;
  /**
   * Evento a ser processado no caso de click
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  /**
   * Variantes do botão, padrao default
   */
  variant?: 'default' | 'ghost';
}

type ButtonProps = ButtonPropsBase & StyledButtonProps;

export default function Button({
  children, disabled, onClick, rounded, type, variant,
}: ButtonProps): JSX.Element {
  const Botao = ButtonBase[variant || 'default'];

  if (!Botao) throw new Error('Invalid variant used to button');

  return (
    <Botao
      disabled={disabled}
      onClick={onClick}
      rounded={rounded}
      type={type}
    >
      {children}
    </Botao>
  );
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
  rounded: false,
  type: 'submit',
  variant: 'default',
};
