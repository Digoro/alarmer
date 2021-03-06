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
import { CronEditorModule } from 'ngx-cron-editor';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CommonModule,
    TabsPageRoutingModule,
    CronEditorModule,
    NgSelectModule
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
