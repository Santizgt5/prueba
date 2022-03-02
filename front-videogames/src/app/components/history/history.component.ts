import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { History } from 'src/app/models/history';
import { Videogame } from 'src/app/models/videogame';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'date', 'quantity', 'date', 'totalPrice'];
  dataSource = new MatTableDataSource<History>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}

  const ELEMENT_DATA: History[] = [
    {id: 1, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 2, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 3, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 4, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 5, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 6, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 7, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 8, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 9, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 10, date:'11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 11, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 12, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 13, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 14, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 15, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 16, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 17, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 18, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 19, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
    {id: 20, date: '11/10/1998', quantity: 14, title: 'Compra por Santiago', totalPrice: 140000},
  ];
