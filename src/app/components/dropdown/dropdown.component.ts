import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Langs } from 'src/app/models/CommonModels';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() langIcon: string = '';
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  langs: Langs[] = ConstantsService.langs;

  constructor() {}

  ngOnInit(): void {}

  // Get src path by language
  getIconPath(lang: string) {
    return `${ConstantsService.imagesPath}${lang}.png`;
  }
  // Handle event click at dropdown option
  handleClick(value: string) {
    this.onClick.emit(value);
  }
}
