import { Component, OnInit  } from '@angular/core';
import { SettingsService } from '../services/settings.service';


/**
 * Funcion global para inicilizar estilos se encuentra en la ruta 
 * './assets/js/custom.min.js' ,  si no se inicializa aquí no, cargaran los estilos
 * cada que vez que se accede a este page
 */
declare function  customInitFunction() : void
  

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingService : SettingsService ){}

  ngOnInit() : void {
    customInitFunction()
  }
}
