import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { ClientsApiService } from 'src/app/services/api/clients-api.service';

import { HomeComponent } from './home.component';

@Component({
  selector: 'app-card',
  template: '',
})
class MockAppCardComponent {
  @Input() typeCard: any;
  @Input() backgroundImageColor: any;
}

@Component({
  selector: 'app-button',
  template: '',
})
class MockAppButtonComponent {
  @Input() label: any;
}

@Component({
  selector: 'app-autocomplete-input',
  template: '',
})
class MockAppAutocompleteComponent {
  @Input() suggestions: any;
  @Input() inputControlValue: any;
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const spyClientsApiService = jasmine.createSpyObj<ClientsApiService>(
    'ClientsApiService',
    ['search']
  );
  const spyFormBuilder = jasmine.createSpyObj<FormBuilder>('FormBuilder', [
    'group',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      declarations: [
        HomeComponent,
        MockAppCardComponent,
        MockAppButtonComponent,
        MockAppAutocompleteComponent,
      ],
      providers: [
        { provide: ClientsApiService, useValue: spyClientsApiService },
        { provide: FormBuilder, useValue: spyFormBuilder },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    spyClientsApiService.search.and.returnValue(of([]));

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.passportsList = [{ name: 'eee' }];
    component.filterPassport('EE');
    component.filterInsurance('car');
    component.onSubmit('all');
    component.onSubmit('passport');
    component.onSubmit('any');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
