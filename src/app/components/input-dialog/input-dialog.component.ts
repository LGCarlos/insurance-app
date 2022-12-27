import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CheckboxOptionsModel } from 'src/app/models/CommonModels';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss'],
})
export class InputDialogComponent implements OnInit {
  form?: FormGroup;
  categories: CheckboxOptionsModel[] = [];

  constructor(
    public ref: DynamicDialogRef,
    private commonService: CommonService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.getTranslations();
    this.form = this.commonService.dialogForm;
  }

  getFormControl(name: string) {
    return this.form && this.form.controls
      ? (this.form.controls[name] as FormControl)
      : new FormControl();
  }

  getTranslations() {
    this.translateService
      .get('common.inputs.insurances')
      .subscribe((res: any) => {
        this.categories = res;
      });
  }

  onConfirm() {
    this.ref.close(this.form?.value);
  }

  onReject() {
    this.ref.close();
  }
}
