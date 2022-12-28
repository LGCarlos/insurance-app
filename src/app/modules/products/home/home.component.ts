import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ClientModel,
  InsuranceCard,
  PassportModel,
} from 'src/app/models/CommonModels';
import { ClientsApiService } from 'src/app/services/api/clients-api.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  insurances: InsuranceCard[] = ConstantsService.insurances;
  clients: ClientModel[] = [];
  passportsList: PassportModel[] = [];
  suggestions: PassportModel[] = [];

  form = this.fb.group({
    passport: [''],
  });

  constructor(
    private commonService: CommonService,
    private clientsApiService: ClientsApiService,
    private toastService: ToastService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.commonService.primaryClientsResults.length) {
      this.clientsApiService.search({}).subscribe(
        (res) => {
          this.clients = res;
          res.forEach((client) =>
            this.passportsList.push(
              (({ passport }) => ({ name: passport }))(client)
            )
          );
          this.commonService.fullPassportsList = [...this.passportsList];
          this.commonService.primaryClientsResults = [...this.clients];
        },
        (error) => {
          // Trigger toast (error)
          this.commonService.toastType = 'error';
          this.toastService.showToast();
        }
      );
    } else {
      this.clients = [...this.commonService.primaryClientsResults];
      this.passportsList = [...this.commonService.fullPassportsList];
    }
  }

  filterPassport(event: any) {
    // In a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
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

  filterInsurance(type: any) {
    // Filter array by insurance
    this.commonService.clientsResults = this.clients.filter(
      (client) => client.insurance[type]
    );
    // Save search filters
    this.commonService.clientsSearchFilters = type;
    // Navigate to results page
    this.router.navigate([ConstantsService.UrlsComponents.Results]);
  }

  searchBy(type: string) {
    switch (type) {
      case 'car':
        this.filterInsurance(type);
        break;
      case 'healthCare':
        this.filterInsurance(type);
        break;
      case 'work':
        this.filterInsurance(type);
        break;
      case 'home':
        this.filterInsurance(type);
        break;

      default:
        break;
    }
  }

  onSubmit(type: string) {
    switch (type) {
      case 'all':
        this.commonService.clientsResults = [...this.clients];
        if (!this.clients.length) {
          // Trigger toast (no results)
          this.commonService.toastType = 'warn-noResults';
          this.toastService.showToast();
        }
        break;
      case 'passport':
        this.commonService.clientsResults = this.clients.filter((client) =>
          client.passport.includes(this.form.value.passport.name)
        );
        if (!this.commonService.clientsResults.length) {
          // Trigger toast (no results)
          this.commonService.toastType = 'warn-noResults';
          this.toastService.showToast();
        }
        break;
      default:
        break;
    }
    // Navigate to Results page only if there is/are results
    this.commonService.clientsResults.length
      ? this.router.navigate([ConstantsService.UrlsComponents.Results])
      : undefined;
  }
}
