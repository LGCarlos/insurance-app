import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss'],
})
export class InputDialogComponent implements OnInit {
  form?: FormGroup;
  constructor(
    public ref: DynamicDialogRef,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.form = this.commonService.dialogForm;
  }
}
