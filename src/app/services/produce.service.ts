import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Produce } from '../common/produce';
import { ProduceCategory } from '../common/produce-category';
import { GlobalConfigModule } from '../global-config/global-config.module';

@Injectable({
  providedIn: 'root'
})
export class ProduceService {
  
  private baseUrl = GlobalConfigModule.appUrl+'/api/produces';
  private categoryUrl = GlobalConfigModule.appUrl+'/api/produce-category';

  constructor(private httpClient: HttpClient) { }

  getProduceList(theCategoryId: number): Observable<Produce[]> {

    //URL based on category id. This is the endpoint exposed by Spring Rest
    console.log("getProduceList: "+`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`);
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponseProduces>(searchUrl).pipe(
      map(response => response._embedded.produces)
    );
  }

  getProduceCategories(): Observable<ProduceCategory[]> {
    return this.httpClient.get<GetResponseProduceCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.produceCategory)
    );
  }
}

interface GetResponseProduces {
  _embedded: {
    produces: Produce[];
  }
}

interface GetResponseProduceCategory {
  _embedded: {
    produceCategory: ProduceCategory[];
  }

}
