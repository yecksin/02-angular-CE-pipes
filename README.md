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