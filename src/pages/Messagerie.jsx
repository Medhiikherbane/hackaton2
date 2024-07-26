import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import MessageForm from '../components/MessageForm';
import MessageList from '../components/MessageList';
import '../pages/Messagerie.css';
import Navbar from '../components/Navbar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
`;

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  background-color: #f0e68c; /* Couleur de fond rétro */
  padding: 20px;
  margin-top: 20px;
  border: 2px solid #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
`;

const EightiesButton = styled.button`
  background-color: #ff0080;
  border: 2px solid #000;
  color: white;
  font-family: "Courier New", Courier, monospace;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff00bf;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  }

  &:active {
    background-color: #ff0040;
  }
`;

const Messagerie = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    console.log('Message received in App:', message);
    setMessages(prevMessages => [...prevMessages, message]);
  };

  const handleEightiesButtonClick = () => {
    alert("Années 80 vibes!");
  };

  return (
    <>
    <Navbar/>
    <AppContainer>
      <Header />
      <ContentWrapper>
        <MessageForm sendMessage={sendMessage} />
        <MessageList messages={messages} />
        <EightiesButton onClick={handleEightiesButtonClick}>
          Années 80
        </EightiesButton>
      </ContentWrapper>
    </AppContainer>
    </>
  );
};

export default Messagerie;