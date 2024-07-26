import styled from 'styled-components';

const PigeonContainer = styled.div`
  border: 2px solid #000;
  padding: 20px;
  margin: 10px 0;
  background-color: #FFFACD; /* Couleur de fond plus visible */
  font-family: "Courier New", Courier, monospace;
  word-wrap: break-word;  /* Assure que le texte reste dans le cadre */
`;

const MessageTitle = styled.h2`
  color: black; /* Le texte reste noir */
`;

const MessageText = styled.p`
  color: red; /* Change la couleur du texte envoyé */
`;

const Pigeon = ({ message }) => (
  <PigeonContainer>
    <MessageTitle>{message.pigeon} a un message pour vous !</MessageTitle>
    <MessageText>{message.message}</MessageText>
  </PigeonContainer>
);

export default Pigeon;