import { Section } from '../components';
import { GitHub } from '../assets';

function toggleModal() {
  const modalRoot = document.getElementById('modal-root');
  const backdrop = document.getElementById('backdrop');

  if (Object.values(modalRoot.classList).includes('visible')) {
    [modalRoot, backdrop].forEach((el) => el.classList.add('hidden'));
    [modalRoot, backdrop].forEach((el) => el.classList.remove('visible'));
    return;
  }

  [modalRoot, backdrop].forEach((el) => el.classList.remove('hidden'));
  [modalRoot, backdrop].forEach((el) => el.classList.add('visible'));
  return;
}

export function Contact() {
  return (
    <Section name="contact">
      <h2>Let's work together.</h2>
      <GitHub onClick={toggleModal} />
    </Section>
  );
}
