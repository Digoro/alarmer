import { Component, OnInit } from '@angular/core';
import { Badge, Alarm } from '../model/badge';
import { AlarmService } from '../service/alarm.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

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
    this.alarmService.getAlarms().subscribe(querySnapshot => {
      querySnapshot.forEach(document => {
        const data = document.data();
        const id = document.id;
        this.alarmService.alarmsCollection.doc(id).collection<Badge>('badge').valueChanges().subscribe(badge => {
          this.alarms.push(new Alarm(data.icon, data.label, badge[0], data.content))
        })
      })
    })
  }
}
