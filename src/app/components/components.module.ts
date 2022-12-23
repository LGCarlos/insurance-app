import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [HeaderComponent, DropdownComponent, CardComponent],
  imports: [CommonModule, RouterModule, TranslateModule, ControlsModule],
  exports: [HeaderComponent, DropdownComponent, CardComponent],
})
export class ComponentsModule {}
