import { Donut } from './../../models/donut.model';
import { Component, OnInit } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form
        [donut]="donut"
        [isEdit]="isEdit"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (delete)="onDelete($event)"
      ></donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  isEdit!: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: DonutService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readOne(id).subscribe((donut: Donut) => (this.donut = donut));

    this.isEdit = this.route.snapshot.data['isEdit'];
  }

  onCreate(donut: Donut) {
    this.service
      .create(donut)
      .subscribe((donut) => this.router.navigate(['admin']));
  }

  onUpdate(donut: Donut) {
    this.service.update(donut).subscribe({
      next: () => this.router.navigate(['admin']),
      error: (err) => console.log('Erro na atualização: ', err),
    });
  }

  onDelete(donut: Donut) {
    this.service.delete(donut).subscribe(() => this.router.navigate(['admin']));
  }
}
