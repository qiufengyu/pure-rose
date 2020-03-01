import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userRoutes),
    HomeModule
  ]
})
export class UserModule { }
