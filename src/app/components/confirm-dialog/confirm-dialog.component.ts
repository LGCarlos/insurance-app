import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ConfirmationService, ConfirmEventType } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {
  private eventsSubscription: Subscription = new Subscription();

  @Input() message = '';
  @Input() header = '';
  @Input() icon = '';
  @Input() toggle: Observable<void> = new Observable();
  @Output() onConfirm: EventEmitter<null> = new EventEmitter<null>();
  @Output() onReject: EventEmitter<null> = new EventEmitter<null>();
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.eventsSubscription = this.toggle.subscribe(() => this.confirm());
  }

  isVisible(): boolean {
    return this.icon ? false : true;
  }

  confirm() {
    this.confirmationService.confirm({
      message: this.message,
      header: this.header,
      icon: this.icon ? this.icon : 'pi pi-exclamation-triangle',
      accept: () => {
        this.onConfirm.emit();
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.onReject.emit();
            break;
          default:
            break;
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }
}
