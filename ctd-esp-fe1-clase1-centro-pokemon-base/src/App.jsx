import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
/*

Objetivo de esta práctica
¿Un centro para el cuidado de Pokémones?  Pero… ¿Cómo registramos a nuestro Pokémon para que pueda acceder al servicio? ¡Claro! ¡Necesitamos un formulario de registro!
En esta práctica vamos a agregar los Hooks necesarios para poder manejar el estado del formulario de solicitud de atención de Pokémones.

Consigna de trabajo
¡Iniciamos! Pensemos…  ¿Cómo actuará este formulario? Cada persona ingresará los campos necesarios que contendrán información tanto de la persona que entrena al Pokémon como datos de este último.


Por su parte, cuando la persona termina de escribir la información y “abandona” un input (en otras palabras, hace un “blur”), la información ingresada deberá aparecer en la vista previa de la solicitud ubicada a la derecha de la pantalla.
En el código, te encontrarás con un simple maquetado que por ahora no tendrá ninguna funcionalidad. El primer desafío es poder agregar el Hook necesario para controlar el valor de los inputs a medida que la persona escribe. Recordá que mientras esto sucede, no deberá aparecer nada en la vista previa.
Una vez terminada esta primera etapa, el segundo desafío consiste en implementar el Hook necesario para poder mantener un estado global dentro del formulario que nos permita mostrar los valores que han sido ingresados en la vista previa de la solicitud. Para ello, deberemos almacenar un estado global y una función que nos permita actualizar el mismo cada vez que la persona sale de un input. 
Tené en cuenta lo explicado por tu profe durante la clase, ya que te será de mucha utilidad para poder realizar este ejercicio.

*/

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/formularioIngreso" element={<Formulario />} />
      </Routes>
    </div>
  );
}

export default App;
