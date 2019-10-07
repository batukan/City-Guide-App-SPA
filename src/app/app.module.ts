import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { FooterComponent } from './footer/footer.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { AlertifyService } from './services/alertify.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPen, faMapMarkerAlt, faArrowRight, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { RegisterComponent } from './register/register.component';
import { NgxEditorModule } from 'ngx-editor';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CityComponent,
    FooterComponent,
    CityDetailComponent,
    CityAddComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxEditorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AlertifyService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowRight, faPen, faMapMarkerAlt, faSignInAlt, faSignOutAlt);

  }
}
