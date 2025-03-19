import { Component, inject } from '@angular/core';

// Project
import { ProductResponse } from '@app/modules/products/core/models/response/product.response';
import { ProductUiService } from '@products/ui/services/product-ui.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  service: ProductUiService = inject(ProductUiService);
  response: ProductResponse[] = [];

  constructor() {
    this.index();
  }

  index(): void {
    this.service.index().subscribe({
      next: (response) => {
        this.response = response.data;
      },
    });
  }
}
