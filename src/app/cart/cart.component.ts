import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers:[ CartService]

})
export class CartComponent {
  carts;

  constructor(private cartService: CartService){
   this.carts = this.cartService.carts
  

  }
  

}
