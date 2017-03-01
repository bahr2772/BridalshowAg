import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component'
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reports',
    component: ReportComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
