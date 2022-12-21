import { Component } from '@angular/core';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.scss']
})
export class MyLineChartComponent {
  public lineChartData= [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }
}
