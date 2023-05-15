import { useFormularioContext, POKEMON_FORM_LABELS} from "../../context/ContextoFormulario";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  const { state } = useFormularioContext();
  console.log(state);
  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          {Object.entries(POKEMON_FORM_LABELS.trainer).map(([key, value]) => (
            <p key={key}>{value.label}: {state.trainer[key]}</p>
          ))}
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          {Object.entries(POKEMON_FORM_LABELS.pokemon).map(([key, value]) => (
            <p key={key}>{value.label}: {state.pokemon[key]}</p>
          ))}
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
