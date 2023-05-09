import { useState } from "react";
const Ingreso = () =>{
const [ingresoBoton, setingresoBoton] = useState("Ingresar");

const modificarEstados = () => {
    setingresoBoton(alert("Primero debes tener un usuario!"));
}


    return(
        <button className="btn btn-danger mt-2" onClick={() => {modificarEstados()}}>{ingresoBoton}</button>

    )
}
export default Ingreso;