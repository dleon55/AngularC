import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-template',
  templateUrl: './example-template.component.html',
  styleUrls: ['./example-template.component.scss']
})
export class ExampleTemplateComponent implements OnInit {
  title = 'miscelaneos';
  constructor() { }

  ngOnInit(): void {
  }

}
