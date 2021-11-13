import React from 'react';
import './Estilos.css';
import { Formulario, Label, ContenedorTerminos,
ContenedorBotonCentrado, Boton, MensajeExito, MensajeError  } from './Elementos/Formulario';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  Input  from './Components/Input';

const App = () => {
  return (
    
    <main>
      
      <Formulario action="">

        <Input/>

        <ContenedorTerminos>
          <Label>
            <input type="checkbox" name="" id="terminos"/>
            Acepto los términos de condiciones y restricciones
          </Label>
        </ContenedorTerminos>

        {false && <MensajeError>
          <p> 
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error</b>: Por favor rellena el formulario correctamente
          </p>
        </MensajeError>}

        <ContenedorBotonCentrado>
            <Boton type="submit">Enviar</Boton>
            <MensajeExito>Las respuestas se han enviado con éxito</MensajeExito>
        </ContenedorBotonCentrado>

      </Formulario>
    
    </main>
  );
};


export default App
