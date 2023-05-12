import { createContext, useContext, useReducer, useState } from "react";

// Aqui debemos crear nuestro contexto y nuestro provider.
export const formularioContext = createContext<any>(null);


export const POKEMON_FORM_LABELS = {
  trainer: {
    name: { label: "Nombre", type: "text", initialValue: "" },
    lastName: { label: "Apellido", type: "text", initialValue: "" },
    email: { label: "Email", type: "email", initialValue: "" },
  },
  pokemon: {
    name: { label: "Nombre", type: "text", initialValue: "" },
    type: { label: "Tipo", type: "text", initialValue: "" },
    element: { label: "Elemento", type: "text", initialValue: "" },
    size: { label: "Tamaño", type: "text", initialValue: "" },
    age: { label: "Edad", type: "number", initialValue: "" },
  },
}

const initialValues = {
  trainer: {
    name: "",
    lastName: "",
    email: "",
  },
  pokemon: {
    name: "",
    type: ""
  }
}

// esto mapea el objeto de arriba y lo convierte en un objeto con los valores iniciales
// en este formato:
// {
//   trainer: {
//     name: "",
//     ...etc
//   },
//   pokemon: {
//     name: "",
//     ...etc
//   }
// }
const INITIAL_STATE = Object.entries(POKEMON_FORM_LABELS).reduce((acc: any, [key, value]) => {
  acc[key] = Object.entries(value).reduce((acc: any, [key, value]) => {
    acc[key] = value.initialValue
    return acc
  }, {})
  return acc
}, {})


const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_TRAINER_PROPERTY":
      return {
        ...state,
        trainer: { ...state.trainer, ...action.payload },
      };
    case "SET_POKEMON_PROPERTY":
      return {
        ...state,
        pokemon: { ...state.pokemon, ...action.payload },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const FormularioProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const handleBlurPokemon = (e: any) => { // esto va en un <input onBlur={handleBlurPokemon} />
    dispatch({
      type: "SET_POKEMON_PROPERTY",
      payload: {
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleBlurTrainer = (e: any) => { // esto va en un <input onBlur={handleBlurPokemon} />
    console.log({ [e.target.name]: e.target.value });
    dispatch({
      type: "SET_TRAINER_PROPERTY",
      payload: {
        [e.target.name]: e.target.value,
      },
    });
  };


  return (
    <formularioContext.Provider value={{
      state,
      handleBlurPokemon,
      handleBlurTrainer,
      dispatch
    }}>
      {children}
    </formularioContext.Provider>
  )
}

export const useFormularioContext = ()=> useContext(formularioContext)

export default FormularioProvider;