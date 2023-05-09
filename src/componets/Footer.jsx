import Depo from "./images/depo.png";
import Empleados from "./images/empleado.png";
import Redes from "./images/redes.png";
const Footer =() =>{
    return(
        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
        <div class="col">
          <div class="card h-100">
            <img src={Depo} class="card-img-top" alt="Deposito"/>
            <div class="card-body">
              <h5 class="card-title">Plantas procesadoras</h5>
              <p class="card-text">Contamos con las mejores gestiones</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Empleados} class="card-img-top" alt="Empleados"/>
            <div class="card-body">
              <h5 class="card-title">RRHH</h5>
              <p class="card-text">Contamos con el mejor ambiente laboral</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Redes} class="card-img-top" alt="Redes"/>
            <div class="card-body">
              <h5 class="card-title">Contacto</h5>
              <p class="card-text">Buscanos por todas nuestras plataformas</p>
            </div>
          
          </div>
        </div>
      </div>
    )
}

export default Footer;