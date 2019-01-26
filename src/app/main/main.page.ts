import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage implements OnInit {
  policyUrl: string = "https://frontend-developers.tistory.com/1";

  constructor(
    private localNotifications: LocalNotifications
  ) { }

  ngOnInit(): void {
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification'
    })
  }
}
