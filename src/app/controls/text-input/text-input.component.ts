import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() title = '';
  @Input() inputControlValue: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
