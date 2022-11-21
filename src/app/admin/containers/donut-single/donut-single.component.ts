import { Donut } from './../../models/donut.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form [donut]="donut" (create)="onCreate($event)"></donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  constructor() {}

  ngOnInit(): void {
    this.donut = {
      id: 'y8z0s',
      name: 'Chocolate',
      icon: 'just-chocolate',
      price: 19.99,
      promo: 'limitado',
      description: 'Apenas para os viciados em chocolate.',
    };
  }

  onCreate(donut: Donut) {
    console.log('onCreate', donut);
  }
}
