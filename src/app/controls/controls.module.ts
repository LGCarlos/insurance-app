import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteInputComponent } from './autocomplete-input/autocomplete-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [AutocompleteInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    AutoCompleteModule,
    ReactiveFormsModule,
  ],
  exports: [AutocompleteInputComponent],
})
export class ControlsModule {}
