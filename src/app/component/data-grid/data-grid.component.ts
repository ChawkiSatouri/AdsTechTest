import { Component, OnInit } from '@angular/core';
import { CellClassParams, CellClickedEvent, GridApi } from 'ag-grid-community';
import { carsData } from '../constant/carsData';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  public rowData = carsData
  columnDefs = [
    { headerName: '', field: 'column', },
    {
      headerName: '2018', field: '2018',
      width: 75,
      onCellClicked: (event: CellClickedEvent) => {
        console.log(event)
        event.data = this.changeCurrentValue(event)
        this.refreshCells()

      },
      cellStyle: (params: CellClassParams) => {
        return this.customizeCell(params)
      },
    },
    {
      headerName: '2017', field: '2017',
      width: 75,
      onCellClicked: (event: CellClickedEvent) => {
        event.data = this.changeCurrentValue(event)
        this.refreshCells()

      },
      cellStyle: (params: CellClassParams) => {
        return this.customizeCell(params)
      }
    },
    {
      headerName: '2016', field: '2016',
      width: 75,
      onCellClicked: (event: CellClickedEvent) => {
        event.data = this.changeCurrentValue(event)
        this.refreshCells()

      },
      cellStyle: (params: CellClassParams) => {
        return this.customizeCell(params)
      }
    },
    {
      headerName: '2015', field: '2015',
      width: 75,
      onCellClicked: (event: CellClickedEvent) => {
        event.data = this.changeCurrentValue(event)
        this.refreshCells()

      },
      cellStyle: (params: CellClassParams) => {
        return this.customizeCell(params)
      }
    },
    {
      headerName: '2014', field: '2014',
      width: 75,
      onCellClicked: (event: CellClickedEvent) => {
        event.data = this.changeCurrentValue(event)
        this.refreshCells()

      },
      cellStyle: (params: CellClassParams) => {
        return this.customizeCell(params)
      }
    },
    {
      headerName: '2013', field: '2013',
      width: 75,
      onCellClicked: (event: CellClickedEvent) => {
        event.data = this.changeCurrentValue(event)
        this.refreshCells()

      },
      cellStyle: (params: CellClassParams) => {
        return this.customizeCell(params)
      }
    },
    {
      headerName: '2012', field: '2012',
      width: 75,
      onCellClicked: (event: CellClickedEvent) => {
        event.data = this.changeCurrentValue(event)
        this.refreshCells()

      },
      cellStyle: (params: CellClassParams) => {
        return this.customizeCell(params)
      }
    },
    {
      headerName: '2011', field: '2011',
      width: 75,
      onCellClicked: (event: CellClickedEvent) => {
        event.data = this.changeCurrentValue(event)
        this.refreshCells()

      },
      cellStyle: (params: CellClassParams) => {
        return this.customizeCell(params)
      }
    },
    {
      headerName: '2010', field: '2010',
      width: 75,
      onCellClicked: (event: CellClickedEvent) => {
        event.data = this.changeCurrentValue(event)
        this.refreshCells()

      },
      cellStyle: (params: CellClassParams) => {
        return this.customizeCell(params)
      }
    },

  ];


  constructor(private gridApi: GridApi) { }

  ngOnInit(): void {
  }
  public onGridReady(params: any) {
    this.gridApi = params.api;
    params.api.setRowData(this.rowData);
  }
  public customizeCell(params: CellClassParams) {
    if (params.value) {
      return { backgroundColor: '#0070bd', color: "#0070bd" };
    }
    else {
      return { backgroundColor: '#e4e4e4', color: "#e4e4e4" };
    }
  }
  public changeCurrentValue(val: any): any {
    if (val.data[val.colDef.field]) {
      val.data[val.colDef.field] = false
      return false
    }
    else {
      val.data[val.colDef.field] = true
      return true
    }
  }
  public refreshCells() {
    this.gridApi.refreshCells({ force: true })
    this.gridApi.refreshHeader()
  }

}
