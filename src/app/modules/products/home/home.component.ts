import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientModel, InsuranceCard } from 'src/app/models/CommonModels';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  insurances: any = ConstantsService.insurances;
  clients!: ClientModel[];
  passportsList: any = [];
  suggestions!: any[];

  form = this.fb.group({
    passport: [''],
  });

  constructor(
    private commonService: CommonService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.commonService.getClients().subscribe((res) => {
      this.clients = res;
      res.forEach((client) =>
        this.passportsList.push(
          (({ passport }) => ({ name: passport }))(client)
        )
      );
    });
  }

  filterPassport(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    this.passportsList.forEach((passport: { name: string }) => {
      passport.name.toLowerCase().indexOf(event.toLowerCase()) === 0
        ? filtered.push(passport)
        : null;
    });

    this.suggestions = filtered;
  }

  getFormControl(name: string) {
    return this.form && this.form.controls
      ? (this.form.controls[name] as FormControl)
      : new FormControl();
  }

  searchResultByPassport() {
    // TODO: Navigate to next window saving client's data
  }

  onSubmit() {
    // TODO: submit form
    this.router.navigate([ConstantsService.UrlsComponents.Results]);
  }
}
