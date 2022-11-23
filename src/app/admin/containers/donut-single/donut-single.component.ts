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
        (delete)="onDelete($event)"
      ></donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  constructor(private service: DonutService) {}

  ngOnInit(): void {
    this.service
      .readOne('peWluCd')
      .subscribe((donut: Donut) => (this.donut = donut));
  }

  onCreate(donut: Donut) {
    this.service
      .create(donut)
      .subscribe(() => console.log('Criado com sucesso!'));
  }

  onUpdate(donut: Donut) {
    this.service.update(donut).subscribe({
      next: () => console.log('Atualizado com sucesso!'),
      error: (err) => console.log('Erro na atualização: ', err),
    });
  }

  onDelete(donut: Donut) {
    this.service
      .delete(donut)
      .subscribe(() => console.log('Deletado com sucesso!'));
  }
}
