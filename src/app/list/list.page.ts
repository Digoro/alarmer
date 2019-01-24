import { Component, OnInit } from '@angular/core';
import { Badge, Alarm } from '../model/alarm';
import { AlarmService } from '../service/alarm.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  alarms: Alarm[] = [];

  constructor(
    private alarmService: AlarmService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit(): void {
    this.getAlarms();
  }

  private getAlarms() {
    this.alarms = [];
    this.alarmService.getAlarms().subscribe(querySnapshot => {
      querySnapshot.forEach(document => {
        const data = document.data() as Alarm;
        const id = document.id;
        this.alarmService.alarmsCollection.doc(id).collection<Badge>('badge').valueChanges().subscribe(badge => {
          this.alarms.push(new Alarm(id, data.userMail, data.icon, data.title, badge[0], data.desc));
        });
      });
    });
  }

  eventHandler(id) {
    this.alarmService.deleteAlarm(id);
    this.confirm();
  }

  async confirm() {
    const alert = await this.alertCtrl.create({
      header: '알람 삭제!',
      message: '알람이 삭제되었습니다.',
      buttons: [{
        text: '확인', handler: () => {
          this.getAlarms();
        }
      }]
    });
    return await alert.present();
  }
}
