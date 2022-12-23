import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlsModule } from 'src/app/controls/controls.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [HomeComponent, ResultsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ButtonModule,
    AutoCompleteModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TranslateModule,
    ComponentsModule,
  ],
})
export class ProductsModule {}
