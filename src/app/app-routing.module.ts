import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PhoneDetailComponent } from './pages/phone-detail/phone-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'phone/:id', component: PhoneDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
