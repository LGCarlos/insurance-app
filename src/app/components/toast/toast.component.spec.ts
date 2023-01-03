import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { ToastService } from 'src/app/services/toast.service';

import { ToastComponent } from './toast.component';

@Component({
  selector: 'p-toast',
  template: '',
})
class MockPToastComponent {
  @Input() title: any;
  @Input() inputControlValue: any;
}

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  const spyCommonService = jasmine.createSpyObj<CommonService>(
    'CommonService',
    ['toastType']
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ToastComponent, MockPToastComponent],
      providers: [{ provide: CommonService, useValue: spyCommonService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.textsToasts = {
      successDetail: 'success',
      errorSummary: 'error',
    };
    component.showError();
    component.showSuccess();
    component.getToast();
    component.showWarnNoResults();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyCommonService.toastType = 'success';
    component.textsToasts = {
      successDetail: 'success',
      errorSummary: 'error',
    };
    component.getToast();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyCommonService.toastType = 'error';
    component.textsToasts = {
      successDetail: 'success',
      errorSummary: 'error',
    };
    component.getToast();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyCommonService.toastType = 'warn-noResults';
    component.textsToasts = {
      successDetail: 'success',
      errorSummary: 'error',
    };
    component.getToast();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
