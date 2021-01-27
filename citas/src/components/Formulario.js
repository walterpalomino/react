import React, { Fragment, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const Formulario = ({crearCita}) =>{


    //Crear State de Citas
    const [cita, actualizarCita] = useState({

        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [ error, actualizarError] = useState(false);

    // funcion que se ejecuta cada vez que el usuario escribe

    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    // Extraer los valores

    const {mascota, propietario, fecha, hora, sintomas} = cita; 

    // Cuando el usuario presiona agredar cia

    const submitCita = e =>{
        e.preventDefault();

        

        // validar
        if(mascota.trim() ==='' || propietario.trim() ==='' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' )
        {
            actualizarError(true);
            return;
        }

        actualizarError(false);

        // Asignar ID
        cita.id = uuidv4();
        

        // Crear Cita
        crearCita(cita);

        //Reiniciar Formulario

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

        
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            { error? <p className="alerta-error">Debe completar todos los campos</p> : null}

            <form onSubmit = {submitCita}>
                <label>Nombre Macosta</label>
                <input
                      type = "text"
                      className = "u-full-width"
                      name="mascota"
                      onChange = {actualizarState}                                            
                      placeholder = "Nombre Mascota"   
                      value = {mascota}                    
                />

                <label>Nombre Dueño</label>
                <input
                      type = "text"
                      name = "propietario"
                      className = "u-full-width"
                      placeholder = "Nombre ueño"
                      onChange = {actualizarState}
                      value = {propietario}
                />

                <label>Fecha</label>
                <input
                      type = "date"
                      name = "fecha"
                      className = "u-full-width"   
                      onChange = {actualizarState}   
                      value = {fecha}                
                />

                <label>Hora</label>
                <input
                      type = "time"
                      name = "hora"
                      className = "u-full-width"   
                      onChange = {actualizarState}   
                      value = {hora}                
                />

<               label>Síntoma</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                onChange = {actualizarState}
                value = {sintomas}
                ></textarea>
                

                <button
                type="submit"
                className="u-full-width button-primary"
                >Agregar Citas</button>

            </form>
        </Fragment>
    );
    

}

export default Formulario;