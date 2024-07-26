import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #0000FF;
  padding: 10px;
  color: white;
  text-align: center;
  border-bottom: 2px solid #000;
  width: 100%;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Pigeon Express</h1>
    <p>Le service de Pigeonnerie vintage avec une touche moderne</p>
  </HeaderContainer>
);

export default Header;