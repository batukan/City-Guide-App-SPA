import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { FooterComponent } from './footer/footer.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CityComponent,
    FooterComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
