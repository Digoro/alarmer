import { Component, OnInit } from '@angular/core';
import { Alarm } from '../model/alarm';
import { AlarmService } from '../service/alarm.service';
import { AlertService } from '../service/alert.service';
import { Alert, AlertButton } from '../model/alert';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  alarms: Alarm[] = [];

  constructor(
    private alarmService: AlarmService,
    private alertService: AlertService,
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  ionViewWillEnter() {
    this.getAlarms();
  }

  private getAlarms() {
    this.alarms = [];
    const userMail = this.authService.user.email;
    this.alarmService.getAlarms(userMail).subscribe(querySnapshot => {
      querySnapshot.forEach(document => {
        const data = document.data() as Alarm;
        const id = document.id;
        this.alarms.push(new Alarm(id, data.userMail, data.icon, data.title, data.desc, data.frequency));
      });
    });
  }

  eventHandler(id: string) {
    this.alarmService.deleteAlarm(id);
    const alert = new Alert('알람 삭제', '알람이 삭제되었습니다', [new AlertButton('확인', () => { this.getAlarms() })])
    this.alertService.setAlert(alert);
  }
}
