import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlsModule } from 'src/app/controls/controls.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ButtonModule,
    AutoCompleteModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
