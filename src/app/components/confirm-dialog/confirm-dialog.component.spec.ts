import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';

import { ConfirmDialogComponent } from './confirm-dialog.component';

@Component({
  selector: 'p-confirmDialog',
  template: '',
})
class MockConfirmDialogComponent {
  @Input() baseZIndex: any;
  @Input() acceptLabel: any;
  @Input() rejectLabel: any;
  @Input() acceptVisible: any;
  @Input() rejectVisible: any;
}

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  const spyConfirmationService = jasmine.createSpyObj<ConfirmationService>(
    'ConfirmationService',
    ['confirm']
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ConfirmDialogComponent, MockConfirmDialogComponent],
      providers: [
        { provide: ConfirmationService, useValue: spyConfirmationService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
