const Props = ({ localidades }) => {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <p><b>Llegamos a :  </b>{localidades[1]}</p>
          </div>
          <div className="col">
          <p><b>Llegamos a :  </b>{localidades[2]}</p>
          </div>
          <div className="col">
          <p><b>Llegamos a :  </b>{localidades[0]}</p>
          </div>
        </div>
      </div>
    );
  }
  
  const ItemListContainer = () => {
    const localidades = ["Buenos Aires", "Mendoza", "Santa Fe"];
  
    return (
      <Props localidades={localidades} />
    );
  }
  
  export default ItemListContainer;
  