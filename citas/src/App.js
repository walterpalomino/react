import React, {Fragment, useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Citas en local storage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales)
  {
    citasIniciales = [];
  }

  // Arreglo de citas

  const [citas, guardarCitas] = useState(citasIniciales);

  //Use Effect para realizar ciertas operaciones cuando el state cambia

   useEffect(() => {
    
    if(citasIniciales)
    {
      localStorage.setItem('citas', JSON.stringify(citas));
    }
    else{
      localStorage.setItem('citas', JSON.stringify([]));
    }


   },[citas,citasIniciales]);

  // funcion que tome las citas actuales y agregue las nuevas

  const crearCita = cita =>
  {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  const eliminarCita = id =>
  {
    const nuevaCita = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevaCita);
  }

  const titulo = citas.length > 0 ? 'Administrar tus citas' : 'No hay citas';

  return (
    
    <Fragment>
      <h1>Administrador de paciente</h1>
      <div className = "container">
        <div className = "row">
          <div className = "one-half column">
            <Formulario
            crearCita= {crearCita}/>
          </div>
          <div className = "one-half column">
             <h2>{titulo}</h2>
             {citas.map( cita =>(
               <Cita
                key = {cita.id}
                cita = {cita}
                eliminarCita = {eliminarCita}
               />
             ))}

          </div>

        </div>
      
      </div>
    </Fragment>
    
  );
}

export default App;
