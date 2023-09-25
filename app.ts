// Importa la instancia de GestionInventario, no el tipo
import { gestionInventario } from './GestionInventario';
import { Producto } from './GestionInventario'; // Ajusta la ruta según la ubicación del archivo de definición de Producto
import { TipoVenta } from './GestionInventario'; // Ajusta la ruta según la ubicación de tu archivo enums.ts

document.addEventListener('DOMContentLoaded', () => {
    const agregarProductoForm = document.getElementById('agregarProductoForm') as HTMLFormElement;
    const nombreInput = document.getElementById('nombre') as HTMLInputElement;
    // Capturar otros campos del producto aquí

    agregarProductoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Capturar los valores del formulario
        const nombre = nombreInput.value;
        // Capturar otros campos del producto
        
        // Crear una instancia de Producto con los datos capturados
        const producto = new Producto(
            nombre,
            "Descripción del producto",
            "Código del producto",
            "Categoría del producto",
            "Fabricante del producto",
            99.99, // Precio del producto
            10,    // Cantidad en stock
            [TipoVenta.PorUnidad] // Tipos de venta (puedes ajustar esto según tus necesidades)
        );

        // Agregar el producto al inventario
        gestionInventario.agregarProducto(producto); // Utiliza la instancia gestionInventario

        // Limpiar el formulario o actualizar la UI según sea necesario
        nombreInput.value = '';
        // Limpiar otros campos
    });
});
