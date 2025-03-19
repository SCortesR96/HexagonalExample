import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Project
import { IHttpResponse } from '@app/core/base/response';
import { Usecase } from '@app/core/base/usecase';
import { ProductResponse } from '@app/modules/products/core/models/response/product.response';
import { ProductPort } from '@app/modules/products/infrastructure/ports/product.port';

@Injectable({
  providedIn: 'root',
})
export class ProductShowUsecase implements Usecase<number, ProductResponse> {
  repository: ProductPort = inject(ProductPort);

  execute(id: number): Observable<IHttpResponse<ProductResponse>> {
    return this.repository.show(id);
  }
}
