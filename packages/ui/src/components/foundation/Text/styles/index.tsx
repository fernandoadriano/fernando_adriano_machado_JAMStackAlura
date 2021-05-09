import styled from 'styled-components';
import get from 'lodash/get';
import propToStyle from 'src/theme/utils/propToStyle';

export interface TextStyleProps {
  /**
   * Tipo de texto a ser disponibilizado
   */
  variant?: 'title' | 'titleXS' | 'subTitle' | 'paragraph1' | 'paragraph2' | 'smallestException';
}

// ${(props) => TextStyleVariants[String(props.variant)]};
export const TextStyle = styled.span<TextStyleProps>`
   ${(props) => props.theme.typographyVariants[String(props.variant)]};
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')}    
`;
