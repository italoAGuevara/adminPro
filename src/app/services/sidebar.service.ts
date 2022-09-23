import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any[] = [
    {
      title : 'Dashboard',
      icon : 'mdi mdi-gauge',
      subMenu :[
        { title : 'Main', url : '/'},
        { title : 'Gráficas', url : '/grafica1'},
        { title : 'ProgressBar', url : '/progress'},
        { title : 'Promesas', url : '/promesas'},
        { title : 'Rxjs', url : '/rxjs'},
      ]
    }
  ]

  constructor() { }


}
