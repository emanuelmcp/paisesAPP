import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/pais.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  constructor( private http: HttpClient) { }

  searchCountry ( country: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${country}`;
    return this.http.get<Country[]>( url );
  }
  searchCapitalCity ( capitalCity: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${capitalCity}`;
    return this.http.get<Country[]>( url );
  }
  retrieveCountryByCode (id: string): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${id}`;
    return this.http.get<Country>( url );
  }
  searchByRegion (region: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${region}`;
    return this.http.get<Country[]>(url);
  }
}
