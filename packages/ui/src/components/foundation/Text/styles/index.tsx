import styled from 'styled-components';
import get from 'lodash/get';
import propToStyle from '../../../../theme/utils/propToStyle';

export interface ITextStyle {
  children: any;
  /**
   * Ajusta a cor da fonte
   */
  color?: 'error.main' | 'primary.main' | 'secondary.main' | 'tertiary.main' | 'tertiary.light';
  /**
   * Quando informado indica o link a ser utilizado e o elemento é renderizado
   * como uma *tag* <a>
   */
  href?: string;
  marginBottom? : string | object;
  /**
   * Tipo de texto a ser disponibilizado
   */
  variant?: 'title' | 'titleXS' | 'subTitle' | 'paragraph1' | 'paragraph2' | 'smallestException';
}

// ${(props) => TextStyleVariants[String(props.variant)]};
export const TextStyle = styled.span<ITextStyle>`
   ${(props) => props.theme.typographyVariants[String(props.variant)]};
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')}    
`;
