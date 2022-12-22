import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [HeaderComponent, DropdownComponent],
  imports: [CommonModule, RouterModule, TranslateModule, ControlsModule],
  exports: [HeaderComponent, DropdownComponent],
})
export class ComponentsModule {}
