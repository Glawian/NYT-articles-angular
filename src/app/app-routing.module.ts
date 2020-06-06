import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OopsComponent } from './components/oops/oops.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    component: OopsComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
