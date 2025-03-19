import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Project
import { IHttpResponse } from '@app/core/base/response';
import { Usecase } from '@app/core/base/usecase';
import { ProductUpdateDto } from '@app/modules/products/core/models/dto/product-update.dto';
import { ProductPort } from '@app/modules/products/infrastructure/ports/product.port';

@Injectable({
  providedIn: 'root',
})
export class ProductUpdateUsecase implements Usecase<{ id: number; body: ProductUpdateDto }, boolean> {
  repository: ProductPort = inject(ProductPort);

  execute(params: { id: number; body: ProductUpdateDto }): Observable<IHttpResponse<boolean>> {
    return this.repository.update(params.id, params.body);
  }
}
