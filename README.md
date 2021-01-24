# Instalar idioma para fechas

ng add @angular/localize

## en app.module.app

import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es'       => pilas si se pone 'es-CO' porque sale error con lo del la moneda o numeros

registerLocaleData(localEs)         => ahi mismo debajo de los import de arriba


  providers: [{
    provide: LOCALE_ID,
    useValue: 'es'
  }],

## poner mas idomas 
se hace nuevamente sin borrar lo que ya se importó

import localFr from '@angular/common/locales/fr'
registerLocaleData(localFr)
 <td>{{fecha |date:'MMMM - dd':'':'fr'}}</td>

 Dato: Puede entrar como parametro:

       <td>{{fecha |date:'MMMM - dd':'':idioma}}
        <br>
        <button type="button" (click)="idioma='es'" class="mr-1 btn btn-primary">Español</button>
        <button type="button" (click)="idioma='en'"  class="mr-1 btn btn-secondary">Ingles</button>
        <button type="button" (click)="idioma='fr'"  class="mr-1 btn btn-success">Frances</button>
      </td>


# Crear Pipe

    ng g p pipes/capitalizado

## recibir parametros de pipe

 <td>{{nombre2 | capitalizado:1:true:'hola'}}</td>

### desde array
   transform(value: unknown, ...args: unknown[]): string {
    console.log(value);
    console.log(args);
    return 'hola mundo';
  }
### desde variables o parametros
  transform(value: unknown, edad:number,activo:boolean,mensaje:string): string {
    console.log(value);
    console.log(edad);
    return 'hola mundo';
  }