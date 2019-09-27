import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor() { }
  
  cities:City[];

  ngOnInit() {
  }

}
