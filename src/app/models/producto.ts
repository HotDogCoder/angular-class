export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  descuento: number;
  stock: number;
  categoria: string;
  fechaLanzamiento: string;
  activo: boolean;
}
