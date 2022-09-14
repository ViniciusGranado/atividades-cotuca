import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
  return (
    <nav className='menu'>
      <Link to="/alunos">
        Alunos
      </Link>
      <Link to="/cursos">
        Cursos
      </Link>
      <Link to="/carometro">
        Carômetro
      </Link>
    </nav>);
}