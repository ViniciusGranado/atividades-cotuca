import { Footer } from "./components/template/Footer/Footer";
import { Logo } from "./components/template/Logo/Logo";
import { Main } from "./components/template/Main/Main";
import { Menu } from "./components/template/Menu/Menu";
import './App.css';
import { CrudAluno } from "./crudAluno/CrudAluno";

function App() {
  return (
    <div className="App">
      <Logo />
      <Menu />

      <CrudAluno />

      <Footer />
    </div>
  );
}

export default App;
