import React, { useState } from "react";
import { useFormularioContext } from "../../context/ContextoFormulario";
import PropTypes from "prop-types";
const Input = ({ name, label, type = "text", ...props }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  // También, utilizaremos un estado local para manejar el estado del input.
  const [value, setValue] = useState("")
  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setValue(e.target.value)
  };


  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default Input;
