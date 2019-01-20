import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAlarmComponent } from './add-alarm.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddAlarmComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: AddAlarmComponent }])
  ]
})
export class AddAlarmModule { }
