import { Donut } from './../../models/donut.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">
        <donut-card
          *ngFor="let donut of donuts; trackBy: trackById"
          [donut]="donut"
        ></donut-card>
      </ng-container>

      <ng-template #nothing>
        <p>Not dunets here....</p>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];
  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y8z0s',
        name: 'Chocolate',
        icon: 'just-chocolate',
        price: 19.99,
        promo: true,
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
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
