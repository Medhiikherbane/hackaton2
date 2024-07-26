import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Léon from '../public/Léon.png';
import Raymonde from '../public/Raymonde.png';
import Abdou from '../public/Abdou.png';

const FormContainer = styled.form`
  margin: 30px ;
  padding: 30px;
  border: 1px solid #000;
  background-color: #FFFFE0;
  font-family: "Courier New", Courier, monospace;
`;

const TextArea = styled.textarea`
  width: calc(100% - 24px);
  height: 100px;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 2px solid #000;
  resize: none;
  font-family: "Courier New", Courier, monospace;
`;

const Select = styled.select`
  width: calc(100% - 24px);
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 2px solid #000;
  font-family: "Courier New", Courier, monospace;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0000FF;
  color: white;
  border: 2px solid #000;
  cursor: pointer;
  font-family: "Courier New", Courier, monospace;

  &:hover {
    background-color: #0000CC;
  }
`;

const flyAway = keyframes`
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-100vh) scale(0); }
`;

const PigeonImage = styled.img`
  width: 1000px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ animate }) => animate && css`
    animation: ${flyAway} 2s forwards;
  `}
`;

const MessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState('');
  const [pigeon, setPigeon] = useState('Pierre le Pigeon');
  const [showPigeon, setShowPigeon] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setShowPigeon(true);
    setTimeout(() => {
      console.log('Sending message:', { message, pigeon });
      sendMessage({ message, pigeon });
      setMessage('');
      setShowPigeon(false);
    }, 2000); // Durée de l'animation
  };

  const pigeonImages = {
    'Léon le Pigeon': Léon,
    'Raymonde la Colombe': Raymonde,
    'Abdou le Hibou': Abdou,
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <label>Message :</label>
        <TextArea value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <div>
        <label>Choisissez votre pigeon :</label>
        <Select value={pigeon} onChange={(e) => setPigeon(e.target.value)}>
          <option>Léon le Pigeon</option>
          <option>Raymonde la Colombe</option>
          <option>Abdou le Hibou</option>
        </Select>
      </div>
      <Button type="submit">Envoyer</Button>
      {showPigeon && <PigeonImage src={pigeonImages[pigeon]} animate={showPigeon} alt={pigeon} />}
    </FormContainer>
  );
};

export default MessageForm;