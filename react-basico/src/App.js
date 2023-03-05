import logo from "./logo.svg";
import "./App.css";
import Comentario from "./components/Comentario";

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>
      <Comentario nome="Cristopher" email="cris@gmail.com" data={new Date(2023,3,4)}>
      Olá, tudo bem?</Comentario>
    </div>
  );
}

export default App;
