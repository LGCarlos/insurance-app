import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
