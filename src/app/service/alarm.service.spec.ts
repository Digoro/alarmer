import { TestBed } from '@angular/core/testing';

import { AlarmService } from './alarm.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('AlarmService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireModule.initializeApp(environment.firebase)
    ]
  }));

  it('should be created', () => {
    const service: AlarmService = TestBed.get(AlarmService);
    expect(service).toBeTruthy();
  });
});
