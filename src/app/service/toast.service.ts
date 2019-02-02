import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  async presentToast(message: string, color: string = 'tertiary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1700,
      color: color,
      position: 'top',
      mode: 'ios'
    });
    toast.present();
  }
}
