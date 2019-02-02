import { Component, OnInit } from '@angular/core';
import { Alarm } from '../model/alarm';
import { AlarmService } from '../service/alarm.service';
import { AuthService } from '../service/auth.service';
import { ToastService } from '../service/toast.service';

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
    this.toastService.presentToast('알람이 삭제되었습니다.')
    this.getAlarms()
  }
}
