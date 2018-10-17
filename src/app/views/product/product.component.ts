import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './../../Services/cart-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  noOfItems : number = 1;
  selectedItem : {
    "name":""
  };
  constructor(private _cartservice : CartServiceService,private toaster : ToastrService, private router: Router) { }

  addToCart(){
   let tempObj = JSON.parse(JSON.stringify(this.selectedItem)); 
   tempObj["count"] = this.noOfItems;
   let addedProduct = this._cartservice.getCartProduct();
   if(addedProduct.length){
    var itemIndex  = -1;
    var addedProductDetail;
    for(let i = 0;i<addedProduct.length;i++){
        if(addedProduct[i].id == tempObj.id){
            itemIndex = i;
            addedProductDetail = addedProduct[i];
            break;
        }
    }
    if(itemIndex != -1){
      this._cartservice.removeCartItem(itemIndex);
      addedProductDetail["count"] = addedProductDetail["count"]+this.noOfItems;
      this._cartservice.updateCartData(addedProductDetail);
      this.toaster.success('Item Added to Cart Successfully');
      this.router.navigate(['/home']);


    }
    else{
      this._cartservice.updateCartData(tempObj);
      this.toaster.success('Item Added to Cart Successfully');
      this.router.navigate(['/home']);

  
     }
   }
   else{
    this._cartservice.updateCartData(tempObj);
    this.toaster.success('Item Added to Cart Successfully');
    this.router.navigate(['/home']);


   }
   this.noOfItems = 0;
  }

  intializeItem(){
    let item = JSON.parse(window.sessionStorage.getItem("selectedItem"));
    if(item){
      this.selectedItem = item;
    }
  }


  ngOnInit() {
    this.intializeItem();
  }

}
