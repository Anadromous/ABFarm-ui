import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../common/country';
import { map } from 'rxjs/operators';
import { State } from '../common/state';

@Injectable({
  providedIn: 'root'
})
export class CheckoutformService {

  private countriesUrl = "http://localhost:8080/api/countries";
  private statesUrl = "http://localhost:8080/api/states";

  constructor(private httpClient: HttpClient) {}

    getCountries(): Observable<Country[]> {
      return this.httpClient.get<GetResponseCountries>(this.countriesUrl).pipe(
        map(response => response._embedded.countries)
      );
    }

    getStates(theCountryCode: string): Observable<State[]> {
      console.log("Getting States for "+theCountryCode);
      // search url
      const searchStatesUrl = `${this.statesUrl}/search/findByCountryCode?code=${theCountryCode}`;
  
      return this.httpClient.get<GetResponseStates>(searchStatesUrl).pipe(
        map(response => response._embedded.states)
      );
    }

  getCreditCardMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];
    //build array for dropdown month
    for (let month = startMonth; month <= 12; month++) {
      data.push(month);
    }
    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {
    //for credit card year dropdown. start at current year and get next 10 years
    let data: number[] = [];
    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;
    for (let year = startYear; year <= endYear; year++) {
      data.push(year);
    }
    return of(data);
  }
}

interface GetResponseCountries {
  _embedded: {
    countries: Country[]
  }
}

  interface GetResponseStates {
    _embedded: {
      states: State[];
    }
  }

