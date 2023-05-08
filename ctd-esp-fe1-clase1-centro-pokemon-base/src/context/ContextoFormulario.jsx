import { createContext, useContext, useState } from "react";

// Aqui debemos crear nuestro contexto y nuestro provider.
export const formularioContext = createContext();

const FormularioProvider = ({ children }) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    nombrePokemon: ""
  })


  return (
    <formularioContext.Provider value={{
      formulario,
      setFormulario
    }}>
      {children}
    </formularioContext.Provider>
  )
}

export const useFormularioContext = ()=> useContext(formularioContext)

export default FormularioProvider;