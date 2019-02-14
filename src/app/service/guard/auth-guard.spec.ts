import { TestBed } from '@angular/core/testing';

import { AuthGuard } from "./auth-guard";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { RouterModule } from '@angular/router';

describe('AuthGuard', () => {
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
    const service: AuthGuard = TestBed.get(AuthGuard);
    expect(service).toBeTruthy();
  });
});
