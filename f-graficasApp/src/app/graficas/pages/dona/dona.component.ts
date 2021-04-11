import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  public doughnutChartType: ChartType = 'doughnut';
  // Doughnut
  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Victoria León',
    'Mirelle'
  ];
  public doughnutChartData: MultiDataSet = [
    
  ];
  public colors: Color[] = [
    {
      backgroundColor: ['#416FE0', '#AFFF29', '#E39C40', '#F509B3', '#5CFF87'],
    },
    {
      backgroundColor: ['#368AD9', '#FF61CF', '#B47ADA', '#8D8AED', '#84F8F1'],
    },
    {
      backgroundColor: ['#CF04DB', '#361CFF', '#5802DE', '#B94AF0', '#FAA5D8'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
