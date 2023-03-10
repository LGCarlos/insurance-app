import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarInputComponent } from './calendar-input.component';

@Component({
  selector: 'p-calendar',
  template: '',
})
class MockPCalendarComponent {
  @Input() title: any;
  @Input() inputControlValue: any;
  @Input() showIcon: any;
  @Input() formControl: any;
  @Input() minDate: any;
}

describe('CalendarInputComponent', () => {
  let component: CalendarInputComponent;
  let fixture: ComponentFixture<CalendarInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarInputComponent, MockPCalendarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.title = 'Start Date';
    component.ngDoCheck();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.title = 'Fecha alta';
    component.ngDoCheck();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.title = 'End Date';
    component.ngDoCheck();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.title = 'Fecha baja';
    component.ngDoCheck();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
