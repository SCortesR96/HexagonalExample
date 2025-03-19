import { Component, inject } from '@angular/core';

// Project
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

  constructor() {
    this.index();
  }

  index() {
    this.service.index().subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
