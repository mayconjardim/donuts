import { Donut } from './../../models/donut.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'donut-card',
  template: ` <div
    class="donut-card"
    [ngClass]="{
      'donut-card-promo': donut.promo === 'novo' || donut.promo === 'limitado'
    }"
  >
    <img
      src="/assets/img/{{ donut.icon }}.svg"
      [alt]="donut.name"
      class="donut-card-icon"
    />
    <div>
      <p class="donut-card-name">
        {{ donut.name }}
        <ng-container [ngSwitch]="donut.promo">
          <span class="donut-card-label">
            <ng-template [ngSwitchCase]="'novo'"> NOVO</ng-template>
            <ng-template [ngSwitchCase]="'limitado'"> LIMITADO</ng-template>
            <ng-template ngSwitchDefault> CLASSICOS</ng-template>
          </span>
        </ng-container>
      </p>
      <p class="donut-card-price">
        {{ donut.price | currency: 'BRL' }}
      </p>
    </div>
  </div>`,
  styles: [
    `
      .donut-card {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 5px 15px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translate(-3px);
        }

        &-name {
          font-size: 16px;
        }
        &-label {
          border: 1px solid #c14583;
          border-radius: 4px;
          padding: 0 4px;
          margin-left: 5px;
          font-size: 12px;
          color: #c14583;
        }

        &-promo {
          border: 2px solid #eee;
        }
        &-price {
          font-size: 14px;
          color: #c14583;
        }

        &-icon {
          width: 50px;
          margin-right: 10px;
        }
      }
    `,
  ],
})
export class DonutCardComponent {
  @Input() donut!: Donut;

  constructor() {}
}
