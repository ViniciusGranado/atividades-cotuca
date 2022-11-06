import './UserCard.css';

interface UserCardProps {
  ra: string;
  nome: string;
  codCurso: string;
  urlImg: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  ra,
  nome,
  codCurso,
  urlImg,
}) => {
  return (
    <div className="UserCard">
      <div className='profile-picture'>
        <img src={urlImg} alt={`Foto de perfil de: ${nome}`} />
      </div>
      <p className='ra'>{ra}</p>
      <p className='nome'>{nome}</p>
      <p className='curso'>Curso: {codCurso}</p>
    </div>
  );
}
