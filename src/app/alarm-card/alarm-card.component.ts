import { Component, OnInit, Input } from '@angular/core';
import { Alarm } from '../model/badge';

@Component({
  selector: 'alarm-card',
  templateUrl: './alarm-card.component.html',
  styleUrls: ['./alarm-card.component.scss']
})
export class AlarmCardComponent implements OnInit {
  @Input() alarm: Alarm;
  constructor() { }

  ngOnInit() {
  }

}