import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
    const response: IHttpResponse<ProductBackResponse[]> = {
      status: 'success',
      message: 'Products loaded successfully!',
      data: products,
    };
    return of(response);

    return this.http.get<IHttpResponse<ProductBackResponse[]>>(RouteService.products.index);
  }

  show(id: number): Observable<IHttpResponse<ProductBackResponse>> {
    const product = products.find((p) => p.productId === id);
    if (!product) {
      return of({
        status: 'error',
        message: `Product with ID ${id} not found`,
        data: {
          productId: 0,
          productRate: 0,
          productName: '',
          productPrice: 0,
          productStock: 0,
          productDescription: '',
        },
      });
    }
    return of({
      status: 'success',
      message: 'Product found successfully!',
      data: product,
    });

    return this.http.get<IHttpResponse<ProductBackResponse>>(RouteService.products.show(id));
  }

  store(body: ProductStoreDto): Observable<IHttpResponse<boolean>> {
    const newProduct: ProductBackResponse = {
      productId: this.generateId(),
      productRate: body.rate,
      productName: body.name,
      productPrice: body.price,
      productStock: body.stock,
      productDescription: body.description,
    };

    products.push(newProduct);

    return of({
      status: 'success',
      message: 'Product created successfully!',
      data: true,
    });

    return this.http.post<IHttpResponse<boolean>>(RouteService.products.store, body);
  }

  update(id: number, body: ProductUpdateDto): Observable<IHttpResponse<boolean>> {
    const index = products.findIndex((p) => p.productId === id);
    if (index === -1) {
      return of({
        status: 'error',
        message: `Product with ID ${id} not found`,
        data: false,
      });
    }

    products[index] = { ...products[index], ...body };
    return of({
      status: 'success',
      message: 'Product updated successfully!',
      data: true,
    });

    return this.http.put<IHttpResponse<boolean>>(RouteService.products.update(id), body);
  }

  delete(id: number): Observable<IHttpResponse<boolean>> {
    const index = products.findIndex((p) => p.productId === id);
    if (index === -1) {
      return of({
        status: 'error',
        message: `Product with ID ${id} not found`,
        data: false,
      });
    }

    products.splice(index, 1);
    return of({
      status: 'success',
      message: 'Product deleted successfully!',
      data: true,
    });

    return this.http.delete<IHttpResponse<boolean>>(RouteService.products.delete(id));
  }

  private generateId(): number {
    return products.length ? Math.max(...products.map((p) => p.productId)) + 1 : 1;
  }
}

const products: ProductBackResponse[] = [
  {
    productId: 1,
    productRate: 5,
    productName: 'Product 1',
    productPrice: 100,
    productStock: 10,
    productDescription: `This is a long Description: Elit culpa
       dolor est mollit cillum excepteur
       amet quis reprehenderit mollit. Dolor
       in eu excepteur qui minim elit minim consequat
       Lorem occaecat culpa. Occaecat proident ipsum
       sint est Lorem cupidatat velit et ea laborum.
       Nisi nostrud elit id tempor mollit aliqua sit
       ex mollit minim dolore.`,
  },
  {
    productId: 2,
    productRate: 4,
    productName: 'Product 2',
    productPrice: 200,
    productStock: 20,
    productDescription: 'Description 2',
  },
  {
    productId: 3,
    productRate: 2,
    productName: 'Product 3',
    productPrice: 300,
    productStock: 30,
    productDescription: 'Description 3',
  },
  {
    productId: 4,
    productRate: 5,
    productName: 'Product 4',
    productPrice: 400,
    productStock: 40,
    productDescription: 'Description 4',
  },
  {
    productId: 5,
    productRate: 3,
    productName: 'Product 5',
    productPrice: 500,
    productStock: 50,
    productDescription: 'Description 5',
  },
];
