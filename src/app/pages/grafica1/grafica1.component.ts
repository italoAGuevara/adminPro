import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labels1 : string[] = [ 'Pan', 'Tacos', 'Refrescos' ]
  public data1: ChartConfiguration<'doughnut'>['data']['datasets'] 
  = [{ data:  [ 400, 500, 100], backgroundColor: ["#6857E6","#009FEE","#F02059"]}];

  constructor() { }

  ngOnInit(): void {
  }

}
