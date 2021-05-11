/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Link from '../../commons/Link';
import { WebsitePageContext } from '../../wrappers/WebSitePage/context';
import { TextStyle, ITextStyle } from './styles';

export interface IText extends ITextStyle {
  /**
   * Texto ou elemento a ser renderizado
   */
  children: JSX.Element | string | undefined;
  /**
   * Chave a ser utilizada no CMS para recuperar o texto a ser mostrado na tela
   */
  cmsKey?: string;
  role?: string;
  /**
   * Tipo de *tag* a ser renderizado. Ignorado quando informado um *href*
   */
  tag?: 'a' | 'div' | 'h1' | 'p' | 'span';
}

export default function Text({
  children,
  cmsKey,
  color = 'primary.main',
  href,
  tag = 'span',
  variant = 'paragraph1',
  ...props
}: IText) {
  const websitePageContext = React.useContext(WebsitePageContext);

  const componentContent: string = cmsKey
    ? websitePageContext.getCMSContent(cmsKey)
    : children;

  if (href) {
    return (
      <TextStyle
        as={Link}
        color={color}
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
      color={color}
      variant={variant}
      {...props}
    >
      {componentContent}
    </TextStyle>
  );
}
