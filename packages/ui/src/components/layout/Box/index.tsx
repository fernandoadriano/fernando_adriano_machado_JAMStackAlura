import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

interface IBox {
  borderRadiusTheme?: string;
}

const Box = styled.div<IBox>`
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flex')}
    ${propToStyle('flexWrap')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('boxShadow')}
    ${propToStyle('padding')}

    ${propToStyle('width')}
    ${propToStyle('listStyle')}
    ${propToStyle('margin')}
    ${propToStyle('marginLeft')}
    ${propToStyle('marginTop')}
    ${propToStyle('marginBottom')}
    ${propToStyle('marginRight')}
    ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`;

export default Box;
