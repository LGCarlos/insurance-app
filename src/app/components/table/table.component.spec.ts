import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { TableComponent } from './table.component';

@Component({
  selector: 'p-table',
  template: '',
})
class MockPTableComponent {
  @Input() totalRecords: any;
  @Input() headers: any;
  @Input() loading: any;
  @Input() value: any;
  @Input() lazy: any;
  @Input() selection: any;
  @Input() paginator: any;
  @Input() rows: any;
}

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [TableComponent, MockPTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.headers = [
      {
        headerText: 'id',
        propertyName: 'id',
        visible: true,
      },
    ];

    component.getTitles();
    component.getVisibleColumns();
    component.onSelectionChange(null);
    component.loadData({});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
