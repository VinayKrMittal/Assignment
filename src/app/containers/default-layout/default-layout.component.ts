import { Component, Input, OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import { CartServiceService } from './../../Services/cart-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  cartItems = [];
  cartCount :number = 0;
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private _cartservice : CartServiceService) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  onLogout(){
    window.sessionStorage.setItem("sessionKey",'');
    window.sessionStorage.setItem("selectedItem",'');
    window.sessionStorage.setItem("allItems",'');

  }

  ngOnInit() {
    this._cartservice.currentcartData.subscribe(data => {
      this.cartItems = data;
      this.cartCount = 0;
      if(data.length){
          for(let item of data){
              this.cartCount = this.cartCount+item.count;
          }
      }else{
        this.cartCount = 0;
      }
    });

    }

}
