// enums e interfaces como se definieron anteriormente
// enums.ts
enum TipoVenta {
  PorUnidad = "Venta por unidad",
  PorCantidad = "Venta por cantidad",
  PorBolsa = "Venta por bolsa",
  // Otros tipos de venta
}

export { TipoVenta };

// Resto de tu código en GestionInventario.ts

export class Producto {
  constructor(
    public nombre: string,
    public descripcion: string,
    public codigoProducto: string,
    public categoria: string,
    public fabricante: string,
    public precio: number,
    public cantidadEnStock: number,
    public tiposDeVenta: TipoVenta[]
  ) {}
}

export class Inventario {
  constructor(
    public nombre: string,
    public descripcion: string,
    public fechaCreacion: Date,
    public fechaActualizacion: Date,
    public productos: Producto[]
  ) {}
}

export class Usuario {
  constructor(
    public nombre: string,
    public apellido: string,
    public correoElectronico: string,
    public contraseña: string,
    public rol: string
  ) {}
}

export class Venta {
  constructor(
    public fecha: Date,
    public cliente: Usuario,
    public productos: Producto[],
    public cantidad: number[],
    public precioTotal: number
  ) {}
}

export class Stock {
  constructor(
    public producto: Producto,
    public cantidad: number,
    public fechaActualizacion: Date
  ) {}
}

export class Precio {
  constructor(
    public producto: Producto,
    public precioUnitario: number,
    public descuentos: number[],
    public fechaActualizacion: Date
  ) {}
}

// Controlador principal
export class GestionInventario {
  private inventario: Inventario;

  constructor() {
    this.inventario = new Inventario(
      "Inventario Principal",
      "Inventario de productos electrónicos",
      new Date(),
      new Date(),
      []
    );
  }

  agregarProducto(producto: Producto) {
    this.inventario.productos.push(producto);
  }

  realizarVenta(venta: Venta) {
    // Implementar la lógica para realizar una venta
  }

  actualizarStock(stock: Stock, cantidadVendida: number) {
    // Implementar la lógica para actualizar el stock
  }
}

// Crear una instancia del controlador principal
export const gestionInventario = new GestionInventario();


