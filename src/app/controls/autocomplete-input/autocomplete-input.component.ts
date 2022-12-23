import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss'],
})
export class AutocompleteInputComponent implements OnInit {
  @Input() inputControlValue: FormControl = new FormControl('');
  @Input() suggestions: any[] = [];
  @Output() selectedOption = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.selectedOption.emit(event.query);
  }
}
