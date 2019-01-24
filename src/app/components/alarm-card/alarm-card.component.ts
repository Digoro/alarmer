import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alarm } from '../../model/alarm';

@Component({
  selector: 'alarm-card',
  templateUrl: './alarm-card.component.html',
  styleUrls: ['./alarm-card.component.scss']
})
export class AlarmCardComponent implements OnInit {
  @Input() alarm: Alarm;
  @Output() event = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteAlarm(id: string) {
    this.event.emit(id)
  }
}