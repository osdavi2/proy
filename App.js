import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navegacion/Navbar";
import Inicio from "./Components/paginas/Inicio";
import Items from "./Components/paginas/Items";
import Formulario from "./Components/paginas/Formulario";
import Crear from "./Components/paginas/Crear";

function App() {
  return (
    <div>
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Inicio" Component={Inicio} />
            <Route path="/Formulario" Component={Formulario} />
            <Route path="/Items" Component={Items} />
            <Route path="/Crear" Component={Crear} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
