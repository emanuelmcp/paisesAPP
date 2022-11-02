import {Component} from '@angular/core';
import {Country} from "../../interfaces/pais.interface";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent {

  query: string = '';
  haveError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService) { }

  search (query: string): void{
    this.haveError = false;
    this.query = query;
    this.paisService.searchCapitalCity(query)
      .subscribe({
        next: countries =>{
          this.countries = countries;
          this.haveError=false;
        },
        error: (error) =>{
          this.haveError=true;
          this.countries = [];
        }
      })
  }

  retrieveSuggestions(query: string): void{
    this.haveError = false;
    //TODO crear sugerencias
  }

}
