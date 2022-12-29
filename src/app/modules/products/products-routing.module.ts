import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { StatistsicsComponent } from './statistsics/statistsics.component';

export const ProductsRoutes: Routes = [
  // Home
  {
    path: ConstantsService.UrlsComponents.Home,
    component: HomeComponent,
  },
  // Results
  {
    path: ConstantsService.UrlsComponents.Results,
    component: ResultsComponent,
  },
  // Statistsics
  {
    path: ConstantsService.UrlsComponents.Statistsics,
    component: StatistsicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ProductsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
