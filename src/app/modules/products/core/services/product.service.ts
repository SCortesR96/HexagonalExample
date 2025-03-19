import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Project
import { IHttpResponse } from '@app/core/base/response';
import { ProductStoreDto } from '@app/modules/products/core/models/dto/product-store.dto';
import { ProductUpdateDto } from '@app/modules/products/core/models/dto/product-update.dto';
import { ProductBackResponse } from '@app/modules/products/core/models/response/product.back.response';
import { ProductSource } from './product.source';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements ProductSource {

  index(): Observable<IHttpResponse<ProductBackResponse[]>> {
    const response: IHttpResponse<ProductBackResponse[]> = {
      status: 'success',
      message: 'Products loaded successfully!',
      data: products
    };

    return of(response);
  }

  show(id: number): Observable<IHttpResponse<ProductBackResponse>> {
    const product = products.find(p => p.id === id);
    if (!product) {
      return of({
        status: 'error',
        message: `Product with ID ${id} not found`,
        data: {
          id: 0,
          productName: '',
          productPrice: 0,
          productStock: 0,
          productDescription: ''
        }
      });
    }
    return of({
      status: 'success',
      message: 'Product found successfully!',
      data: product
    });
  }

  store(body: ProductStoreDto): Observable<IHttpResponse<boolean>> {
    const newProduct: ProductBackResponse = {
      id: this.generateId(),
      productName: body.name,
      productPrice: body.price,
      productStock: body.stock,
      productDescription: body.description
    };

    products.push(newProduct);

    return of({
      status: 'success',
      message: 'Product created successfully!',
      data: true
    });
  }

  update(id: number, body: ProductUpdateDto): Observable<IHttpResponse<boolean>> {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
      return of({
        status: 'error',
        message: `Product with ID ${id} not found`,
        data: false
      });
    }

    products[index] = { ...products[index], ...body };
    return of({
      status: 'success',
      message: 'Product updated successfully!',
      data: true
    });
  }

  delete(id: number): Observable<IHttpResponse<boolean>> {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
      return of({
        status: 'error',
        message: `Product with ID ${id} not found`,
        data: false
      });
    }

    products.splice(index, 1);
    return of({
      status: 'success',
      message: 'Product deleted successfully!',
      data: true
    });
  }

  private generateId(): number {
    return products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
  }
}



const products: ProductBackResponse[] = [
  {
    id: 1,
    productName: 'Product 1',
    productPrice: 100,
    productStock: 10,
    productDescription: 'Description 1',
  },
  {
    id: 2,
    productName: 'Product 2',
    productPrice: 200,
    productStock: 20,
    productDescription: 'Description 2',
  },
  {
    id: 3,
    productName: 'Product 3',
    productPrice: 300,
    productStock: 30,
    productDescription: 'Description 3',
  },
  {
    id: 4,
    productName: 'Product 4',
    productPrice: 400,
    productStock: 40,
    productDescription: 'Description 4',
  },
  {
    id: 5,
    productName: 'Product 5',
    productPrice: 500,
    productStock: 50,
    productDescription: 'Description 5',
  },
];
