import { Donut } from './../models/donut.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [
    {
      id: 'y8z0s',
      name: 'Chocolate',
      icon: 'just-chocolate',
      price: 19.99,
      promo: 'limitado',
      description: 'Apenas para os viciados em chocolate.',
    },
    {
      id: 'w47ws',
      name: 'Caldas de Chocolate',
      icon: 'glazed-fudge',
      price: 12.99,
      description: 'A perfeição ',
    },
    {
      id: 'f84ds',
      name: 'Caramelo',
      icon: 'caramel-swirl',
      promo: 'limitado',
      price: 17.99,
      description: 'O sabor impecavel',
    },
    {
      id: 'f47sdc',
      name: 'Leite Condensado',
      icon: 'sour-supreme',
      promo: 'novo',
      price: 16.99,
      description: 'O querido da galera',
    },
    {
      id: 'gg222z',
      name: 'Baunilha',
      icon: 'zesty-lemon',
      price: 18.99,
      description: 'O sabor delicado',
    },
  ];
  constructor() {}

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((donut: Donut) => donut.id === id);

    if (donut) {
      return donut;
    }

    return {
      name: '',
      icon: '',
      price: 0,
      description: '',
    };
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log(this.donuts);
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut: Donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    });
    console.log(this.donuts);
  }
}
