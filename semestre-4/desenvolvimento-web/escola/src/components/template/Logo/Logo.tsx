import { Link } from 'react-router-dom';
import logo from '../../../assets/logo_escola.png';
import './Logo.css';

export const Logo = () => {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
    </aside>
  );
}
