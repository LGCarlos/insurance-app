import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { UserApiService } from 'src/app/services/api/user-api.service';

import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-dropdown',
  template: '',
})
class MockDropdownComponent {
  @Input() langIcon: any;
}

@Component({
  selector: 'app-avatar',
  template: '',
})
class MockAvatarComponent {
  @Input() label: any;
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const spyUserApiService = jasmine.createSpyObj<UserApiService>(
    'UserApiService',
    ['search']
  );
  const spyService = jasmine.createSpy();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      declarations: [
        HeaderComponent,
        MockDropdownComponent,
        MockAvatarComponent,
      ],
      providers: [{ provide: UserApiService, useValue: spyUserApiService }],
    }).compileComponents();
  });

  beforeEach(() => {
    spyUserApiService.search.and.returnValue(of({}));

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
