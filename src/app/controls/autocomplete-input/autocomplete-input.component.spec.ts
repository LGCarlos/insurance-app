import { Component, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteInputComponent } from './autocomplete-input.component';

@Component({
  selector: 'p-autoComplete',
  template: '',
})
class MockAutoCompleteComponent {
  @Input() inputControlValue: any;
  @Input() suggestions: any;
  @Input() dropdown: any;
  @Input() formControl: any;
  @Output() selectedOption: any;
}

describe('AutocompleteInputComponent', () => {
  let component: AutocompleteInputComponent;
  let fixture: ComponentFixture<AutocompleteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocompleteInputComponent, MockAutoCompleteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.onChange({});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
