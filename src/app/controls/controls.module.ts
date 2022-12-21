import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AutocompleteInputComponent } from './autocomplete-input/autocomplete-input.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [AutocompleteInputComponent, ButtonComponent, AvatarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AutoCompleteModule,
    ButtonModule,
    AvatarModule,
  ],
  exports: [AutocompleteInputComponent, ButtonComponent, AvatarComponent],
})
export class ControlsModule {}
