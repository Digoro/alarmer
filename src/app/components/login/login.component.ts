import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: firebase.User;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.setUser();
  }

  googleLogin() {
    this.authService.googleLogin();
    this.setUser();
  }

  signOut() {
    this.authService.signOut();
    this.setUser();
  }

  setUser() {
    this.authService.user$.subscribe(user => {
      this.user = user;
    })
  }
}