import { Component, signal } from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  NgClass,
  NgStyle,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';

import { Producto } from '../../models/producto';
import { DescuentoPipe } from '../../pipes/descuento-pipe';
import { Resaltar } from '../../directives/resaltar';

@Component({
  selector: 'app-ejercicios',
  imports: [
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    PercentPipe,
    DatePipe,
    SlicePipe,
    JsonPipe,
    DescuentoPipe,
    NgClass,
    NgStyle,
    Resaltar
  ],
  templateUrl: './ejercicios.html',
  styleUrl: './ejercicios.scss'
})
export class Ejercicios {

  readonly categorias = ['todos', 'perifericos', 'monitores', 'mobiliario'];

  readonly categoriaSeleccionada = signal('todos');

  readonly productos = signal<Producto[]>([
    {
      id: 1,
      nombre: 'teclado mecánico',
      descripcion: 'Teclado mecánico retroiluminado con switches intercambiables y reposamuñecas incluido.',
      precio: 89.99,
      descuento: 0.10,
      stock: 15,
      categoria: 'perifericos',
      fechaLanzamiento: '2023-05-10',
      activo: true
    },
    {
      id: 2,
      nombre: 'monitor 27 pulgadas',
      descripcion: 'Monitor 4K de 27 pulgadas con panel IPS y soporte para HDR.',
      precio: 249.50,
      descuento: 0,
      stock: 0,
      categoria: 'monitores',
      fechaLanzamiento: '2022-11-20',
      activo: true
    },
    {
      id: 3,
      nombre: 'mouse inalámbrico',
      descripcion: 'Mouse ergonómico inalámbrico con batería de larga duración y sensor de alta precisión.',
      precio: 29.99,
      descuento: 0.20,
      stock: 42,
      categoria: 'perifericos',
      fechaLanzamiento: '2024-01-15',
      activo: false
    },
    {
      id: 4,
      nombre: 'silla ergonómica',
      descripcion: 'Silla de oficina ergonómica con soporte lumbar ajustable y reposabrazos 4D.',
      precio: 199.00,
      descuento: 0.15,
      stock: 8,
      categoria: 'mobiliario',
      fechaLanzamiento: '2021-08-01',
      activo: true
    },
    {
      id: 5,
      nombre: 'monitor curvo 34 pulgadas',
      descripcion: 'Monitor ultrawide curvo ideal para productividad y gaming.',
      precio: 459.00,
      descuento: 0.05,
      stock: 3,
      categoria: 'monitores',
      fechaLanzamiento: '2024-06-02',
      activo: true
    }
  ]);

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada.set(categoria);
  }

  productosFiltrados() {
    const categoria = this.categoriaSeleccionada();
    if (categoria === 'todos') return this.productos();
    return this.productos().filter(p => p.categoria === categoria);
  }

}
