import styled, { css } from 'styled-components';

export interface IModalStyle {
  isOpen?: boolean;
}

export const ModalStyle = styled.div<IModalStyle>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: .3s;
  z-index: 100;

  ${({ isOpen }) => (
    isOpen
      ? css`opacity: 1;
          pointer-events: all;
      `
      : css`opacity: 0;
          pointer-events: none;
      `
  )};
`;
