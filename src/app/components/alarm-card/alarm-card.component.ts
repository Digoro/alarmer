import { Component, OnInit, Input } from '@angular/core';
import { Alarm } from '../../model/alarm';
import { Router } from '@angular/router';

@Component({
  selector: 'alarm-card',
  templateUrl: './alarm-card.component.html',
  styleUrls: ['./alarm-card.component.scss']
})
export class AlarmCardComponent implements OnInit {
  @Input() alarm: Alarm;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  editAlarm() {
    // this.router.navigate(['./edit/', ])
  }

}