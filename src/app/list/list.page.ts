import { Component, OnInit } from '@angular/core';
import { Alarm } from '../model/alarm';
import { AlarmService } from '../service/alarm.service';
import { AuthService } from '../service/auth.service';
import { ToastService } from '../service/toast.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import * as moment from 'moment';

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
    this.localNotifications.schedule({
      text: 'test local notification alarm',
      trigger: { at: new Date(new Date().getTime() + 30) },
      led: 'FF0000'
    });
  }

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
        this.alarms.push(new Alarm(id, data.userMail, data.icon, data.title, data.desc, data.frequency, data.enable));
      });
    });
  }

  eventHandler(event: any) {
    switch (event.event) {
      case 'delete': {
        this.alarmService.deleteAlarm(event);
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
