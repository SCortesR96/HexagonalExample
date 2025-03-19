import { Observable } from 'rxjs';

// Project
import { IHttpResponse } from '@app/core/base/response';
import { ProductStoreDto } from '@app/modules/products/core/models/dto/product-store.dto';
import { ProductUpdateDto } from '@app/modules/products/core/models/dto/product-update.dto';
import { ProductResponse } from '@app/modules/products/core/models/response/product.response';

export abstract class ProductPort {
  abstract index(): Observable<IHttpResponse<ProductResponse[]>>;

  abstract show(id: number): Observable<IHttpResponse<ProductResponse>>;

  abstract store(body: ProductStoreDto): Observable<IHttpResponse<boolean>>;

  abstract update(id: number, body: ProductUpdateDto): Observable<IHttpResponse<boolean>>;

  abstract delete(id: number): Observable<IHttpResponse<boolean>>;
}
