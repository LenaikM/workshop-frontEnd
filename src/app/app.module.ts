import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserConnexionComponent } from './user-connexion/user-connexion.component';
import { FormSuscribtionComponent } from './form-suscribtion/form-suscribtion.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserServiceService} from "./user-service.service";

@NgModule({
  declarations: [
    AppComponent,
    UserConnexionComponent,
    FormSuscribtionComponent,
    UserListComponent,
    UserFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
