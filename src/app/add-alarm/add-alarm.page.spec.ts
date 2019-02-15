import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlarmPage } from './add-alarm.page';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CronEditorModule } from 'cron-editor';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

describe('AddAlarmPage', () => {
  let component: AddAlarmPage;
  let fixture: ComponentFixture<AddAlarmPage>;

  beforeEach(async(() => {
    const routes = [];
    TestBed.configureTestingModule({
      declarations: [AddAlarmPage],
      imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        CronEditorModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot(routes)
      ],
      providers: [
        GooglePlus
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
