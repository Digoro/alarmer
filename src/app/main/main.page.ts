import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage implements OnInit {
  constructor(
    public alert: AlertController
  ) { }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
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
