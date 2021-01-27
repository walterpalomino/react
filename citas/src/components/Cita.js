import React from 'react';

const Cita = ({cita, eliminarCita})=>(

    <div className = "cita">
        <p>Macosta: <span>{cita.mascota}</span></p>
        <p>dueño: <span>{cita.propietario}</span></p>
        <p>fecha: <span>{cita.fecha}</span></p>
        <p>hora: <span>{cita.hora}</span></p>
        <p>sintoma: <span>{cita.sintomas}</span></p>

        <button 
            className = "button eliminar u-full-width"
            onClick={()=> eliminarCita(cita.id)}>
            Eliminar</button>
    </div>

);

export default Cita;