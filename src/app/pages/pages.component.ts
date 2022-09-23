import { Component, OnInit  } from '@angular/core';
import { SettingsService } from '../services/settings.service';


/**
 * Global function initilizer the styles that is in the rout
 * './assets/js/custom.min.js' ,  if no initialized here, do not will be possible
 * load the styles every time that user is inside this page
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
