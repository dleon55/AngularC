import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [],
})
export class BarrasComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels: Label[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {
      data: [Math.random() * 100, 59, 80, 81, 56, 55, 40, 30],
      label: 'Series A',
      backgroundColor: '#BE6DF7',
      hoverBackgroundColor: '#BE6DF7',
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90, 80],
      label: 'Series B',
      backgroundColor: '#EB73C1',
      hoverBackgroundColor: '#EB73C1',
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90, 91],
      label: 'Series C',
      backgroundColor: '#D6BFC1',
      hoverBackgroundColor: '#D6BFC1',
    },
    {
      data: [82, 84, 4, 19, 19, 27, 18, 19],
      label: 'Series C',
      backgroundColor: '#C222D6',
      hoverBackgroundColor: '#C222D6',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40,
      Math.random() * 100,
    ];
    this.barChartData[1].data = [
      Math.round(Math.random() * 100),
      Math.random() * 100,
      59,
      Math.random() * 100,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40,
    ];
    this.barChartData[3].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40,
      Math.random() * 100,
    ];
  }
}
