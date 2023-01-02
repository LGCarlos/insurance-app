import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { InputDialogComponent } from './input-dialog.component';

@Component({
  selector: 'app-button',
  template: '',
})
class MockButtonComponent {
  @Input() label: any;
  @Input() disabled: any;
}

@Component({
  selector: 'app-calendar-input',
  template: '',
})
class MockCalendarComponent {
  @Input() inputControlValue: any;
}

@Component({
  selector: 'app-checkbox-input',
  template: '',
})
class MockCheckboxComponent {
  @Input() inputControlValue: any;
  @Input() categories: any;
}

@Component({
  selector: 'app-text-input',
  template: '',
})
class MockTextComponent {
  @Input() inputControlValue: any;
  @Input() propertie: any;
}

describe('InputDialogComponent', () => {
  let component: InputDialogComponent;
  let fixture: ComponentFixture<InputDialogComponent>;

  const spyDialogService = jasmine.createSpyObj<DialogService>(
    'DialogService',
    ['open']
  );
  const spyDynamicDialogRef = jasmine.createSpyObj<DynamicDialogRef>(
    'DynamicDialogRef',
    ['close']
  );
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [
        InputDialogComponent,
        MockButtonComponent,
        MockCalendarComponent,
        MockCheckboxComponent,
        MockTextComponent,
      ],
      providers: [
        { provide: DialogService, useValue: spyDialogService },
        { provide: DynamicDialogRef, useValue: spyDynamicDialogRef },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
