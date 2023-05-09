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
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Empleados} class="card-img-top" alt="Empleados"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Redes} class="card-img-top" alt="Redes"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer;