import { Donut } from './../../models/donut.model';
import { Component, OnInit } from '@angular/core';
import { DonutService } from '../../services/donut.service';

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
        <p>Não encontramos Donuts....</p>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];
  constructor(private service: DonutService) {}

  ngOnInit(): void {
    this.donuts = this.service.read();
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
