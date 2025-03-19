import { inject, Injectable } from '@angular/core';

// Project
import { ProductStoreDto } from '@app/modules/products/core/models/dto/product-store.dto';
import { ProductUpdateDto } from '@app/modules/products/core/models/dto/product-update.dto';
import { ProductDeleteUsecase } from '@products/infrastructure/usecases/product-delete.usecase';
import { ProductIndexUsecase } from '@products/infrastructure/usecases/product-index.usecase';
import { ProductShowUsecase } from '@products/infrastructure/usecases/product-show.usecase';
import { ProductStoreUsecase } from '@products/infrastructure/usecases/product-store.usecase';
import { ProductUpdateUsecase } from '@products/infrastructure/usecases/product-update.usecase';

@Injectable({
  providedIn: 'root',
})
export class ProductUiService {
  private readonly _indexUsecase: ProductIndexUsecase = inject(ProductIndexUsecase);
  private readonly _storeUsecase: ProductStoreUsecase = inject(ProductStoreUsecase);
  private readonly _showUsecase: ProductShowUsecase = inject(ProductShowUsecase);
  private readonly _updateUsecase: ProductUpdateUsecase = inject(ProductUpdateUsecase);
  private readonly _deleteUsecase: ProductDeleteUsecase = inject(ProductDeleteUsecase);

  index() {
    return this._indexUsecase.execute();
  }

  store(body: ProductStoreDto) {
    return this._storeUsecase.execute(body);
  }

  show(id: number) {
    return this._showUsecase.execute(id);
  }

  update(id: number, body: ProductUpdateDto) {
    const params = { id, body };
    return this._updateUsecase.execute(params);
  }

  delete(id: number) {
    return this._deleteUsecase.execute(id);
  }
}
