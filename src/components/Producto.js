import React from 'react';


const Producto = ({producto}) => (
    <div>
        <h1>{producto.name}</h1>
        <p>Precio: {producto.precio}</p>
    
    </div>

)
 
export default Producto;