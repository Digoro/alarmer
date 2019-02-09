import { Component, OnInit } from '@angular/core';
import { Alarm } from '../model/alarm';
import { AlarmService } from '../service/alarm.service';
import { AuthService } from '../service/auth.service';
import { ToastService } from '../service/toast.service';
import * as cron from 'cron';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  alarms: Alarm[] = [];

  constructor(
    private alarmService: AlarmService,
    private toastService: ToastService,
    private authService: AuthService,
    private localNotifications: LocalNotifications
  ) { }

  ngOnInit(): void {
  }

  ionViewWillEnter() {
    this.getAlarms();
  }

  private getAlarms() {
    let temp = [];
    const userMail = this.authService.user.email;
    this.alarmService.getAlarms(userMail).subscribe(querySnapshot => {
      querySnapshot.forEach(document => {
        const data = document.data() as Alarm;
        const id = document.id;
        temp.push(new Alarm(id, data.userMail, data.icon, data.title, data.desc, data.frequency, data.enable));
      });
      this.alarms = temp;
      this.schedule(temp)
    });
  }

  schedule(alarms: Alarm[]) {
    alarms.forEach((alarm: Alarm) => {
      new cron.CronJob(alarm.frequency, () => {
        this.localNotifications.schedule({
          text: alarm.title,
          led: 'FF0000'
        });
      }, null, true);
    });
  }

  eventHandler(event: any) {
    switch (event.event) {
      case 'delete': {
        this.alarmService.deleteAlarm(event.value);
        this.toastService.presentToast('알람이 삭제되었습니다.');
        this.getAlarms();
        break;
      }
      case 'enable': {
        this.alarmService.enableAlarm(event.value.id, event.value.enable);
        break;
      }
    }
  }
}
