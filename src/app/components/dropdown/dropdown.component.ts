import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() langIcon: string = '';
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  iconEn!: string;
  iconEs!: string;
  langEn!: string;
  langEs!: string;

  constructor() {}

  ngOnInit(): void {
    this.langEn = ConstantsService.langs.en;
    this.langEs = ConstantsService.langs.es;
    this.iconEn = `${ConstantsService.imagesPath}en.png`;
    this.iconEs = `${ConstantsService.imagesPath}es.png`;
  }

  handleClick(value: string) {
    this.onClick.emit(value);
  }
}
