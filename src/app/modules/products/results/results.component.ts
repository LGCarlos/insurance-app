import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LazyLoadEvent } from 'primeng/api';
import {
  ClientModel,
  ClientTableDataModel,
  GridHeaderModel,
} from 'src/app/models/CommonModels';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  data: ClientTableDataModel[] = [];
  totalRecords: number = 0;
  headers: GridHeaderModel[] = [];
  selectedRow: ClientModel | any;
  loading: boolean = false;
  titlesTable!: any;
  page: number = 1;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.getTranslations();
    setTimeout(() => {
      this.setHeaders();
    }, 300);
    this.data = [];
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

  onRowSelect(selectedRow: ClientTableDataModel) {
    // Find by id the original item associaated to selected row
    this.selectedRow = selectedRow
      ? this.data.find((item) => item.clientId === selectedRow.clientId)
      : undefined;
  }

  onLazyLoad(event: LazyLoadEvent): void {
    if (event && event.first !== undefined && event.rows !== undefined) {
      let page = event.first / event.rows + 1;
      if (page !== this.page) {
        this.page = page;
        // Search data
        this.searchClients();
      }
    }
  }
  searchClients() {
    this.loading = true;

    //TODO call , put loading false once is finished
  }
}
