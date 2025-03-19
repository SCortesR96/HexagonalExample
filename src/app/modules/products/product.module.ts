import { ProductPort } from '@app/modules/products/infrastructure/ports/product.port';
import { ProductRepository } from './core/repositories/product.repository';
import { ProductService } from "./core/services/product.service";
import { ProductSource } from "./core/services/product.source";
import { ProductDeleteUsecase } from './infrastructure/usecases/product-delete.usecase';
import { ProductIndexUsecase } from './infrastructure/usecases/product-index.usecase';
import { ProductShowUsecase } from './infrastructure/usecases/product-show.usecase';
import { ProductStoreUsecase } from './infrastructure/usecases/product-store.usecase';
import { ProductUpdateUsecase } from './infrastructure/usecases/product-update.usecase';

export const ProductModule = [
  ProductIndexUsecase,
  ProductStoreUsecase,
  ProductShowUsecase,
  ProductUpdateUsecase,
  ProductDeleteUsecase,
  {
    provide: ProductSource,
    useClass: ProductService
  },
  {
    provide: ProductPort,
    useClass: ProductRepository
  }
];
