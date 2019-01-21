import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAlarmPage } from './add-alarm.page';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddAlarmPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: AddAlarmPage }])
  ]
})
export class AddAlarmModule { }
