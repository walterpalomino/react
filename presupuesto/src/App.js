import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

   const [presupuesto, guardarPresupuesto] = useState(0);
   const [restante, guardarRestante] = useState(0);
   const [mostrarPregunta, actualizarPregunta] = useState(true);
   const [gastos, gastosGuardar] = useState([]);
   const [gasto, guardarGasto] = useState({});
   const [crearGasto, guardarCrearGasto] = useState(false);


   useEffect( ()=>{

    if(crearGasto)
    {
      gastosGuardar([      
        ...gastos,
        gasto    
       ]);

       // Resta el presupuesto actual
       const presupuestoRestante = restante - gasto.cantidad;
       guardarRestante(presupuestoRestante);

       // setear a false 
       guardarCrearGasto(false);
     
    }
   

  },[gasto, gastos,crearGasto, restante])

   

  return (
    
    <div className = "container">
      <header>
      <h1>Gasto Semanal</h1>

      <div className = "contenido-principal contenido">
         
         { mostrarPregunta ?
         (
          <Pregunta
              guardarPresupuesto = {guardarPresupuesto}
              guardarRestante    = {guardarRestante} 
              actualizarPregunta = {actualizarPregunta}
          />
         ) 
        :
        (
          <div className = "row">

              <div className = "one-half column">
                <Formulario
                guardarGasto = {guardarGasto}   
                guardarCrearGasto = {guardarCrearGasto}             
                />
              </div>
              <div className = "one-half column">
                <Listado 
                gastos = {gastos}
                />

                <ControlPresupuesto
                presupuesto = {presupuesto}
                restante = {restante}
                />
              </div>

         </div>
        )}

      </div>      
      </header>
    </div>
  );
}

export default App;
