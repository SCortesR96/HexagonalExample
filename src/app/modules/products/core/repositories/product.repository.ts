import { inject } from "@angular/core";
import { map, Observable } from "rxjs";

// Project
import { IHttpResponse } from "@app/core/base/response";
import { ProductPort } from "@app/modules/products/infrastructure/ports/product.port";
import { ProductStoreDto } from '@app/modules/products/core/models/dto/product-store.dto';
import { ProductUpdateDto } from '@app/modules/products/core/models/dto/product-update.dto';
import { ProductResponse } from '@app/modules/products/core/models/response/product.response';
import { ProductSource } from "@products/core/services/product.source";
import { AdapterService } from "@products/infrastructure/adapters/adapter.service";

export class ProductRepository implements ProductPort {
  service: ProductSource = inject(ProductSource);
  adapter: AdapterService = inject(AdapterService);

  index(): Observable<IHttpResponse<ProductResponse[]>> {
    return this.service.index().pipe(map(this.adapter.mapResponseArray));
  }

  show(id: number): Observable<IHttpResponse<ProductResponse>> {
    return this.service.show(id).pipe(map(this.adapter.mapResponse));
  }

  store(body: ProductStoreDto): Observable<IHttpResponse<boolean>> {
    return this.service.store(body);
  }

  update(id: number, body: ProductUpdateDto): Observable<IHttpResponse<boolean>> {
    return this.service.update(id, body);
  }

  delete(id: number): Observable<IHttpResponse<boolean>> {
    return this.service.delete(id);
  }
}
