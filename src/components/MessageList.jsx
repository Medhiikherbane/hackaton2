import Pigeon from './Pigeon';
import styled from 'styled-components';

const MessageListContainer = styled.div`
  margin: 30px 0;
  font-family: "Courier New", Courier, monospace;
`;

const MessageList = ({ messages }) => (
  <MessageListContainer>
    {messages.map((message, index) => (
      <Pigeon key={index} message={message} />
    ))}
  </MessageListContainer>
);

export default MessageList;