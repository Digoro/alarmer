import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alarm } from '../../model/alarm';
import { AlertService } from 'src/app/service/alert.service';
import { Alert, AlertButton } from 'src/app/model/alert';


@Component({
  selector: 'alarm-card',
  templateUrl: './alarm-card.component.html',
  styleUrls: ['./alarm-card.component.scss']
})
export class AlarmCardComponent implements OnInit {
  @Input() alarm: Alarm;
  @Output() event = new EventEmitter();

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  deleteAlarm(id: string) {
    const okBtn = new AlertButton('확인', () => this.event.emit({ event: 'delete', value: id }));
    const cancleBtn = new AlertButton('취소', () => { });
    const alert = new Alert('삭제 확인', '정말로 알람을 삭제하시겠습니까?', [okBtn, cancleBtn]);
    this.alertService.setAlert(alert);
  }

  changeEnable(event) {
    this.event.emit({
      event: 'enable', value: {
        id: this.alarm.id,
        enable: event.detail.checked
      }
    });
  }
}
