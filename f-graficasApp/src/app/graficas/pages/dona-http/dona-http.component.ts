import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  @Input() doughnutChartType: ChartType = 'doughnut';
  // Doughnut
  @Input() doughnutChartLabels: Label[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
    // 'Victoria León',
    // 'Mirelle',
  ];
  @Input() doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 34, 900],
    // [50, 150, 120, 400, 100],
    // [250, 130, 70, 290, 49],
  ];
  @Input() colors: Color[] = [
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

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    // this.graficasService.getDataDonaRedesSociales().subscribe((data) => {
    //   console.log(data);
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   this.doughnutChartLabels.push(labels);
    //   this.doughnutChartData.push(values);
    // });
    this.graficasService
      .getUsuariosRdDonaDta()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData = values;
      });
  }

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
