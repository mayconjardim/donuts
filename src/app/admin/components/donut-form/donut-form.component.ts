import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-form',
  template: `
    <form class="donut-form" #form="ngForm" *ngIf="donut; else loading">
      <label>
        <span>Nome</span>
        <input
          type="text"
          name="name"
          class="input"
          required
          minlength="5"
          [ngModel]="donut.name"
          #name="ngModel"
        />
      </label>

      <ng-container *ngIf="name.invalid && name.touched">
        <div class="donut-form-error" *ngIf="name.errors?.required">
          Nome é requerido.
        </div>
        <div class="donut-form-error" *ngIf="name.errors?.minlength">
          Comprimento mínimo do nome são 5 letras
        </div>
      </ng-container>

      <label>
        <span>Icone</span>
        <select
          name="icon"
          class="input input--select"
          required
          [ngModel]="donut.icon"
          #icon="ngModel"
        >
          <option *ngFor="let icon of icons" [ngValue]="icon">
            {{ icon }}
          </option>
        </select>

        <ng-container *ngIf="icon.invalid && icon.touched">
          <div class="donut-form-error" *ngIf="icon.errors?.required">
            Icone é requerido.
          </div>
        </ng-container>
      </label>

      <label>
        <span>Preço</span>
        <input
          type="number"
          name="price"
          class="input"
          required
          [ngModel]="donut.price"
          #price="ngModel"
        />
        <ng-container *ngIf="price.invalid && price.touched">
          <div class="donut-form-error" *ngIf="price.errors?.required">
            Preço é requerido.
          </div>
        </ng-container>
      </label>

      <div class="donut-form-radios">
        <p class="donut-form-radios-label">Promo:</p>
        <label>
          <input
            type="radio"
            name="promo"
            [value]="undefined"
            [ngModel]="donut.promo"
          />
          <span>Nenhuma</span>
        </label>

        <label>
          <input
            type="radio"
            name="promo"
            value="novo"
            [ngModel]="donut.promo"
          />
          <span>Novo</span>
        </label>

        <label>
          <input
            type="radio"
            name="promo"
            value="limitado"
            [ngModel]="donut.promo"
          />
          <span>Limitado</span>
        </label>
      </div>

      <label>
        <span>Descrição</span>
        <textarea
          name="description"
          class="input input--textarea"
          required
          [ngModel]="donut.description"
          #description="ngModel"
        ></textarea>
        <ng-container *ngIf="description.invalid && description.touched">
          <div class="donut-form-error" *ngIf="description.errors?.required">
            Descrição é requerido.
          </div>
        </ng-container>
      </label>

      <button type="button" class="btn btn--green" (click)="handleCreate(form)">
        Criar
      </button>
      <button
        type="button"
        class="btn btn--green"
        [disabled]="form.untouched"
        (click)="handleUpdate(form)"
      >
        Atualizar
      </button>

      <button type="button" class="btn btn--green" (click)="handleDelete()">
        Deletar
      </button>

      <button type="button" class="btn btn--grey" (click)="form.resetForm()">
        Limpar
      </button>

      <div class="donut-form-working" *ngIf="form.valid && form.submitted">
        Working...
      </div>
    </form>

    <ng-template #loading> Carregando...</ng-template>
  `,
  styles: [
    `
      .donut-form {
        &-radios {
          display: flex;
          align-content: center;

          &-label {
            margin-right: 10px;
          }

          label {
            display: flex;
            align-items: center;
            span {
              color: #444;
              margin-bottom: 0;
            }
          }
        }
        &-working {
          font-size: 12px;
          font-style: italic;
          margin: 10px;
          margin: 10px 0;
        }

        &-error {
          font-size: 12px;
          color: #e66262;
        }
      }
    `,
  ],
})
export class DonutFormComponent {
  @Input() donut!: Donut;
  @Output() create = new EventEmitter<Donut>();
  @Output() update = new EventEmitter<Donut>();
  @Output() delete = new EventEmitter<Donut>();

  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ];
  constructor() {}

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleUpdate(form: NgForm) {
    if (form.valid) {
      this.update.emit({ id: this.donut.id, ...form.value });
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleDelete() {
    if (confirm(`Você deseja deletar ${this.donut.name}?`)) {
      this.delete.emit({ ...this.donut });
    }
  }
}
