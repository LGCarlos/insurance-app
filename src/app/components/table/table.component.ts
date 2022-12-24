import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { GridHeaderModel } from 'src/app/models/CommonModels';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() totalRecords!: number;
  @Input() headers!: GridHeaderModel[];
  @Input() loading: boolean = false;
  @Input() selectable: boolean = true;

  private _selectedRowInput!: any;
  @Input()
  public get selectedRowInput(): any {
    return this._selectedRowInput;
  }
  public set selectedRowInput(value: any) {
    this._selectedRowInput = value;
    if (!value) {
      this.selectedRow = undefined;
    }
  }

  @Output() onRowSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLazyLoad: EventEmitter<LazyLoadEvent> =
    new EventEmitter<LazyLoadEvent>();

  selectedRow!: any;

  //Number of records displayed simultaneously at the table
  rows = ConstantsService.TableRowsNumber;

  constructor() { }

  ngOnInit(): void { }

  // Get visible columns names
  getTitles() {
    let arr = this.getVisibleHeaders().map(({ headerText }) => headerText);
    return arr
  }

  // get visible columns property names.
  getVisibleColumns() {
    return this.getVisibleHeaders().map(({ propertyName }) => propertyName);
  }

  getVisibleHeaders(): GridHeaderModel[] {
    return this.headers.filter(item => item.visible);
  }

  onSelectionChange(value = null) {
    this.onRowSelect.emit(value);
  }

  // Lazy load
  loadData(event: LazyLoadEvent) {
    this.onLazyLoad.emit(event);
  }
}
