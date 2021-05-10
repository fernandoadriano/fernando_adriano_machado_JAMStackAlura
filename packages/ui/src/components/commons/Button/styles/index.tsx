import React from 'react';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import breakpointsMedia from 'src/theme/utils/breakpointsMedia';
import propToStyle from 'src/theme/utils/propToStyle';

export interface IButtonStyle {
  /**
   * Essa prop usa o disabled padrão do HTML e aplica um CSS junto
   */
   disabled?: boolean;
  /**
   * Indeca se o botão deve ser renderizado utilizando todo o espaço
   * disponível.
   */
  fullWidth?: boolean;
  /**
   * Quando TRUE o botão é renderizado usando somente as bordas
   */
  ghost?: boolean;
  /**
   * Referencia para qual url deve enviar a requisição quando o botão
   * for pressionado fora de um formulário.
   */
   href?: string;
  /**
   * Função a ser executada quando clicar o botão
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /**
   * Tipo de elemento a ser renderizado
   */
   type?: 'button' | 'submit' | 'reset';
  /**
   * Variação de cores a ser utilizada no botão
   */
  variant?: 'primary.main' | 'secondary.main' | 'tertiary.main';
}

const ButtonStyleDefault = css<IButtonStyle>`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonStyleGhost = css<IButtonStyle>`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    background: transparent;
`;

export const ButtonStyle = styled.button<IButtonStyle>`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    transition: ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    
    ${breakpointsMedia({
    xs: css`
            ${(props) => props.theme.typographyVariants.smallestException}
        `,
    md: css`
            padding: 12px 43px;
            ${(props) => props.theme.typographyVariants.paragraph1}
        `,
  })}

    ${propToStyle('margin')}
    ${propToStyle('marginTop')}
    ${propToStyle('display')}

    &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

    ${({ ghost }) => (ghost ? ButtonStyleGhost : ButtonStyleDefault)};
    &:hover,
    &:focus {
        opacity: .5;
    }
`;
