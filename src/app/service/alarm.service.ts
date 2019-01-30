import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, AngularFirestoreCollection, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Alarm, Badge } from '../model/alarm';
import { map, tap } from 'rxjs/operators'
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  alarmsCollection: AngularFirestoreCollection<Alarm>;

  constructor(private afs: AngularFirestore) {
    this.alarmsCollection = this.afs.collection<Alarm>('alarms');
  }

  getAlarms(userMail: string): Observable<firebase.firestore.QuerySnapshot> {
    return this.afs.collection<Alarm>('alarms', ref => ref.where('userMail', '==', userMail)).get()
  }

  addAlarm(alarm: Alarm) {
    return this.alarmsCollection.add(alarm);
  }

  deleteAlarm(id: string) {
    return this.alarmsCollection.doc(id).delete();
  }
}
