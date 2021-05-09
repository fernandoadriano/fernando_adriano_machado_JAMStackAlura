import get from 'lodash/get';
import styled, { css } from 'styled-components';
import breakpointsMedia from 'src/theme/utils/breakpointsMedia';
import propToStyle from 'src/theme/utils/propToStyle';

export interface ButtonStyleProps {
  /**
   * Variação de cores a ser utilizada no botão
   */
  variant?: 'primary.main' | 'secondary.main' | 'tertiary.main';
  /**
   * Indeca se o botão deve ser renderizado utilizando todo o espaço
   * disponível.
   */
  fullWidth?: boolean;
  /**
   * Quando TRUE o botão é renderizado usando somente as bordas
   */
  ghost?: boolean;
}

const ButtonStyleDefault = css<ButtonStyleProps>`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonStyleGhost = css<ButtonStyleProps>`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    background: transparent;
`;

export const ButtonStyle = styled.button<ButtonStyleProps>`
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
