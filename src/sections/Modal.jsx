import { useEffect, useRef } from 'react';

import styled from 'styled-components';

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const ModalCard = styled.section`
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 80vh;
  margin: 72px;
  background-color: #fafafa;
  border-radius: 32px;
  box-shadow: 0 0 104px 16px #000c;
`;

export default function Modal() {
  const modalCard = useRef();

  useEffect(() => {
    modalCard.current = document.getElementById('modalCard');
    disableBodyScroll(modalCard);
    return () => {
      enableBodyScroll(modalCard);
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <ModalCard id="modalCard" onClick={(e) => e.stopPropagation()}>
      hi there im a modal
    </ModalCard>
  );
}
