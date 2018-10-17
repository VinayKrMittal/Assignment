import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cartProduct = [];
  constructor() { }
   /**Sharing Cart Data */
   private cartData = new BehaviorSubject(this.cartProduct);
   currentcartData = this.cartData.asObservable();
   updateCartData(cartData){
     console.log('cartData updated');
     this.cartProduct.push(cartData);
     this.cartData.next(this.cartProduct);
   }

   getCartProduct(){
     return this.cartProduct;
   }

   removeCartItem(index){
      this.cartProduct.splice(index,1);
   }
}
