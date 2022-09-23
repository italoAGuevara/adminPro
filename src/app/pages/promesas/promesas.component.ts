import { useAnimation } from '@angular/animations';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios()
      .then( usuarios => {console.log( usuarios )})
  }

  getUsuarios()  {
    return new Promise( resolve => {

      fetch('https://reqres.in/api/users')
        .then( dataRaw => dataRaw.json )
        .then( ( body : any ) => body )
    })
  }

}
