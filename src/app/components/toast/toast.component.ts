import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { CommonService } from 'src/app/services/common.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService],
})
export class ToastComponent implements OnInit, OnDestroy {
  life = 8000;
  textsToasts: any;
  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
    private toastService: ToastService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getTranslations();
    this.toastService.toastVisibilityChange.subscribe(() => {
      this.getToast();
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: '',
      detail: this.textsToasts.successDetail,
      life: this.life,
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: this.textsToasts.errorSummary,
      detail: this.textsToasts.errorDetail,
      life: this.life,
    });
  }

  showWarnNoResults() {
    this.messageService.add({
      severity: 'warn',
      summary: this.textsToasts.warnSummary,
      detail: this.textsToasts.warnNoResultsDetail,
      life: this.life,
    });
  }

  getToast() {
    switch (this.commonService.toastType) {
      case 'success':
        this.showSuccess();
        break;
      case 'error':
        this.showError();
        break;
      case 'warn-noResults':
        this.showWarnNoResults();
        break;
      default:
        break;
    }
    this.commonService.toastType = '';
  }

  getTranslations() {
    this.translateService.get('common').subscribe((res: any) => {
      this.textsToasts = res.toast;
    });
  }
  ngOnDestroy(): void {
    this.toastService.toastVisibilityChange.unsubscribe();
  }
}
