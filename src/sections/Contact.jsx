import { useState } from 'react';

import styled, { css } from 'styled-components';

import emailjs, { init } from 'emailjs-com';

import { BiMailSend } from 'react-icons/bi';

import { Section } from '../components';
import { Button } from '../utils';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing(2)};
  width: 600px;
`;

const sharedStyles = css`
  font-family: inherit;
  font-size: 2rem;
  text-align: center;
  color: white;
  border: 2px solid #fff7;
  border-radius: ${(props) => props.theme.spacing(1)};
  padding: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.contact + 'dd'};
  transition: ${(props) =>
    `all ${props.theme.transitions.shorter} ease-in-out`};

  ::placeholder {
    color: #fff7;
  }

  :focus::placeholder {
    color: transparent;
  }

  :focus {
    outline: none;
    border-color: white;
  }
`;

const TextArea = styled.textarea`
  ${sharedStyles}
  resize: none;
  width: 100%;
`;

const TextField = styled.input`
  ${sharedStyles}
  width: 75%;
`;

const SubmitButton = styled(Button)`
  cursor: pointer;
`;

export function Contact() {
  const [proposal, setProposal] = useState('');
  const [email, setEmail] = useState('');
  const [pending, setPending] = useState(false);
  const [pendingMessage, setPendingMessage] = useState(null);

  init('user_UFoCeeeYgIN4JVlxBwB30');

  function handleSubmit() {
    setPending(true);
    emailjs
      .send('service_fg3ablh', 'contact', {
        message: proposal,
        return_address: email,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setPendingMessage('Success');
          setProposal('');
          setEmail('');
          setTimeout(() => {
            setPendingMessage(null);
            setPending(false);
          }, 2000);
        },
        (err) => {
          console.log('FAILED...', err);
          setPending(false);
        }
      )
      .catch((error) => {
        console.log(error.message);
        setPending(false);
      });
  }

  return (
    <Section name="contact">
      <h2>Let's work together.</h2>
      <Form>
        <TextArea
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
          placeholder="Your intriguing proposal"
          rows="3"
          required
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your email"
          required
        />
        <SubmitButton
          primary
          variant="contact"
          fontSize="1.8rem"
          icon={<BiMailSend />}
          onClick={handleSubmit}
          pending={pending}
          pendingMessage={pendingMessage || 'Sending...'}
        >
          Send
        </SubmitButton>
      </Form>
    </Section>
  );
}
