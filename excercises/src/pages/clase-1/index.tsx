import Formulario from "./components/Formulario/Formulario";
import FormularioProvider from "./context/ContextoFormulario";

export default function Clase1() {
  return (
    <FormularioProvider>
      <Formulario/>
    </FormularioProvider>

  );
}