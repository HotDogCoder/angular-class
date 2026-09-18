import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento'
})
export class DescuentoPipe implements PipeTransform {

  transform(precio: number, porcentajeDescuento: number): number {
    return precio - (precio * porcentajeDescuento);
  }

}
