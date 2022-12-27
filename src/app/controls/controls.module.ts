import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AutocompleteInputComponent } from './autocomplete-input/autocomplete-input.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { TextInputComponent } from './text-input/text-input.component';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';

@NgModule({
  declarations: [
    AutocompleteInputComponent,
    ButtonComponent,
    AvatarComponent,
    TextInputComponent,
    CheckboxInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AutoCompleteModule,
    ButtonModule,
    AvatarModule,
    CheckboxModule,
  ],
  exports: [
    AutocompleteInputComponent,
    ButtonComponent,
    AvatarComponent,
    TextInputComponent,
    CheckboxInputComponent,
  ],
})
export class ControlsModule {}
