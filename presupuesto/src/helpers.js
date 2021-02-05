export const revisarPresupuesto = (presupuesto, restante) =>{

    let clas;

    if( (presupuesto / 4) > restante)
    {
        clas='alert alert-danger';
    }
    else if ( (presupuesto / 2) > restante)
    {
        clas = 'alert alert-warning';
    }
    else
    {
        clas = 'alert alert-success';
    }

    return clas;
}