import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage implements OnInit {
  constructor(
    private alert: AlertController,
    private localNotifications: LocalNotifications
  ) { }

  ngOnInit(): void {
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification'
    })
  }

  async showUntilMsg() {
    const alert = await this.alert.create({
      header: '서비스 준비 중입니다!',
      message: '더 놀라운 알라미 기능이 추가됩니다. <br> 기대해주세요',
      buttons: ['OK']
    });

    await alert.present();
  }
}
