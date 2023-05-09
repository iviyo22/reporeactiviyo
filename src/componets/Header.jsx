
import Fondo from "./Fondo";
import Navbar from "./Navbar";
import Andreani from "./images/andreani-vector.svg";
const Header =() => {
    return(
       <>
<div className="container-fluid">
  <div className="d-flex bg-light">
    <div className="p-2 flex-grow-1">
      <img src={Andreani} alt="logo" width={210}/>
    </div>
    <div className="p-2">cardwidget</div>
    <div className="p-2">boton ingreso</div>
  </div>
  <div>
    <Fondo/>
  </div>
  <div>
    <Navbar/>
  </div>
</div>


       </>
    )
}

export default Header;