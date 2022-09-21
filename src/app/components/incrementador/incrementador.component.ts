import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(){
    this.btnClass = `btn ${ this.btnClass }`
  }

  @Input('valor') progreso : number = 10
  @Input() btnClass : string = 'btn-primary'

  @Output('valor') valorSalida : EventEmitter<number> = new EventEmitter()


  /**
   * Ya controla que no pase de 100 y no baje de 0
   * 
   * @param valor 
   */
  cambiarValor( valor : number) : void {
    if( this.progreso >= 100 && valor >=0 ){
      this.valorSalida.emit( 100 )
      this.progreso = 100      
      return
    }

    if( this.progreso <= 0 && valor < 0 ){
      this.valorSalida.emit( 0 )
      this.progreso = 0      
      return 
    }

    this.progreso = this.progreso + valor
    this.valorSalida.emit( this.progreso )
  }

  onChange( nuevoValor : number ) : void {
    if( nuevoValor >= 100 ){
      this.progreso = 100
    }else if( nuevoValor <= 0 ){
      this.progreso = 0
    }else{
      this.progreso = nuevoValor
    }
    this.valorSalida.emit( this.progreso )
  }
}
