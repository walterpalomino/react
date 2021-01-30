import React, { Fragment, useState } from 'react';

const Pregunta = () =>{

    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Función que lee el presupuesto
    const definirPresupuesto = e => {

        guardarCantidad( parseInt(e.target.value), 10);
    }

    // submit para definir el presupuesto
    const agregarPresupuesto = e => {

        e.preventDefault();

        // validar 
        if(cantidad < 1 || isNaN(cantidad))
        {
            guardarError(true);
            return;
        }

        // si pasa la validación

        guardarError(false);
    }

    return (
       <Fragment>

           <h2>Ingresa tu presupuesto</h2>

           {error ? "El dato ingresado no es valido" : null}

           <from onSubmit = {agregarPresupuesto} >
               <input
               type = "number"
               placeholder = "Ingresa tu presupuesto"
               className = "u-full-width"
               onChange = {definirPresupuesto}
               />

               <input
               type = "submit"
               className = "button-primary u-full-width"
               value = "Definir presu´puesto"
               />
           </from>
       </Fragment>
    );

}

export default Pregunta;