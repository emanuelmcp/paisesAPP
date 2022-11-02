import {Component} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/pais.interface";
import {PaisTablaComponent} from "../../components/pais-tabla/pais-tabla.component";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {
  query: string = '';
  haveError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService) {

  }
  search (query: string): void{
    this.haveError = false;
    this.query = query;
    this.paisService.searchCountry(query)
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
