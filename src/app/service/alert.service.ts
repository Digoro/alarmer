import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alert } from '../model/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async setAlert(alertObj: Alert) {
    const alert = await this.alertCtrl.create(alertObj);
    return await alert.present();
  }
}