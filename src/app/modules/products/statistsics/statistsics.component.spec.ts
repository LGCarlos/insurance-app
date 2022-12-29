import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistsicsComponent } from './statistsics.component';

describe('StatistsicsComponent', () => {
  let component: StatistsicsComponent;
  let fixture: ComponentFixture<StatistsicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistsicsComponent ]
    })
    .compileComponents();
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
