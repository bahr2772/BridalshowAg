import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'angular2-material-datepicker';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PreRegComponent } from './pre-reg/pre-reg.component';
import { RegisterComponent } from './register/register.component';
import { CheckinService } from './checkin.service';
import { RegisterService } from "./register.service";
import { ReportComponent } from './report/report.component';
import { ReportService } from "./report.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreRegComponent,
    RegisterComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DatepickerModule,
    routing
  ],
  providers: [
    CheckinService,
    RegisterService,
    ReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


