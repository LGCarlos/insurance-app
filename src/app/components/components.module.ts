import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ControlsModule } from '../controls/controls.module';
import { TableModule } from 'primeng/table';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { ConfirmationService } from 'primeng/api';
import { InputDialogComponent } from './input-dialog/input-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    HeaderComponent,
    DropdownComponent,
    CardComponent,
    TableComponent,
    ConfirmDialogComponent,
    InputDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ControlsModule,
    TableModule,
    ConfirmDialogModule,
  ],
  exports: [
    HeaderComponent,
    DropdownComponent,
    CardComponent,
    TableComponent,
    ConfirmDialogComponent,
    InputDialogComponent,
  ],
  providers: [ConfirmationService, DialogService],
})
export class ComponentsModule {}
