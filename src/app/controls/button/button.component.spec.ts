import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

@Component({
  selector: 'button',
  template: '',
})
class MockButtonComponent {
  @Input() icon: any;
  @Input() label: any;
}

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent, MockButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.handleClick();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
