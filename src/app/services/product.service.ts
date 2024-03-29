import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';
import { GlobalConfigModule } from '../global-config/global-config.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = GlobalConfigModule.appUrl+'/api/products';

  private categoryUrl = GlobalConfigModule.appUrl+'/api/product-category';

  constructor(private httpClient: HttpClient) { }

  getProduct(productId: number): Observable<Product> {
    //build URL based on productId
    const productUrl = `${this.baseUrl}/${productId}`;
    console.log("productUrl: "+productUrl);
    return this.httpClient.get<Product>(productUrl);
  }

  getProductList(theCategoryId: number): Observable<Product[]> {

    //URL based on category id. This is the endpoint exposed by Spring Rest
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}