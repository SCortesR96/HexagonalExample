import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Project
import { IHttpResponse } from '@app/core/base/response';
import { ProductStoreDto } from '@app/modules/products/core/models/dto/product-store.dto';
import { ProductUpdateDto } from '@app/modules/products/core/models/dto/product-update.dto';
import { ProductBackResponse } from '@app/modules/products/core/models/response/product.back.response';
import { ProductSource } from './product.source';
import { RequestService } from '@app/core/http/request.service';
import { RouteService } from '@app/core/routes/route.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements ProductSource {
  http: RequestService = inject(RequestService);

  index(): Observable<IHttpResponse<ProductBackResponse[]>> {
    return this.http.get<IHttpResponse<ProductBackResponse[]>>(RouteService.products.index);
  }

  show(id: number): Observable<IHttpResponse<ProductBackResponse>> {
    return this.http.get<IHttpResponse<ProductBackResponse>>(RouteService.products.show(id));
  }

  store(body: ProductStoreDto): Observable<IHttpResponse<boolean>> {
    return this.http.post<IHttpResponse<boolean>>(RouteService.products.store, body);
  }

  update(id: number, body: ProductUpdateDto): Observable<IHttpResponse<boolean>> {
    return this.http.put<IHttpResponse<boolean>>(RouteService.products.update(id), body);
  }

  delete(id: number): Observable<IHttpResponse<boolean>> {
    return this.http.delete<IHttpResponse<boolean>>(RouteService.products.delete(id));
  }
}
