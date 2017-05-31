import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayInfoListComponent } from './day-info-list.component';

describe('DayInfoListComponent', () => {
  let component: DayInfoListComponent;
  let fixture: ComponentFixture<DayInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
