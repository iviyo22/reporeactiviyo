
import Inter from "./images/inter.svg";
import Box from "./images/box1.svg";
import Dom from "./images/domicilio.svg";
import Boxes from "./images/boxes.svg";

const Navbar =() =>{
    return(
    <nav class="navbar bg-body-tertiary py-5 mt-5 mb-5">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src={Inter} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
        Encomienda Internacional  </a>
        <a class="navbar-brand" href="#"> <img src={Box} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
        Carta Doc/Sobres</a>
        <a class="navbar-brand" href="#">
        <img src={Dom} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
        Envios a Domicilio </a>
        <a class="navbar-brand" href="#">
        <img src={Boxes} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
        Encomienda Masiva</a>
      
    </div>
  </nav>
)
    }
export default Navbar;