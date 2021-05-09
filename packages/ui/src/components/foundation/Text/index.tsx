/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Link from 'src/components/commons/Link';
import { WebsitePageContext } from 'src/components/wrappers/WebSitePage/context';

import { TextStyle, TextStyleProps } from './styles';

// interface TextBaseProps {
//   children: JSX.Element;
//   cmsKey?: string;
//   href?: string;
//   tag?: 'div' | 'span' | 'p';
// }

type TextProps = Partial<{
    /**
     * Texto ou elemento a ser renderizado
     */
    children: JSX.Element;
    /**
     * Chave a ser utilizada no CMS para recuperar o texto a ser mostrado na tela
     */
    cmsKey?: string;
    /**
     * Quando informado indica o link a ser utilizado e o elemento é renderizado
     * como uma *tag* <a>
     */
    href?: string;
    /**
     * Tipo de *tag* a ser renderizado. Ignorado quando informado um *href*
     */
    tag?: 'div' | 'span' | 'p';
  }> & Partial<TextStyleProps>;
export default function Text({
  children,
  cmsKey,
  href,
  tag,
  variant,
  ...props
}: TextProps) {
  const websitePageContext = React.useContext(WebsitePageContext);

  const componentContent: string = cmsKey
    ? websitePageContext.getCMSContent(cmsKey)
    : children;

  if (href) {
    return (
      <TextStyle
        as={Link}
        variant={variant}
        href={href}
        {...props}
      >
        {componentContent}
      </TextStyle>
    );
  }

  return (
    <TextStyle
      as={tag}
      variant={variant}
      {...props}
    >
      {componentContent}
    </TextStyle>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  href: undefined,
  cmsKey: undefined,
};
