import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlarmService } from '../service/alarm.service';
import { Router } from '@angular/router';
import { Alarm } from '../model/alarm';
import { AuthService } from '../service/auth.service';
import { CronOptions } from 'cron-editor';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'add-alarm',
  templateUrl: './add-alarm.page.html',
  styleUrls: ['./add-alarm.page.scss']
})
export class AddAlarmPage implements OnInit {
  icons = [];
  formGroup: FormGroup;
  validators = Validators.compose([Validators.required, Validators.maxLength(50)]);

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
    private toastService: ToastService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.alarmService.getIcon().subscribe(resp => {
      this.icons = resp;
    })
    this.formGroup = new FormGroup({
      icon: new FormControl('', this.validators),
      title: new FormControl('', this.validators),
      desc: new FormControl('', this.validators)
    })
  }

  submit() {
    let value: Alarm = this.formGroup.value;
    value.frequency = this.cronExpression;
    value.userMail = this.authService.user.email;
    value.enable = true;
    this.alarmService.addAlarm(value);
    this.formGroup.reset();
    this.toastService.presentToast('새 알람이 등록되었습니다!');
    this.router.navigate(['tabs/list'])
  }
}
