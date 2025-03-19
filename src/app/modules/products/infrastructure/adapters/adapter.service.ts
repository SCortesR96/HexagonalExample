import { Injectable } from '@angular/core';

// Project
import { IHttpResponse } from "@app/core/base/response";
import { ProductBackResponse } from '@app/modules/products/core/models/response/product.back.response';
import { ProductResponse } from '@app/modules/products/core/models/response/product.response';

@Injectable({
  providedIn: 'root',
})
export class AdapterService {
  /**
   * Mapea un objeto `ProductBackResponse` a `ProductResponse`.
   */
  mapToProductModel(response: ProductBackResponse): ProductResponse {
    return {
      id: response.id,
      name: response.productName,
      price: response.productPrice,
      stock: response.productStock,
      description: response.productDescription
    };
  }

  /**
   * Mapea un array de `ProductBackResponse` a un array de `ProductResponse`.
   */
  mapToProductModels(responses: ProductBackResponse[]): ProductResponse[] {
    return responses.map(this.mapToProductModel);
  }

  /**
   * Mapea `IHttpResponse<ProductBackResponse>` a `IHttpResponse<ProductResponse>`.
   */
  mapResponse = (response: IHttpResponse<ProductBackResponse>): IHttpResponse<ProductResponse> => ({
    status: response.status,
    message: response.message,
    data: this.mapToProductModel(response.data),
  });

  /**
   * Mapea `IHttpResponse<ProductBackResponse[]>` a `IHttpResponse<ProductResponse[]>`.
   */
  mapResponseArray = (response: IHttpResponse<ProductBackResponse[]>): IHttpResponse<ProductResponse[]> => ({
    status: response.status,
    message: response.message,
    data: this.mapToProductModels(response.data),
  });
}
