import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPage } from './list.page';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

describe('ListPage', () => {
  let component: ListPage;
  let fixture: ComponentFixture<ListPage>;

  beforeEach(async(() => {
    const routes = [];
    TestBed.configureTestingModule({
      declarations: [ListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot(routes)
      ],
      providers: [
        GooglePlus,
        LocalNotifications
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
