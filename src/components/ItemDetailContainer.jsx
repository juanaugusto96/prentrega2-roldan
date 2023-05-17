import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import pedirProductos from './PedirProductos';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        const productoEncontrado = res.find((item) => item.id === parseInt(id));
        setProducto(productoEncontrado);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!producto) {
    return <div>Cargando producto...</div>;
  }



  return (
    <div className="itemlist">
      <h1>Detalle del Producto</h1>
      <h2>{producto.title}</h2>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <img className="image" src={producto.image} alt={producto.title} />
      <Link to="/"><button type="button" className="btn btn-warning">Comprar</button></Link>
     
    </div>
  );
};

export default ItemDetailContainer;