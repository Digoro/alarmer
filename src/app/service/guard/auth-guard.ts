

import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { AlertService } from '../alert.service';
import { Alert, AlertButton } from 'src/app/model/alert';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private alertService: AlertService,
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
    const alert = new Alert('로그인 해주세요', '알라머 서비스를 이용하려면 로그인이 필요합니다.',
      [new AlertButton('확인', () => { this.router.navigate(['tabs/main']) })])
    this.alertService.setAlert(alert);
  }
}