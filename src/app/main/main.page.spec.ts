import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPage } from './main.page';
import { LoginComponent } from '../components/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { RouterModule } from '@angular/router';

describe('MainPage', () => {
  let component: MainPage;
  let fixture: ComponentFixture<MainPage>;

  beforeEach(async(() => {
    const routes = [];

    TestBed.configureTestingModule({
      declarations: [
        MainPage,
        LoginComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot(routes)
      ],
      providers: [
        GooglePlus
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
