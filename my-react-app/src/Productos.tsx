import React, { useState } from 'react';
import { Producto, Inventario } from './types';

function Productos({ inventario, onProductoAgregado }: { inventario: Inventario; onProductoAgregado: (producto: Producto) => void }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);
  const [cantidadEnStock, setCantidadEnStock] = useState(0);

  const agregarProducto = () => {
    const nuevaCantidadEnStock = parseInt(cantidadEnStock.toString());
    if (!isNaN(nuevaCantidadEnStock)) {
      const nuevoProducto: Producto = {
        nombre,
        precio,
        cantidadEnStock: nuevaCantidadEnStock,
      };
  
      // Agrega el nuevo producto al inventario
      inventario.agregarProducto(nuevoProducto);

      console.log(inventario)
  
      // Llama a la función de devolución de llamada para notificar que se ha agregado un producto
      onProductoAgregado(nuevoProducto);
  
      // Limpia los campos después de agregar el producto
      setNombre('');
      setPrecio(0);
      setCantidadEnStock(0);
    } else {
      alert('Por favor, ingresa una cantidad en stock válida.');
    }
  };
  

  return (
    <div>
      <h2>Agregar Producto</h2>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(parseFloat(e.target.value))} />
      <input
        type="number"
        placeholder="Cantidad en Stock"
        value={cantidadEnStock.toString()}
        onChange={(e) => setCantidadEnStock(parseInt(e.target.value, 10))}
      />
      <button onClick={agregarProducto}>Agregar</button>
    </div>
  );
}

export default Productos;
