import React, { useState } from 'react';
import { Producto, Venta, Inventario } from './types';

function Ventas({ inventario, productosAgregados }: { inventario: Inventario; productosAgregados: Producto[] }) {
  const [nombreProducto, setNombreProducto] = useState('');
  const [cantidad, setCantidad] = useState(0);

  const realizarVenta = () => {
    const productoRelacionado = inventario.buscarProductoPorNombre(nombreProducto);

    if (productoRelacionado) {
      const precioTotal = productoRelacionado.precio * cantidad;

      if (productoRelacionado.cantidadEnStock >= cantidad) {
        const venta: Venta = {
          tipoVenta: 'Venta por Unidad',
          cantidad,
          precioTotal,
          fechaVenta: new Date(),
          productoRelacionado,
        };


        

        inventario.realizarVenta(venta);
        setNombreProducto('');
        setCantidad(0);

        // Agrega la venta realizada a la lista de ventas
        productosAgregados.push(venta.productoRelacionado);
      } else {
        alert('No hay suficiente stock para realizar esta venta.');
      }
    } else {
      alert('Producto no encontrado en el inventario.');
    }
  };

  // Function to check if a product exists in the inventory
  const isProductInInventory = () => {
    const productoRelacionado = inventario.buscarProductoPorNombre(nombreProducto);
    return !!productoRelacionado;
  };

  return (
    <div>
      <h2>Realizar Venta</h2>
      <input
        type="text"
        placeholder="Nombre del Producto"
        value={nombreProducto}
        onChange={(e) => setNombreProducto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(parseInt(e.target.value))}
      />
     <button onClick={isProductInInventory() ? realizarVenta : () => alert('Producto no encontrado en el inventario.')}>

        Realizar Venta
      </button>
    </div>
  );
}

export default Ventas;
