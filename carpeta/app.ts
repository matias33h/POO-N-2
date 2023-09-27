// Definición de la clase Producto
class Producto {
    constructor(
        public nombre: string,
        public precio: number,
        public cantidadEnStock: number,
        // Otras propiedades relevantes
    ) {}

    // Puedes agregar métodos adicionales para el producto aquí
}

// Definición de la clase Venta
class Venta {
    constructor(
        public tipoVenta: string,
        public cantidad: number,
        public precioTotal: number,
        public fechaVenta: Date,
        public productoRelacionado: Producto
    ) {}

    // Puedes agregar métodos adicionales para la venta aquí
}

// Definición de la clase Usuario
class Usuario {
    constructor(
        public nombreUsuario: string,
        public contraseña: string,
        public rol: string,
        // Otras propiedades de perfil
    ) {}

    // Puedes agregar métodos adicionales para el usuario aquí
}

// Definición de la clase Inventario
class Inventario {
    private listaProductos: Producto[] = [];

    // Método para agregar un producto al inventario
    agregarProducto(producto: Producto) {
        this.listaProductos.push(producto);
    }

    // Método para actualizar un producto en el inventario
    actualizarProducto(producto: Producto) {
        const index = this.listaProductos.findIndex(p => p.nombre === producto.nombre);
        if (index !== -1) {
            this.listaProductos[index] = producto;
        }
    }

    // Método para eliminar un producto del inventario
    eliminarProducto(nombreProducto: string) {
        this.listaProductos = this.listaProductos.filter(p => p.nombre !== nombreProducto);
    }

    // Método para buscar un producto por nombre
    buscarProductoPorNombre(nombreProducto: string): Producto | undefined {
        return this.listaProductos.find(p => p.nombre === nombreProducto);
    }

    // Método para realizar una venta y actualizar el inventario
    realizarVenta(venta: Venta) {
        const producto = venta.productoRelacionado;
        const cantidadVendida = venta.cantidad;

        if (producto.cantidadEnStock >= cantidadVendida) {
            producto.cantidadEnStock -= cantidadVendida;
            this.actualizarProducto(producto);
        } else {
            console.log('No hay suficiente stock para realizar esta venta.');
        }
    }
}

// Interfaces para tipos de venta
interface VentaPorUnidad {
    calcularPrecio(producto: Producto, cantidad: number): number;
}

interface VentaPorCantidad {
    calcularPrecio(producto: Producto, cantidad: number): number;
}

interface VentaPorBolsa {
    calcularPrecio(producto: Producto, cantidad: number): number;
}
