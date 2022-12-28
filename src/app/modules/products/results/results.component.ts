import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subject } from 'rxjs';
import { InputDialogComponent } from 'src/app/components/input-dialog/input-dialog.component';
import {
  ClientModel,
  ClientTableDataModel,
  GridHeaderModel,
} from 'src/app/models/CommonModels';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ToastService } from 'src/app/services/toast.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit, OnDestroy {
  data: ClientTableDataModel[] = this.commonService.clientsResults
    ? this.commonService.clientsResults
    : [];
  displayedData!: ClientTableDataModel[];

  totalRecords!: number;
  headers: GridHeaderModel[] = [];
  selectedRow: ClientModel | any;
  loading: boolean = false;
  titlesTable!: any;
  indexPerPage: number = 10;
  resultsPosition: number = 0;

  showDialog: Subject<void> = new Subject<void>();
  ref?: DynamicDialogRef;
  dialogs: any;

  selected: boolean = false;

  constructor(
    private translateService: TranslateService,
    private commonService: CommonService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private router: Router,
    private fb: FormBuilder,
    private datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    // Redirect to home page if there is not client's results
    this.commonService.clientsResults.length
      ? null
      : this.router.navigate([ConstantsService.UrlsComponents.Home]);

    // Get translations
    this.getTranslations();

    // Get titles table headers
    setTimeout(() => {
      this.setHeaders();
    }, 0);
    //Get data displayed at table
    this.searchClients();
    this.totalRecords = this.data.length;
  }

  getTranslations() {
    this.translateService.get('common').subscribe((res: any) => {
      this.titlesTable = res.tableHeaders;
      this.dialogs = res.dialogs;
    });
  }

  setHeaders() {
    this.headers = [
      { headerText: '', propertyName: 'clientId', visible: false },
      {
        headerText: this.titlesTable.firstName,
        propertyName: 'firstName',
        visible: true,
      },
      {
        headerText: this.titlesTable.lastName,
        propertyName: 'lastName',
        visible: true,
      },
      {
        headerText: this.titlesTable.passport,
        propertyName: 'passport',
        visible: true,
      },
      {
        headerText: this.titlesTable.firstServiceDate,
        propertyName: 'firstServiceDate',
        visible: true,
      },
      {
        headerText: this.titlesTable.lastServiceDate,
        propertyName: 'lastServiceDate',
        visible: true,
      },
    ];
  }

  enableButtons(selectedRow: ClientTableDataModel) {
    this.selected = !!selectedRow;
  }

  onRowSelect(selectedRow: ClientTableDataModel) {
    // Find by id the original item associaated to selected row
    this.selectedRow = selectedRow
      ? this.data.find((item) => item.clientId === selectedRow.clientId)
      : undefined;
    // Enable Button
    this.enableButtons(selectedRow);
  }

  onLazyLoad(event: LazyLoadEvent): void {
    if (event && event.rows !== undefined) {
      this.loading = true;
      if (event.first !== 0 && event.first !== undefined) {
        this.resultsPosition = event.first;
        this.searchClients();
      } else if (event.first === 0) {
        this.resultsPosition = event.first;
        this.searchClients();
      }
    }
  }

  searchClients() {
    this.displayedData = this.data.slice(
      this.resultsPosition,
      this.resultsPosition + this.indexPerPage
    );
    this.loading = false;
  }

  goBack() {
    this.router.navigate([ConstantsService.UrlsComponents.Home]);
  }

  delete() {
    this.showDialog.next();
  }

  confirmDelete() {
    // Remove from table data
    let indexTable = UtilsService.getIndexAtArray(
      this.selectedRow,
      this.displayedData
    );
    this.displayedData.splice(indexTable, 1);

    // Remove from common service clientsResults
    let indexData = UtilsService.getIndexAtArray(this.selectedRow, this.data);
    this.data.splice(indexData, 1);
    this.totalRecords = this.data.length;

    // Remove from common service clientsResults
    let indexCommonService = UtilsService.getIndexAtArray(
      this.selectedRow,
      this.commonService.primaryClientsResults
    );
    this.commonService.primaryClientsResults.splice(indexCommonService, 1);

    // Remove from common service
    let indexPassportList = UtilsService.getPassportIndexAtArray(
      this.selectedRow.passport,
      this.commonService.fullPassportsList
    );
    this.commonService.fullPassportsList.splice(indexPassportList, 1);

    // Disable button
    this.selected = false;
    // Refresh table data
    this.displayedData = this.data.slice(
      this.resultsPosition,
      this.resultsPosition + this.indexPerPage
    );
    // Trigger toast (success)
    this.commonService.toastType = 'success';
    this.toastService.showToast();
  }

  setInsurances(form: any, startDate: string) {
    let date = UtilsService.getEndDate(form.firstServiceDate);
    let endDate = this.datepipe.transform(date, 'yyy-MM-dd');
    let result: any = {};
    form.insurances.forEach((insurance: any) => {
      result[insurance.name] = {
        paymentUpToDate: true,
        startDate: startDate,
        endDate: endDate,
      };
    });
    return result;
  }

  setNewArray(arr: ClientModel[]): ClientModel[] {
    let firstServiceDate =
      this.commonService.dialogForm?.value.firstServiceDate &&
      this.datepipe.transform(
        this.commonService.dialogForm?.value.firstServiceDate,
        'yyy-MM-dd'
      );
    let newArr = arr.map((obj) => {
      if (obj.clientId === this.selectedRow.clientId) {
        return {
          ...obj,
          firstName: this.commonService.dialogForm?.value.firstName,
          lastName: this.commonService.dialogForm?.value.lastName,
          passport: this.commonService.dialogForm?.value.passport,
          firstServiceDate,
          insurance: this.setInsurances(
            this.commonService.dialogForm?.value,
            firstServiceDate
          ),
        };
      }
      return obj;
    });
    return newArr;
  }

  update() {
    this.commonService.dialogForm = this.fb.group({
      firstName: [this.selectedRow.firstName, Validators.required],
      lastName: [this.selectedRow.lastName, Validators.required],
      passport: [this.selectedRow.passport, Validators.required],
      firstServiceDate: [
        new Date(this.selectedRow.firstServiceDate),
        Validators.required,
      ],
      insurances: [
        UtilsService.getCurrentCheckboxValues(this.selectedRow.insurance),
      ],
    });
    this.openDialog(this.dialogs.updateHeader).subscribe(
      (obj: { valid: boolean; form: any }) => {
        if (obj.valid) {
          // Update primary clients array results
          let newArrPrimary = this.setNewArray(
            this.commonService.primaryClientsResults
          );
          // Update clients array results
          let newArrClients = this.setNewArray(
            this.commonService.clientsResults
          );
          // Update arrays
          this.commonService.primaryClientsResults = newArrPrimary;
          this.data = newArrClients;
          // Refresh table data
          this.searchClients();
          // Trigger toast (success)
          this.commonService.toastType = 'success';
          this.toastService.showToast();
        }
      }
    );
  }

  create() {
    this.commonService.dialogForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      passport: ['', Validators.required],
      firstServiceDate: ['', Validators.required],
      insurances: [],
    });
    this.openDialog(this.dialogs.createHeader).subscribe(
      (obj: { valid: boolean; form: any }) => {
        if (obj.valid) {
          let firstServiceDate =
            this.commonService.dialogForm?.value.firstServiceDate &&
            this.datepipe.transform(
              this.commonService.dialogForm?.value.firstServiceDate,
              'yyy-MM-dd'
            );
          let date = UtilsService.getEndDate(
            this.commonService.dialogForm?.value.firstServiceDate
          );
          let lastServiceDate = this.datepipe.transform(date, 'yyy-MM-dd');
          let newClient = {
            clientId: UtilsService.getNewId(
              this.commonService.primaryClientsResults
            ),
            firstName: this.commonService.dialogForm?.value.firstName,
            lastName: this.commonService.dialogForm?.value.lastName,
            passport: this.commonService.dialogForm?.value.passport,
            firstServiceDate,
            lastServiceDate: lastServiceDate ? lastServiceDate : '',
            insurance: this.setInsurances(
              this.commonService.dialogForm?.value,
              firstServiceDate
            ),
          };
          this.commonService.primaryClientsResults = [
            ...this.commonService.primaryClientsResults,
            newClient,
          ];
          this.data = [...this.data, newClient];
          this.totalRecords = this.data.length;
          // Refresh table data
          this.searchClients();
          // Trigger toast (success)
          this.commonService.toastType = 'success';
          this.toastService.showToast();
        }
      }
    );
  }

  openDialog(title: string): Observable<any> {
    return new Observable((observer) => {
      this.ref = this.dialogService.open(InputDialogComponent, {
        header: title,
        width: 'auto',
        contentStyle: { 'min-height': '420px', overflow: 'auto' },
        baseZIndex: 998,
      });
      this.ref.onClose.subscribe((form: any) => {
        form ? observer.next({ valid: true, form }) : null;
      });
    });
  }

  ngOnDestroy() {
    this.data = [];
  }
}
