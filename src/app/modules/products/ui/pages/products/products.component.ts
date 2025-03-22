import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Project
import { IHttpResponse } from '@app/core/base/response';
import { ProductResponse } from '@app/modules/products/core/models/response/product.response';
import { UtilAtomImageComponent } from '@app/utils/components/atoms/image/image.component';
import { AdminLayoutComponent } from '@app/utils/components/layouts/admin-layout/admin-layout.component';
import {
  UtilMoleculeLabelInfoFieldComponent
} from '@app/utils/components/molecules/label-info-field/label-info-field.component';
import { UtilMoleculeLabelRatingComponent } from '@app/utils/components/molecules/label-rating/label-rating.component';
import { ProductUiService } from '@products/ui/services/product-ui.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,

    // Components
    AdminLayoutComponent,
    UtilMoleculeLabelInfoFieldComponent,
    UtilMoleculeLabelRatingComponent,
    UtilAtomImageComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  _activedRoute: ActivatedRoute = inject(ActivatedRoute);
  service: ProductUiService = inject(ProductUiService);
  currencyPipe: CurrencyPipe = inject(CurrencyPipe);
  products: ProductResponse[] = [];

  ngOnInit(): void {
    this._activedRoute.data.subscribe({
      next: (value: ProdudctIResolver) => {
        // eslint-disable-next-line no-console
        console.log('data :>>> ', value);
        this.products = value?.products?.data || [];
      },
    });
  }

  currency(value: number | string): string {
    return this.currencyPipe.transform(value, 'COP', '$') || '0';
  }
}

export interface ProdudctIResolver {
  products?: IHttpResponse<ProductResponse[]>;
}
