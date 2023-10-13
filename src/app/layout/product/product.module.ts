import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductItemCardComponent } from './product-item-card/product-item-card.component';
import { CategoriesCardComponent } from './categories-card/categories-card.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductItemCardComponent,
    CategoriesCardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
