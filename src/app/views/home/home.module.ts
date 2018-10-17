import { NgModule, OnInit } from '@angular/core';
import {HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {CommonModule} from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    CarouselModule.forRoot()
  ],
  declarations: [ HomeComponent]
})
export class HomeModule { }
