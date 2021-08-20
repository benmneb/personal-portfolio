import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Modal from './Modal';

const Backdrop = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #fefefe33;
`;

export default function ModalBackdrop() {
  const [isOpen, setIsOpen] = useState(true);

  const modalRoot = document.getElementById('modal-root');
  const backdrop = document.getElementById('backdrop');

  useEffect(() => {
    setIsOpen(true);
    return () => setIsOpen(false);
  }, [modalRoot.classList]);

  function toggleModal() {
    if (Object.values(modalRoot.classList).includes('visible')) {
      setIsOpen(false);
      [modalRoot, backdrop].forEach((el) => el.classList.add('hidden'));
      [modalRoot, backdrop].forEach((el) => el.classList.remove('visible'));
      return;
    }

    setIsOpen(true);
    [modalRoot, backdrop].forEach((el) => el.classList.remove('hidden'));
    [modalRoot, backdrop].forEach((el) => el.classList.add('visible'));
    return;
  }

  return (
    <Backdrop id="backdrop" onClick={toggleModal}>
      {isOpen && <Modal />}
    </Backdrop>
  );
}
