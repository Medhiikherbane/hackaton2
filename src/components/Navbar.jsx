import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
  return (
    <nav>
      <img className='logo' src="src/assets/pigeon-prime.png" alt="" />
      <ul>
        <li>
          <Link to="/boutique">Boutique</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/messagerie">Messagerie</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
