import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Project
import { IHttpResponse } from '@app/core/base/response';
import { Usecase } from '@app/core/base/usecase';
import { ProductStoreDto } from '@app/modules/products/core/models/dto/product-store.dto';
import { ProductPort } from '@app/modules/products/infrastructure/ports/product.port';

@Injectable({
  providedIn: 'root',
})
export class ProductStoreUsecase implements Usecase<ProductStoreDto, boolean> {
  repository: ProductPort = inject(ProductPort);

  execute(body: ProductStoreDto): Observable<IHttpResponse<boolean>> {
    return this.repository.store(body);
  }
}
