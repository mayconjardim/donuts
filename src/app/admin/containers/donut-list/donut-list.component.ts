import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <div>
        {{ donut.name }}
        {{ donut.price }}
      </div>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donut!: any;
  donuts!: Donut[];
  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y8z0s',
        name: 'Chocolate',
        icon: 'just-chocolate',
        price: 19.99,
        description: 'Apenas para os viciados em chocolate.',
      },
      {
        id: 'w47ws',
        name: 'Caldas de Chocolate',
        icon: 'glazed-fudge',
        price: 12.99,
        description: 'A Perfeição ',
      },
      {
        id: 'f84ds',
        name: 'Caramelo',
        icon: 'caramel-swirl',
        price: 17.99,
        description: 'O Sabor impecavel',
      },
    ];

    this.donut = this.donuts[0];
  }
}
