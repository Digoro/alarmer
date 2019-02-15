import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmCardComponent } from './alarm-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Alarm } from 'src/app/model/alarm';
import { CommonModule } from '@angular/common';

describe('AlarmListComponent', () => {
  let component: AlarmCardComponent;
  let fixture: ComponentFixture<AlarmCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlarmCardComponent],
      imports: [
        IonicModule,
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmCardComponent);
    component = fixture.componentInstance;
    component.alarm = new Alarm("id", "userMail", "icon", "title", "desc", "frequency", false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
