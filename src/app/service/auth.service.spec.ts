import { TestBed } from '@angular/core/testing';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  const routes = [];
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireModule.initializeApp(environment.firebase),
      RouterModule.forRoot(routes)
    ],
    providers: [
      GooglePlus
    ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
