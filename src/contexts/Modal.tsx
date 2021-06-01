/* eslint-disable no-console */
import React, { createContext, useCallback, useEffect, useState } from 'react';

import Modal from 'components/Modal';

import { MODAL_TYPE } from './constants';

interface Props {
  isOpen: boolean;
  toggleOpen: (value: string) => void;
}

const ESCAPE_KEY = 27;

export const GlobalModalContext = createContext<Props>({
  isOpen: false,
  toggleOpen: () => console.log('')
});

export default function GlobalModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const toggleOpen = (type: string) => {
    setModalType(type);
    setIsOpen((prevState) => !prevState);
  };

  const handleKeyDown = useCallback(
    (key) => {
      if (!isOpen) {
        return;
      }

      switch (key.keyCode) {
        case ESCAPE_KEY:
          toggleOpen('');
          break;

        default:
          break;
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <GlobalModalContext.Provider value={{ isOpen, toggleOpen }}>
      {isOpen && <Modal toggle={toggleOpen} type={modalType || MODAL_TYPE.comingSoon} />}
      {children}
    </GlobalModalContext.Provider>
  );
}
