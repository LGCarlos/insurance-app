import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DropdownComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ControlsModule,
    TableModule,
  ],
  exports: [HeaderComponent, DropdownComponent, CardComponent, TableComponent],
})
export class ComponentsModule {}
