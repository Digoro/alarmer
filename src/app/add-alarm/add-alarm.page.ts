import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlarmService } from '../service/alarm.service';
import { Router } from '@angular/router';
import { Alarm } from '../model/alarm';
import { AuthService } from '../service/auth.service';
import { AlertButton, Alert } from '../model/alert';
import { AlertService } from '../service/alert.service';

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
    private alertService: AlertService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl('', this.validators),
      desc: new FormControl('', this.validators),
      frequency: new FormControl('', this.validators)
    })
  }

  submit() {
    let value: Alarm = this.formGroup.value;
    this.authService.user$.subscribe(user => {
      value.userMail = user.email;
      this.alarmService.addAlarm(value);
      this.formGroup.reset();
      const alert = new Alert('알람 등록!', '새로운 알람이 등록되었습니다.', [new AlertButton('확인', () => { this.router.navigate(['tabs/list']) })])
      this.alertService.setAlert(alert);
    });
  }

}
