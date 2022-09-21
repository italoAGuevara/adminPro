import { Component, Input  } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent{
  
  private backgroundColor : string[] = ["#6857E6","#009FEE","#F02059"]

  @Input() title : string = 'It has not title'
  @Input('labels') doughnutChartLabels : string[] = [ 'Label1', 'Label2', 'Label3']
  @Input('data') doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] 
  = [{data:  [ 100, 100, 100], backgroundColor: this.backgroundColor}];


}
