import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';

import { ResultsComponent } from './results.component';

@Component({
  selector: 'app-confirm-dialog',
  template: '',
})
class MockAppConfirmDialogComponent {
  @Input() header: any;
  @Input() message: any;
  @Input() toggle: any;
}

@Component({
  selector: 'app-table',
  template: '',
})
class MockAppTableComponent {
  @Input() totalRecords: any;
  @Input() headers: any;
  @Input() loading: any;
  @Input() data: any;
}

@Component({
  selector: 'app-button',
  template: '',
})
class MockAppButtonComponent {
  @Input() label: any;
  @Input() disabled: any;
}

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  const spyDialogService = jasmine.createSpyObj<DialogService>(
    'DialogService',
    ['open']
  );
  const spyFormBuilder = jasmine.createSpyObj<FormBuilder>('FormBuilder', [
    'group',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      declarations: [
        ResultsComponent,
        MockAppConfirmDialogComponent,
        MockAppTableComponent,
        MockAppButtonComponent,
      ],
      providers: [
        { provide: DialogService, useValue: spyDialogService },
        { provide: FormBuilder, useValue: spyFormBuilder },
        DatePipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let row = {
      clientId: 0,
      firstName: '',
      lastName: '',
      passport: '',
      firstServiceDate: '',
    };
    let case1 = { rows: 10, first: 10 };
    let case2 = { rows: 10, first: 0 };
    component.enableButtons(row);
    component.onRowSelect(row);
    component.onLazyLoad(case1);
    component.onLazyLoad(case2);
    component.goBack();
    component.delete();
    component.openDialog('new');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
