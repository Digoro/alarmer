import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  user: firebase.User;

  constructor(
    private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform,
    private router: Router,
    private toastService: ToastService
  ) {
    this.user$ = this.afAuth.authState;
    this.user = afAuth.auth.currentUser;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      };
    });
  }

  googleLogin() {
    if (this.platform.is('cordova')) this.nativeGoogleLogin();
    else this.webGoogleLogin();
  }

  err: string;
  nativeGoogleLogin(): any {
    // try {
    //   const gplusUser = await this.gplus.login({
    //     'webClientId': environment.gplusUser.webClientId,
    //     'offline': true,
    //     'scopes': 'profile email'
    //   })
    //   return await this.afAuth.auth.signInWithCredential(
    //     firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
    // } catch (err) {
    //   this.err = `native login error ${err}`;
    //   console.log(`native login error ${err}`)
    // }
    this.gplus.login({
      'webClientId': environment.gplusUser.webClientId,
      'offline': true,
      'scopes': 'profile email'
    }).then(credential => {
      const googleCredential = firebase.auth.GoogleAuthProvider.credential(credential.idToken);
      firebase.auth().signInWithCredential(googleCredential).then(res => {
        const name = res.displayName;
        this.toastMesssage(`${name}님 환영합니다.`);
      })
    }, error => {
      console.error("error: ", error);
    })
  }

  webGoogleLogin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(res => {
        const name = res.additionalUserInfo.profile['name'];
        this.toastMesssage(`${name}님 환영합니다.`);
      })
    } catch (err) {
      this.err = `web login error ${err}`;
      console.log(`web login error ${err}`)
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
    if (this.platform.is('cordova')) {
      this.gplus.logout();
    }
    this.toastMesssage('로그아웃 되었습니다.')
    this.router.navigate(['/']);
  }

  toastMesssage(msg: string) {
    this.toastService.presentToast(msg, 'primary')
  }
}