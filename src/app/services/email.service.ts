import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../common/purchase';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

   sendConfirmationEmail(purchase: Purchase): Observable<any>{
     return this.httpClient.post(this.emailUrl+"/sendConfirmationEmail", purchase);
   }

  sendEmail(){
    return this.httpClient.post(this.emailUrl+"/sendEmail","Hello");
  }
}
