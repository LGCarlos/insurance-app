import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  displayedData: ClientTableDataModel[] = [];

  totalRecords: number = 20;
  headers: GridHeaderModel[] = [];
  selectedRow: ClientModel | any;
  loading: boolean = false;
  titlesTable!: any;
  perPage: number = 11;

  showDialog: Subject<void> = new Subject<void>();
  ref?: DynamicDialogRef;

  selected: boolean = false;

  constructor(
    private translateService: TranslateService,
    private commonService: CommonService,
    private dialogService: DialogService,
    private router: Router,
    private fb: FormBuilder
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
    this.displayedData = this.data.filter((item) => item.clientId < 11);
  }

  getTranslations() {
    this.translateService.get('common').subscribe((res: any) => {
      this.titlesTable = res.tableHeaders;
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
      let resultsPosition: number;
      this.loading = true;
      if (event.first !== 0 && event.first !== undefined) {
        resultsPosition = event.first;
        this.searchClients(resultsPosition);
      } else if (event.first === 0) {
        resultsPosition = event.first;
        this.searchClients(resultsPosition);
      }
    }
  }

  searchClients(resultsPosition: number) {
    this.displayedData = this.data.filter(
      (item) =>
        item.clientId < resultsPosition + this.perPage &&
        item.clientId > resultsPosition
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
  }

  update() {
    this.commonService.dialogForm = this.fb.group({
      passport: [''],
    });
    this.openDialog('Hello world!').subscribe(
      (obj: { valid: boolean; form: any }) => {
        obj.form && obj.valid ? 'updating...' : 'something went wrong';
      }
    );
  }

  openDialog(title: string): Observable<any> {
    return new Observable((observer) => {
      this.ref = this.dialogService.open(InputDialogComponent, {
        header: title,
        width: '60%',
        contentStyle: { 'min-height': '420px', overflow: 'auto' },
        baseZIndex: 998,
      });
      this.ref.onClose.subscribe((form: any) => {
        form ? observer.next({ valid: true, form }) : null;
      });
    });
  }

  getDialogHeader() {
    //TODO
    return 'Delete?';
  }

  getDialogMessage() {
    //TODO
    return 'Are u sure?';
  }

  ngOnDestroy() {
    this.data = [];
  }
}
