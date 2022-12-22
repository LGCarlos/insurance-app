import { Component, Input, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() backgroundImageColor: string = '';
  @Input() typeCard: string = '';
  constructor() {}

  ngOnInit(): void {}

  // Get src path by card
  getImagePath(type: string) {
    switch (type) {
      case 'icon':
        return `${ConstantsService.imagesPath}card-${this.typeCard}.svg`;
      case 'background':
        return `${ConstantsService.imagesPath}card-${this.backgroundImageColor}.svg`;
      default:
        return null;
    }
  }
}
