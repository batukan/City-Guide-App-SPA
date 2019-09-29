import { CityComponent } from './city/city.component';
import { Routes } from '@angular/router';
import { CityDetailComponent } from './city/city-detail/city-detail.component';

export const appRoutes: Routes = [
    { path: "city", component: CityComponent },
    { path: "cityDetail/:cityId", component: CityDetailComponent },
    { path: "**", redirectTo: "city", pathMatch: "full" },
];