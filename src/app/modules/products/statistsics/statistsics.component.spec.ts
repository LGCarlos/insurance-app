import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { StatistsicsComponent } from './statistsics.component';

@Component({
  selector: 'app-chart',
  template: '',
})
class MockAppChartComponent {}

describe('StatistsicsComponent', () => {
  let component: StatistsicsComponent;
  let fixture: ComponentFixture<StatistsicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [StatistsicsComponent, MockAppChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistsicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
