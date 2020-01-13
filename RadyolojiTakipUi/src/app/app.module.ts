import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DepofiyatlamaComponent } from './depofiyatlama/depofiyatlama.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import localeTr from '@angular/common/locales/tr';
import { registerLocaleData } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ListelemeComponent } from './listeleme/listeleme.component';

registerLocaleData(localeTr, 'tr');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DepofiyatlamaComponent,
    LogoutComponent,
    NavbarComponent,
    ListelemeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    DataTablesModule
  ],
  providers: [WebService, { provide: LOCALE_ID, useValue: 'tr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
