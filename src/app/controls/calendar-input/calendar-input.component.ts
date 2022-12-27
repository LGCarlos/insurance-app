import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-calendar-input',
  templateUrl: './calendar-input.component.html',
  styleUrls: ['./calendar-input.component.scss'],
})
export class CalendarInputComponent implements OnInit, DoCheck {
  @Input() title = '';
  @Input() inputControlValue: FormControl = new FormControl('');

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    switch (this.title) {
      case 'Start Date' || 'Fecha alta':
        this.commonService.minDateValue = this.inputControlValue.value;
        break;
      case 'End Date' || 'Fecha baja':
        this.commonService.minDateValue ? this.getMinValue() : null;
        break;
      default:
        break;
    }
  }
  getMinValue() {
    let value = this.commonService.minDateValue;
    Date.parse(value);
    return value;
  }
}
