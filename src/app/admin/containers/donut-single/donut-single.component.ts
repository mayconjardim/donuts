import { Donut } from './../../models/donut.model';
import { Component, OnInit } from '@angular/core';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form
        [donut]="donut"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
      ></donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  constructor(private service: DonutService) {}

  ngOnInit(): void {
    this.donut = this.service.readOne('gg222z');
  }

  onCreate(donut: Donut) {
    this.service.create(donut);
  }

  onUpdate(donut: Donut) {
    this.service.update(donut);
  }
}
