interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <header className="header">
      <h2>{title}</h2>
    </header>
  )
}