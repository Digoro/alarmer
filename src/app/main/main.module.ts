import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './main.page';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: MainPage }])
  ],
  declarations: [
    MainPage,
    LoginComponent
  ]
})
export class MainPageModule { }
