import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';
import { ListPage } from '../list/list.page';
import { AddAlarmPage } from '../add-alarm/add-alarm.page';
import { MainPage } from '../main/main.page';
import { AlarmCardComponent } from '../components/alarm-card/alarm-card.component';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    ListPage,
    AddAlarmPage,
    MainPage,
    AlarmCardComponent,
    LoginComponent
  ]
})
export class TabsPageModule { }
