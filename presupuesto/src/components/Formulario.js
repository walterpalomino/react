import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) =>{

    const [nombre, guardarNombre] = useState("");
    const [cantidad, guardarCantidad] = useState(0);
    const [error, errorGuardar] = useState(false);

    const agregarGasto = e =>
    {
         e.preventDefault();

         //validar
         if(nombre.trim() ==='' || cantidad < 1 || isNaN(cantidad))
         {
             errorGuardar(true);
             return;
         }

         errorGuardar(false);

         // construir el gasto

         const gasto ={
             nombre,
             cantidad,
             id: shortid.generate()
         }

         // pasar el gasto al componente principal
         guardarGasto(gasto);
         guardarCrearGasto(true);

         // seteo los campos del html
         guardarNombre("");
         guardarCantidad(0);

    }

    return(

        <form 
               onSubmit = {agregarGasto} >

            { error ? <Error mensaje = "Error al agregar gasto" /> : null}

            <h2>Agrega tus gastos aqui</h2>

            <label>Nombre Gasto</label>
            <input
                type = "text"
                placeholder = "Ej: Nombre gasto"
                className = "u-full-width"
                value = {nombre}
                onChange = {e => guardarNombre(e.target.value)}
            />

            <label>Importe Gastar</label>
            <input
                type = "number"
                placeholder = "Ej: Importe gasto"
                className = "u-full-width"
                value = {cantidad}
                onChange = {e => guardarCantidad( parseInt(e.target.value))}
            />
            <input
                type = "submit"
                value = "Agregar Gasto"
                className = "button-primary u-full-width"
            />
        </form>
    );
}


Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;