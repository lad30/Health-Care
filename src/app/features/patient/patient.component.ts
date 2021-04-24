import { Component, OnInit } from '@angular/core';
import { ColumnApi, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  columnDefs;
  rowData;
  defaultColDef = {
    filter: true,
    sortable: true,
    resizable: true,
    menuTabs: ['generalMenuTab', 'filterMenuTab'],
    sortingOrder: ['asc', 'desc'],
  };
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  gridOptions: GridOptions = {
    getMainMenuItems: (() => {
      return [
        'pinSubMenu',
        'separator',
        'resetColumns'
      ];
    }),
    getContextMenuItems: (() => {
      return [
        'copy',
        'copyWithHeaders',
        'paste',
        'separator'
      ]
    }) ,
    suppressDragLeaveHidesColumns: true,
    minColWidth: 80,
    headerHeight: 45,
    animateRows: false,
    context: {
      componentParent: this
    }
  };

  constructor() {
    this.setColumns();
   }

  ngOnInit() {
    this.getData();
  }

  onColumnResized(event) {
    if (event.finished) {
      this.gridApi.resetRowHeights();
    }
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }
  autoSizeAll() {
    this.gridColumnApi.autoSizeColumns(this.columnDefs.map(col => col.field));
  }

  gridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.sizeToFit();
  }

  setColumns(){
    this.columnDefs = [
      {
        headerName: 'Sr.No',
        field: 'id',
        filter: 'agNumberColumnFilter',
        filterParams: {
          clearButton: true
        },
        width: 250
      },
      {
        headerName: 'Date',
        field: 'created_on',
        filter: 'agDateColumnFilter',
        filterParams: {
          clearButton: true,
          inRangeInclusive: true,
          comparator: dateFilterComparator,
          browserDatePicker: true
        },
        width: 250
      },
      {
        headerName: 'Disease',
        field: 'disease',
        filterParams: {
          clearButton: true
        },
        filter: 'agTextColumnFilter',
      },
      {
        headerName: 'Category',
        field: 'category',
        filterParams: {
          clearButton: true
        },
        filter: 'agTextColumnFilter',
      },
      {
        headerName: 'Doctor',
        field: 'doctor',
        filterParams: {
          clearButton: true
        },
        filter: 'agTextColumnFilter',
      }
    ]
  }

  getData(){
    this.rowData = [
      {
        id:1,
        disease: 'Syphilis',
        category: 'Cat-1',
        doctor: 'Hrithvik Lad',
        created_on: new Date()
      },
      {
        id:2,
        disease: 'Influenza A',
        category: 'Cat-2',
        doctor: 'Khalid',
        created_on: new Date()
      },
      {
        id:3,
        disease: 'Syphilis',
        category: 'Cat-1',
        doctor: 'Sumit Phadke',
        created_on: new Date()
      },
      {
        id:4,
        disease: 'Ebola',
        category: 'Cat-3',
        doctor: 'Hrithvik Lad',
        created_on: new Date()
      },
      {
        id:5,
        disease: 'Syphilis',
        category: 'Cat-1',
        doctor: 'Hrithvik Lad',
        created_on: new Date()
      },
    ]
  }

}

function dateFilterComparator(filterDate: Date, cellValue) {
  filterDate = new Date(filterDate.getFullYear(), filterDate.getMonth(), filterDate.getDate(), 23, 59, 59);
  let cellDate = new Date(cellValue);
  cellDate = new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate(), 23, 59, 59);
  // // Now that both parameters are Date objects, we can compare
  const filterTimestamp = filterDate.getTime();
  const cellDateTimestamp = cellDate.getTime();
  if (cellDateTimestamp < filterTimestamp) {
      return -1;
  } else if (cellDateTimestamp > filterTimestamp) {
      return 1;
  } else {
      return 0;
  }
}
