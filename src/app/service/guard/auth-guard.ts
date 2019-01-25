

import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
    return this.authService.user$.pipe(
      map(user => {
        if (user) return true;
        else {
          this.showAuthErr();
          return false;
        }
      })
    )
  }

  async showAuthErr() {
    const alert = await this.alertCtrl.create({
      header: '로그인 해주세요',
      message: '알라머 서비스를 이용하려면 로그인이 필요합니다.',
      buttons: [
        { text: '확인', handler: () => this.router.navigate(['tabs/main']) }
      ]
    });
    return await alert.present();
  }
}