import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import { ROUTES } from "../../App";

const Home = () => {
  return (
    <header className="App-header">
      <img className="App-logo" alt="logo" src={pokebola} />
      <h1>Centro Pokemon de Ash</h1>
      <Link to={ROUTES.FORMULARIO.path} className="boton-ingreso">
        Ingresar pokemon
      </Link>
    </header>
  );
};

export default Home;
