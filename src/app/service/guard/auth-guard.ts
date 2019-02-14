

import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastService } from '../toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private toastService: ToastService
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
    this.toastService.presentToast('알라머 서비스를 이용하려면 로그인이 필요합니다.', 'warning')
  }
}