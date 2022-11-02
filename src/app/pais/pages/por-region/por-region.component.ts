import { Component, OnInit } from '@angular/core';
import {Country} from "../../interfaces/pais.interface";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss'],
  styles:[
    `button {
      margin-right: 2.5px;
    }`
  ]
})
export class PorRegionComponent {

  countries: Country[] = [];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  currentRegion: string = '';

  constructor(private paisService: PaisService) { }

  activateRegion(region: string): void {
    if ( region === this.currentRegion ) return;
    this.currentRegion = region;
    this.regions = [];
    this.paisService
      .searchByRegion(region)
      .subscribe(countries => this.countries = countries);
  }

  getCSSClass(region: string): string{
    return (region === this.currentRegion)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary'
  }

}
