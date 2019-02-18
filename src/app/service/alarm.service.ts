import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Alarm } from '../model/alarm';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  alarmsCollection: AngularFirestoreCollection<Alarm>;

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
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

  enableAlarm(id: string, enable: boolean) {
    return this.alarmsCollection.doc(id).update({
      enable: enable
    })
  }

  getIcon(): Observable<string[]> {
    return this.http.get<string[]>('../../assets/icons.json');
  }
}
