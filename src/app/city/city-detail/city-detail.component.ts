import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  providers: [CityService]
})
export class CityDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private cityService: CityService) { }

  city: City;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params["cityId"]);
    });
  }

  getCityById(cityId) {
    this.cityService.getCityById(cityId).subscribe(data => {
      this.city = data;
    });
  }

}
