import React, { useState } from 'react';
import './App.css';
import { Inventario, Producto } from './types'; // Importa la definición de Inventario y Producto
import Productos from './Productos';
import Ventas from './Ventas';
import ListarProductos from '../ListarProductos'; // Importa el nuevo componente

function App() {
  const inventario = new Inventario(); // Crea una instancia de Inventario
  const [mostrarLista, setMostrarLista] = useState(false); // Estado para mostrar/ocultar la lista de productos
  const [productosAgregados, setProductosAgregados] = useState<Producto[]>([]); // Lista de productos agregados

  // Función para agregar un producto a la lista de productos agregados
  const agregarProductoALista = (producto: Producto) => {
    setProductosAgregados([...productosAgregados, producto]);
  };

  return (
    <div className="App">
      <h1>Sistema de Gestión de Inventario</h1>
      <Productos inventario={inventario} onProductoAgregado={agregarProductoALista} />
      <Ventas inventario={inventario} productosAgregados={productosAgregados} />
      <button onClick={() => setMostrarLista(!mostrarLista)}>Listar Productos</button>
      {mostrarLista && <ListarProductos productos={productosAgregados} inventario={inventario} />}
    </div>
  );
}

export default App;
