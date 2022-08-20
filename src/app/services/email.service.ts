import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../common/contact';
import { Purchase } from '../common/purchase';
import { GlobalConfigModule } from '../global-config/global-config.module';

const httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
  'responseType': 'text'
};


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = GlobalConfigModule.appUrl+'/api';

  constructor(private httpClient: HttpClient) { }

   sendConfirmationEmail(purchase: Purchase): Observable<any>{
    console.log("Here is the purchase price: "+purchase.order.totalPrice);
    console.log("Here is the order size: "+purchase.orderItems.length);
     return this.httpClient.post(this.emailUrl+"/sendConfirmationEmail", purchase);
   }

  sendEmail(){
    return this.httpClient.post(this.emailUrl+"/sendEmail","Hello");
  }

  sendContactEmail(contact: Contact): Observable<any>{
    return this.httpClient.post<Contact>(this.emailUrl+"/sendContactEmail", contact);
  }

}
