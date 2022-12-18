import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsRoutes } from './modules/products/products-routing.module';
import { ConstantsService } from './services/constants.service';

const routes: Routes = [
  // Default Route
  {
    path: '',
    redirectTo: ConstantsService.UrlsComponents.Home,
    pathMatch: 'full',
  },

  // Products Routes
  {
    path: '',
    children: [
      {
        path: '',
        children: [...ProductsRoutes],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
