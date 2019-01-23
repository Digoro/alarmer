import { Component, OnInit } from '@angular/core';
import { Badge, Alarm } from '../model/alarm';
import { AlarmService } from '../service/alarm.service';

@Component({
  selector: 'list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  alarms: Alarm[] = [];

  constructor(
    private alarmService: AlarmService
  ) { }

  ngOnInit(): void {
    this.getAlarms();
  }

  getAlarms() {
    this.alarms = [];
    this.alarmService.getAlarms().subscribe(querySnapshot => {
      querySnapshot.forEach(document => {
        const data = document.data() as Alarm;
        const id = document.id;
        this.alarmService.alarmsCollection.doc(id).collection<Badge>('badge').valueChanges().subscribe(badge => {
          this.alarms.push(new Alarm(data.userMail, data.icon, data.title, badge[0], data.desc));
        });
      });
    });
  }
}
