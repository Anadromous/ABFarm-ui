import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutformService {

  constructor() { }

getCreditCardMonths(startMonth: number):Observable<number[]>{
  let data: number[]=[];
  //build array for dropdown month
  for(let month = startMonth; month <= 12; month++){
    data.push(month);
  }
  return of(data);
}

getCreditCardYears(): Observable<number[]>{
  //for credit card year dropdown. start at current year and get next 10 years
  let data:number[]=[];
  const startYear:number = new Date().getFullYear();
  const endYear:number = startYear+10;
  for(let year=startYear; year<=endYear; year++){
    data.push(year);
  }
  return of(data);
}

}
