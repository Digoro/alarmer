import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, AngularFirestoreCollection, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Alarm, Badge } from '../model/badge';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  alarmsCollection: AngularFirestoreCollection<Alarm>;

  constructor(private afs: AngularFirestore) {
    this.alarmsCollection = this.afs.collection<Alarm>('alarms');
  }

  getAlarms(): Observable<firebase.firestore.QuerySnapshot> {
    return this.alarmsCollection.get();
  }
}
