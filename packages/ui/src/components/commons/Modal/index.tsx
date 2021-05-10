import React from 'react';
import { motion } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';
import { ModalStyle, IModalStyle } from './styles';

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

interface IModal extends IModalStyle {
  onClose: () => void;
  children: any;
}

export default function Modal({
  isOpen = false,
  onClose,
  children,
}: IModal) {
  return (
    <ModalStyle
      isOpen={isOpen}
      onClick={(event) => {
        // @ts-ignore
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');

        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}

      <motion.div
        variants={{
          opened: {
            x: 0,
          },
          closed: {
            x: '100%',
          },
        }}
        animate={isOpen ? 'opened' : 'closed'}
        transition={{
          duration: 0.3,
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
      </motion.div>
    </ModalStyle>
  );
}
