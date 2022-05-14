// librerias de react
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/Login";
import Listado from "./components/Listado";
import Detalle from "./components/Detalle";

// estilos
import "./css/app.css";
import "./css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/listado" element={<Listado />} />
          <Route exact path="/detalle" element={<Detalle />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
