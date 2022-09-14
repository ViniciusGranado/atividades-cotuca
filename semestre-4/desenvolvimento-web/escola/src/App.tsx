import { Footer } from "./components/template/Footer/Footer";
import { Logo } from "./components/template/Logo/Logo";
import { Menu } from "./components/template/Menu/Menu";
import './App.css';
import { Rotas } from "./Rotas";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Menu />

        <Rotas />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
