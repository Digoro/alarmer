import { Component, OnInit } from '@angular/core';
import { Alarm } from '../model/alarm';
import { AlarmService } from '../service/alarm.service';
import { AuthService } from '../service/auth.service';
import { ToastService } from '../service/toast.service';
import * as cron from 'cron';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Router } from '@angular/router';
import cronstrue from 'cronstrue';

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
    private localNotifications: LocalNotifications,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ionViewWillEnter() {
    this.getAlarms();
  }

  private getAlarms() {
    const temp = [];
    const userMail = this.authService.user.email;
    this.alarmService.getAlarms(userMail).subscribe(querySnapshot => {
      querySnapshot.forEach(document => {
        const data = document.data() as Alarm;
        const id = document.id;
        const frequency = cronstrue.toString(data.frequency);
        temp.push(new Alarm(id, data.userMail, data.icon, data.title, data.desc, frequency, data.enable));
      });
      this.alarms = temp;
      if (this.alarms.length == 0) {
        this.toastService.presentToast('알람이 없습니다. 등록해주세요.', 'warning')
        this.router.navigate(['tabs/add']);
      };
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
