import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
  return (
    <nav>
      <Link to="/Birds">
      <img className='logo' src="src/assets/images/logo-pigeon.png" alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/Magasin">Boutique</Link>
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
