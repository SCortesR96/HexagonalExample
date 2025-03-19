import { Routes } from '@angular/router';

// Project
import { ProductsComponent } from '@products/ui/pages/products/products.component';
import { productsResolver } from '@app/modules/products/ui/utils/resolvers/products.resolver';

export default [
  {
    path: '',
    component: ProductsComponent,
    resolve: {
      products: productsResolver,
    },
  },
] as Routes;
