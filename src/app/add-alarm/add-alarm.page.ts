import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlarmService } from '../service/alarm.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'add-alarm',
  templateUrl: './add-alarm.page.html',
  styleUrls: ['./add-alarm.page.scss']
})
export class AddAlarmPage implements OnInit {
  formGroup: FormGroup;
  validators = Validators.compose([Validators.required, Validators.maxLength(50)])

  constructor(
    private alarmService: AlarmService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl('', this.validators),
      desc: new FormControl('', this.validators),
      frequency: new FormControl('', this.validators)
    })
  }

  submit() {
    const value = this.formGroup.value;
    this.alarmService.addAlarm(value);
    this.formGroup.reset();
    this.confirm();
  }

  async confirm() {
    const alert = await this.alertCtrl.create({
      header: '알람 등록!',
      message: '새로운 알람이 등록되었습니다.',
      buttons: [{
        text: '확인', handler: () => {
          this.router.navigate(['tabs/list']);
        }
      }]
    });
    return await alert.present();
  }
}
