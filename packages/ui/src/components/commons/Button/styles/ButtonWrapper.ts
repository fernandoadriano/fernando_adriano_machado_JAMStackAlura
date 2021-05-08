import get from 'lodash/get';
import styled, { css } from 'styled-components';
import breakpointsMedia from 'src/theme/utils/breakpointsMedia';
import { TextStyleVariants } from 'src/components/foundation/Text';
import propToStyle from 'src/theme/utils/propToStyle';

export interface ButtonWrapperProps {
  variant?: 'primary.main' | 'secondary.main' | 'tertiary.main';
  fullWidth?: boolean;
  ghost?: boolean;
}

const ButtonDefault = css`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonGhost = css`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    background: transparent;
`;

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    transition: ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    
    ${breakpointsMedia({
    xs: css`
            ${TextStyleVariants.smallestException}
        `,
    md: css`
            padding: 12px 43px;
            ${TextStyleVariants.paragraph1}
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

    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};
    &:hover,
    &:focus {
        opacity: .5;
    }
`;
