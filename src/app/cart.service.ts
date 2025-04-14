import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 carts:Cart[] = [
  {
    id: 1,
    name: 'Sevinch',
    age: 20,
    color: 'green'

  },
  {
    id: 2,
    name: 'Shahnoza',
    age: 22,
    color: 'grey'

  }, {
    id:3,
    name: 'Kumush',
    age: 21,
    color: 'pink'

  }, {
    id: 4,
    name: 'Munisa',
    age: 20,
    color: 'blue'

  }, {
    id: 5,
    name: 'Munisa opa',
    age: 22,
    color: 'red'

  }, {
    id: 6,
    name: 'Umida',
    age: 20,
    color: 'yellow'

  },
 ]

  users:any[] = [

    {
      name: 'admin',
      password: '7777',
    },
    {
      name: 'Sevinch',
      password: '0000'
    }
  ]

  constructor() { }
}
