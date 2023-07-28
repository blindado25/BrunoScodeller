import logo from './logo.svg';
import './App.css';
import './styles/orkut.css';
import { Menu } from './components/Menu/menu.js';
import { Esquerda } from './components/Esquerda/Esquerda.js';
import { Centro } from "./components/Centro/Centro.js";
import { Direita } from './components/Direita/Direita.js';

function App() {
  return (
    <div className="App">

      <Menu />

      <div className="espaco"></div>

      <div className="fundo">

        <div className="alinhamento">

          <Esquerda />

          <Centro />

          <Direita />

        </div>
      </div>


    </div>
  );
}
export default App;
