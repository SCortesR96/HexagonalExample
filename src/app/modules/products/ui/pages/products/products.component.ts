import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Project
import { IHttpResponse } from '@app/core/base/response';
import { ProductResponse } from '@app/modules/products/core/models/response/product.response';
import { ProductUiService } from '@products/ui/services/product-ui.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  _activedRoute: ActivatedRoute = inject(ActivatedRoute);
  service: ProductUiService = inject(ProductUiService);
  products: ProductResponse[] = [];

  ngOnInit(): void {
    this._activedRoute.data.subscribe({
      next: (value: ProdudctIResolver) => {
        // eslint-disable-next-line no-console
        console.log('data :>>> ', value);
        this.products = value?.products?.data || [];
      }
    })
  }
}

export interface ProdudctIResolver {
  products?: IHttpResponse<ProductResponse[]>;
}
