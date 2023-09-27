// ListarProductos.tsx

import React from 'react';
import { Producto } from './src/types'; // Importa la definición de Producto
import { Inventario } from './src/types'; // Importa la definición de Inventario

interface ListarProductosProps {
  productos: Producto[]; // Agrega la prop productos
  inventario: Inventario; // Agrega la prop inventario
}

function ListarProductos({ productos, inventario }: ListarProductosProps) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {producto.nombre}, <strong>Precio:</strong> {producto.precio},{' '}
            <strong>Cantidad en Stock:</strong> {producto.cantidadEnStock}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarProductos;
