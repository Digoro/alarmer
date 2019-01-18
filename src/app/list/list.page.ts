import { Component, OnInit } from '@angular/core';
import { Badge, Alarm } from '../model/badge';

@Component({
  selector: 'list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  alarms: Alarm[];

  ngOnInit(): void {
    this.alarms = [
      new Alarm("water", "하루에 물 2L 마시기", new Badge('primary', 11), "1시간에 한번씩 물 한 컵 마시기"),
      new Alarm("walk", "일주일 10만보 걷기", new Badge('secondary', 289), "하루에 2만보 이상 걷기"),
      new Alarm("book", "1달에 책 한 권 읽기", new Badge('success', 123), "소설, 문학, 기술서 구분 없이 한권 씩 읽기"),
      new Alarm("bicycle", "이틀에 한번 자전거 타기", new Badge('tertiary', 78), "전민동 일대 5바퀴 타기")
    ]
  }
}
