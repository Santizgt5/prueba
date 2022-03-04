import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { History } from 'src/app/models/history';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  displayedColumns: string[] = ['id', 'date', 'quantity', 'title', 'totalPrice'];
  dataSource: History[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private historyService: HistoryService) { 
    this.historyService.loaded$.subscribe((data) => {
      if(data) {
        this.dataSource = this.histories
      }
    })
  }

  getFormatDate(fecha: string) {
    const date = new Date(fecha);
    const formatDate = (date: any) => {
    let formatted_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
      return formatted_date;
    }
    return formatDate(date);
  }


  ngOnInit(): void {

  }

  get histories() {
    return this.historyService.Histories
  }

  
}

  const ELEMENT_DATA: History[] = [];
