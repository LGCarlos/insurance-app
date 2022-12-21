import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AutocompleteInputComponent } from './autocomplete-input/autocomplete-input.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AutocompleteInputComponent, ButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    AutoCompleteModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  exports: [AutocompleteInputComponent, ButtonComponent],
})
export class ControlsModule {}
