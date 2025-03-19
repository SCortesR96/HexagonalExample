import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

// Project
import { IHttpResponse } from '@app/core/base/response';
import { ProductResponse } from '@app/modules/products/core/models/response/product.response';
import { ProductIndexUsecase } from '@products/infrastructure/usecases/product-index.usecase';

export const productsResolver: ResolveFn<IHttpResponse<ProductResponse[]>> = () => {
  const _products: ProductIndexUsecase = inject(ProductIndexUsecase);
  return _products.execute();
};
