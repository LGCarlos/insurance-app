import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ClientModel,
  ClientsSearchRequestModel,
} from 'src/app/models/CommonModels';
import { ClientsApiService } from 'src/app/services/api/clients-api.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  insurances: any = ConstantsService.insurances;
  clients!: ClientModel[];
  passportsList: any = [];
  suggestions!: any[];
  data!: Subscription;

  form = this.fb.group({
    passport: [''],
  });

  constructor(
    private commonService: CommonService,
    private clientsApiService: ClientsApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.data = this.clientsApiService.search({}).subscribe(
      (res) => {
        this.clients = res;
        res.forEach((client) =>
          this.passportsList.push(
            (({ passport }) => ({ name: passport }))(client)
          )
        );
      },
      (error) => {
        //TODO: toast
      }
    );
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

  callClientsApi(body: ClientsSearchRequestModel, type: any) {
    let results = [];
    this.clientsApiService.search(body).subscribe(
      (res) => {
        results = res.filter((client) => client.insurance[type]);
        this.commonService.clientsResults = results;
        this.commonService.clientsSearchFilters = body.insurance
          ? body.insurance
          : '';
        this.router.navigate([ConstantsService.UrlsComponents.Results]);
      },
      (error) => {
        //TODO: toast
      }
    );
  }

  searchBy(type: string) {
    switch (type) {
      case 'car':
        this.callClientsApi({ insurance: type }, type);
        break;
      case 'healthCare':
        this.callClientsApi({ insurance: type }, type);
        break;
      case 'work':
        this.callClientsApi({ insurance: type }, type);
        break;
      case 'home':
        this.callClientsApi({ insurance: type }, type);
        break;

      default:
        break;
    }
  }

  onSubmit(type: string) {
    switch (type) {
      case 'all':
        this.clientsApiService.search({}).subscribe(
          (res) => {
            this.commonService.clientsResults = res;
            this.router.navigate([ConstantsService.UrlsComponents.Results]);
          },
          (error) => {
            //TODO: toast
          }
        );
        break;
      case 'passport':
        this.clientsApiService
          .search({ passport: this.form.value.passport })
          .subscribe(
            (res) => {
              this.commonService.clientsResults = res;
              this.router.navigate([ConstantsService.UrlsComponents.Results]);
            },
            (error) => {
              //TODO: toast
            }
          );
        break;

      default:
        break;
    }
    // TODO: submit form
    this.router.navigate([ConstantsService.UrlsComponents.Results]);
  }

  ngOnDestroy() {
    this.data.unsubscribe();
  }
}
