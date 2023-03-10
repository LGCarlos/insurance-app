import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CheckboxOptionsModel } from 'src/app/models/CommonModels';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
})
export class CheckboxInputComponent implements OnInit {
  @Input() categories: CheckboxOptionsModel[] = [];
  @Input() inputControlValue: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
