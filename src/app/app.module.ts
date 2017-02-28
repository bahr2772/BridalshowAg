import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'angular2-material-datepicker'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PreRegComponent } from './pre-reg/pre-reg.component';
import { RegisterComponent } from './register/register.component';
import { CheckinService } from './checkin.service';
import { RegisterService } from "./register.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreRegComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DatepickerModule
  ],
  providers: [
    CheckinService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


