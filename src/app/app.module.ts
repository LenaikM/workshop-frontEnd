import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserConnexionComponent } from './user-connexion/user-connexion.component';
import { FormSuscribtionComponent } from './form-suscribtion/form-suscribtion.component';

@NgModule({
  declarations: [
    AppComponent,
    UserConnexionComponent,
    FormSuscribtionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
