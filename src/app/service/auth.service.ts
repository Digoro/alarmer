import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState;
  }

  ngOnInit() {
  }

  googleLogin() {
    if (this.platform.is('cordova')) this.nativeGoogleLogin();
    else this.webGoogleLogin();
  }

  err: string;
  async nativeGoogleLogin(): Promise<any> {
    try {
      const gplusUser = await this.gplus.login({
        'webClientId': environment.gplusUser.webClientId,
        'offline': true,
        'scopes': 'profile email'
      })
      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
    } catch (err) {
      this.err = `native login error ${err}`;
      console.log(`native login error ${err}`)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
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
    this.router.navigate(['/']);
  }
}