import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre:string     = 'Capitán América';
  nombre2:string    = 'yEckSiN mAUriCIo ZuÑiGA gUErREO'
  arreglo           = [1,2,3,4,5,6,7,8,9,10];
  PI:number         = Math.PI;
  porcentaje:number =0.234;
  salario:number    =1234.5;
  fecha:Date        = new Date('2020-03-12');
  activar:boolean   = true;
  idioma: string    = 'fr';
  videoUrl:string   ='https://www.youtube.com/embed/_bftuFONsTo';
  
  heroe = {
    nombre: 'Logan',
    clave: 'Wolwerine',
    edad: 500,
    direccion:{
      calle: 'primera',
      casa: 20
    }
  }

  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(() => {
      resolve('llego la data');
    }, 2000);
  })

  

}
