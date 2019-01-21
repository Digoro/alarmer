import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlarmPage } from './add-alarm.page';

describe('AddAlarmPage', () => {
  let component: AddAlarmPage;
  let fixture: ComponentFixture<AddAlarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddAlarmPage]
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
