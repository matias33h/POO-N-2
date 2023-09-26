// Definir una interfaz para representar un producto
interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidadStock: number;
}

// Definir una clase para el inventario
class Inventario {
    private productos: Producto[] = [];

    // Método para agregar un producto al inventario
    agregarProducto(producto: Producto) {
        this.productos.push(producto);
    }

    // Método para listar todos los productos en el inventario
    listarProductos(): Producto[] {
        return this.productos;
    }

    // Método para actualizar la cantidad en stock de un producto
    actualizarStock(productoId: number, cantidad: number) {
        const producto = this.productos.find(p => p.id === productoId);
        if (producto) {
            producto.cantidadStock += cantidad;
        }
    }
}

// Definir una clase para representar una venta
class Venta {
    constructor(private producto: Producto, public cantidad: number) {} // Cambiar 'private' a 'public'

    calcularPrecioTotal(): number {
        return this.producto.precio * this.cantidad;
    }
}


// Ejemplo de uso
const inventario = new Inventario();

// Agregar algunos productos al inventario
const producto1: Producto = {
    id: 1,
    nombre: "Lavadora",
    descripcion: "Lavadora de carga frontal",
    precio: 500,
    cantidadStock: 10
};

const producto2: Producto = {
    id: 2,
    nombre: "Televisor",
    descripcion: "Televisor LED de 55 pulgadas",
    precio: 700,
    cantidadStock: 5
};

inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);

// Realizar una venta de prueba
const venta1 = new Venta(producto1, 2);
const venta2 = new Venta(producto2, 1);

console.log("Precio total de venta 1:", venta1.calcularPrecioTotal());
console.log("Precio total de venta 2:", venta2.calcularPrecioTotal());

// Actualizar el inventario después de una venta
inventario.actualizarStock(producto1.id, -venta1.cantidad);
inventario.actualizarStock(producto2.id, -venta2.cantidad);

console.log("Cantidad de Lavadoras en stock:", producto1.cantidadStock);
console.log("Cantidad de Televisores en stock:", producto2.cantidadStock);

// Listar los productos en el inventario
console.log("Productos en inventario:", inventario.listarProductos());
