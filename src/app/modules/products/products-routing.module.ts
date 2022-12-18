import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';
import { HomeComponent } from './home/home.component';

export const ProductsRoutes: Routes = [
  // Home
  {
    path: ConstantsService.UrlsComponents.Home,
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ProductsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
