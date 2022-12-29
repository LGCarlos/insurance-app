import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlsModule } from 'src/app/controls/controls.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { ResultsComponent } from './results/results.component';
import { StatistsicsComponent } from './statistsics/statistsics.component';

@NgModule({
  declarations: [HomeComponent, ResultsComponent, StatistsicsComponent],
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
  providers: [DatePipe],
})
export class ProductsModule {}
