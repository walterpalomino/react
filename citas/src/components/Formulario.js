import React, { Fragment } from 'react';

const Formulario = () =>{

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre Macosta</label>
                <input
                      type = "texto"
                      mane = "mascota"
                      className = "u-full-width"
                      placeholder = "Nombre Mascota"
                />

                <label>Nombre Dueño</label>
                <input
                      type = "texto"
                      mane = "propietario"
                      className = "u-full-width"
                      placeholder = "Nombre ueño"
                />

                <label>Fecha</label>
                <input
                      type = "date"
                      mane = "fecha"
                      className = "u-full-width"                      
                />

                <label>Hora</label>
                <input
                      type = "time"
                      mane = "hora"
                      className = "u-full-width"                      
                />
            </form>
        </Fragment>
    );
    

}

export default Formulario;