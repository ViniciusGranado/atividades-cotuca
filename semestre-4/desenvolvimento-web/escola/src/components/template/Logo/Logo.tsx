import logo from '../../../assets/logo_escola.png';
import './Logo.css';

export const Logo = () => {
  return (
    <aside className="logo">
      <a href="/" className="logo">
        <img src={logo} alt="Logo" />
      </a>
    </aside>
  );
}
