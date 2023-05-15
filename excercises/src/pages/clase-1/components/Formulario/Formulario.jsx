import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../../../assets/pokebola.png";
import entrenador from "../../../../assets/entrenador.png";
import pikachu from "../../../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import FormularioProvider, { useFormularioContext, POKEMON_FORM_LABELS } from "../../context/ContextoFormulario";

// En este componente tenemos nuestro formulario y dentro de él
// tenemos los componentes que necesitan consumir nuestro estado.
// Recuerda cual es el paso que debemos tomar para que nuestros
// componentes puedan consumir un estado global.

const Formulario = () => {
  const { handleBlurPokemon, handleBlurTrainer } = useFormularioContext()
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
            <div className="inputs">
              <div>
                <p className="nombre-seccion">
                  <img src={entrenador} alt="entrenador" />
                  <span>ENTRENADOR</span>
                </p>
                {/*
                  [key, value] = ["name", { label: "Nombre", type: "text" }]
                                 ["lastname", { label: "Apellido", type: "text" }]
                                 
                */}
                {Object.entries(POKEMON_FORM_LABELS.trainer).map(([key, value]) => (
                  <Input key={key} name={key} onBlur={handleBlurTrainer} label={value.label} type={value.type} />
                ))}
              </div>
              <div>
                <p className="nombre-seccion">
                  <img src={pikachu} alt="pikachu" />
                  <span>POKEMON</span>
                </p>
                {Object.entries(POKEMON_FORM_LABELS.pokemon).map(([key, value]) => (
                  <Input key={key} name={key} onBlur={handleBlurPokemon} label={value.label} type={value.type} />
                ))}
              </div>
            </div>
            <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
