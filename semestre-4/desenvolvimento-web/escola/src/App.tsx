import { Footer } from "./components/template/Footer/Footer";
import { Logo } from "./components/template/Logo/Logo";
import { Main } from "./components/template/Main/Main";
import { Menu } from "./components/template/Menu/Menu";
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <Menu />

      <Main title="Bem Vindo!">
        <div>Cadastro de alunos, cursos e carômetro</div>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
