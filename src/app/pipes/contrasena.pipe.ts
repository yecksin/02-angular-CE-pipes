import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean=true): unknown {
    return (activar) ? '*'.repeat(value.length) : value;
    // if (activar) {
    //   let valueAux = value.split('');
    //   valueAux=valueAux.map(letra=>{
    //     return '*'
    //   })
  
    //   return  valueAux.join('');
    // }else{
    //   return value
    // }

  }

}
