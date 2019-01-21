import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmCardComponent } from './alarm-card.component';

describe('AlarmListComponent', () => {
  let component: AlarmCardComponent;
  let fixture: ComponentFixture<AlarmCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlarmCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
