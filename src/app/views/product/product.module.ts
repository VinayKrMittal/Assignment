import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CarouselModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    CarouselModule.forRoot(),
    FormsModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
