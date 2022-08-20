import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../common/purchase';
import { GlobalConfigModule } from '../global-config/global-config.module';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl = GlobalConfigModule.appUrl+'/api/checkout/purchase';

  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any> {
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);    
  }  
}

