import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlarmService } from '../service/alarm.service';
import { Router } from '@angular/router';
import { Alarm } from '../model/alarm';
import { AuthService } from '../service/auth.service';
import { AlertButton, Alert } from '../model/alert';
import { AlertService } from '../service/alert.service';
import { CronOptions } from 'cron-editor';

@Component({
  selector: 'add-alarm',
  templateUrl: './add-alarm.page.html',
  styleUrls: ['./add-alarm.page.scss']
})
export class AddAlarmPage implements OnInit {
  formGroup: FormGroup;
  validators = Validators.compose([Validators.required, Validators.maxLength(50)])

  public cronExpression = '4 3 2 12 1/1 ? *';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    defaultTime: '10:00:00',
    use24HourTime: true,

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,

    hideSeconds: false,
    removeSeconds: false,
    removeYears: false
  };

  constructor(
    private alarmService: AlarmService,
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl('', this.validators),
      desc: new FormControl('', this.validators)
    })
  }

  submit() {
    let value: Alarm = this.formGroup.value;
    value.frequency = this.cronExpression;
    value.userMail = this.authService.user.email;
    this.alarmService.addAlarm(value);
    this.formGroup.reset();
    const alert = new Alert('알람 등록!', '새로운 알람이 등록되었습니다.', [new AlertButton('확인', () => { this.router.navigate(['tabs/list']) })])
    this.alertService.setAlert(alert);
  }
}
