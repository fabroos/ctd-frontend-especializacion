import { createContext, useContext, useReducer, useState } from "react";

// Aqui debemos crear nuestro contexto y nuestro provider.
export const formularioContext = createContext(null);

/**
 * @typedef {Object} PokemonFormLabel - Objeto que contiene la información de un label de un input.
 * @property {string} label - El texto del label.
 * @property {string} type - El tipo de input.
 * @property {string} initialValue - El valor inicial del input.
 */


/**
 * @typedef {Object} Pokemon
 * @property {string} name - Nombre del pokemon.
 * @property {string} type - Tipo del pokemon.
  * @property {string} element - Elemento del pokemon.
  * @property {string} size - Tamaño del pokemon.
  * @property {string} age - Edad del pokemon.
*/

/**
 * @typedef {Object} Trainer
 * @property {string} name - Nombre del entrenador.
 * @property {string} lastName - Apellido del entrenador.
 * @property {string} email - Email del entrenador.
*/


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

/**
 * @typedef {Object} PokemonFormState
 * @property {Trainer} trainer - El estado del entrenador.
 * @property {Pokemon} pokemon - El estado del pokemon.
*/

/** @type {PokemonFormState} */
const initialValues = {
  trainer: {
    name: "",
    lastName: "",
    email: "",
  },
  pokemon: {
    name: "",
    type: "",
    element: "",
    size: "",
    age: "",
  },
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



/**
 * @type {PokemonFormState} El contexto de nuestro formulario.
 */
const INITIAL_STATE = Object.entries(POKEMON_FORM_LABELS).reduce((acc, [key, value]) => {
  acc[key] = Object.entries(value).reduce((acc, [key, value]) => {
    acc[key] = value.initialValue
    return acc
  }, {})
  return acc
}, {})


const formReducer = (state, action) => {
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


const FormularioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  /**
   * @author fabroos
   * @description it handles the pokemon input changes in base of the input name
   * @param {InputEvent} e 
   * @returns {void}
   * @throws {Error} if the input doesn't have a name attribute
   * @example <input name="name" onBlur={handleBlurPokemon} />
   */
  const handleBlurPokemon = (e) => { 
    if (!e.target.name) throw new Error("An unhadled input has been found, you must provide a name attribute to the input.")
    const {name, value} = e.target
    dispatch({
      type: "SET_POKEMON_PROPERTY",
      payload: {
        [name]: value
      },
    });
  };

   /**
   * @description it handles the trainer input changes in base of the input name
   * @param {InputEvent} e 
   * @returns {void}
   * @throws {Error} if the input doesn't have a name attribute
   * @example <input name="name" onBlur={handleBlurTrainer} />
   */
  const handleBlurTrainer = (e) => { // esto va en un <input onBlur={handleBlurPokemon} />
    if (!e.target.name) throw new Error("An unhadled input has been found, you must provide a name attribute to the input.")
    
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

/**
 * @description Hook para obtener el contexto del formulario.
 * @returns {PokemonFormState} El estado del formulario.
 */

export const useFormularioContext = ()=> {
  const context = useContext(formularioContext)
  if (!context) throw new Error("error, useFormularioContext must be used inside a FormularioProvider")
  return context
}

export default FormularioProvider;