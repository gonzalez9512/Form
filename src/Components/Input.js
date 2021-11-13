import React from 'react'
import {Input, Label, GrupoInput, LeyendaError, IconoValidacion} from './../Elementos/Formulario';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const ComponenteInput = () => {
    return (
        <div>
          <Label htmlFor="">Nombre</Label>
          <GrupoInput>
            <Input type= "text" placeholder="Nombre"/>
            <IconoValidacion icon={faCheckCircle}/>
          </GrupoInput>
          <LeyendaError>Lorem  insuop hi jdolor mi gaer</LeyendaError>
        </div>
    );
}

export default ComponenteInput;
