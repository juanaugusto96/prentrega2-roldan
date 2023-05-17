import { Link,useParams } from "react-router-dom"
import pedirProductos from './PedirProductos';
import React, { useEffect, useState } from "react";



const itemlistcontainer = () => {

    const {id} = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirProductos()
          .then((res) => {
            if (id) {
              const productosFiltrados = res.filter((producto) =>
                producto.categoria === id
              );
              setProductos(productosFiltrados);
            } else {
              setProductos(res);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);
    

   
    return(
        <div>
            <nav class="navbar bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="icowine.png" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
      <Link to="/carrito"><button type="button" class="btn btn-warning">carrito</button></Link>
        </li>
        <li class="nav-item">
      <Link to="/category/vinos"><button type="button" class="btn btn-warning">vinos</button></Link>
        </li>
        <li class="nav-item">
      <Link to="/category/birras"><button type="button" class="btn btn-warning">birras</button></Link>
        </li>
        <li class="nav-item">
      <Link to="/category/whisky"><button type="button" class="btn btn-warning">whiskys</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




<h1>ItemListContainer</h1>

<div className="productos">
  {productos.map((producto) => (
    <div className="item" key={producto.id}>
      <h2>{producto.title}</h2>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <img src={producto.image} alt={producto.title} />
      <Link to={`/producto/${producto.id}`}>
              <button type="button" class="btn btn-warning">Ver más</button>
            </Link>
    </div>
  ))}
</div>

<div>

<h2> {id}</h2>

            <Link to="./carrito">
                <button  type="button" class="btn btn-warning">ir al carrito</button>
            </Link>

        </div>
        </div>
    )
}
export default itemlistcontainer 