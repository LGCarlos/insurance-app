import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ButtonModule,
    AutoCompleteModule,
    FormsModule,
  ],
})
export class ProductsModule {}
