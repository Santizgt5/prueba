import { AfterViewInit, Component,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Videogame } from 'src/app/models/videogame';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupJuegoComponent } from '../popup-juego/popup-juego.component';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements AfterViewInit  {

  displayedColumns: string[] = ['id', 'title', 'stock', 'companyId', 'releaseDate', 'platform', 'price'];
  dataSource = new MatTableDataSource<Videogame>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig()

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(PopupJuegoComponent, dialogConfig);

    // import { MatDialogModule } from '@angular/material/dialog';
  }

}

const ELEMENT_DATA: Videogame[] = [
  {id: 1, title: 'Hydrogen', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 2, title: 'Helium', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 3, title: 'Lithium', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 4, title: 'Beryllium', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 5, title: 'Boron', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 6, title: 'Carbon', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 7, title: 'Nistrogen', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 8, title: 'Oxygen', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 9, title: 'Fluorine', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 10, title: 'Neon', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 11, title: 'Sodium', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 12, title: 'Magnesium', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 13, title: 'Aluminum', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 14, title: 'Silicon', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 15, title: 'Phosphorus', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 16, title: 'Sulfur', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 17, title: 'Chlorine', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 18, title: 'Argon', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 19, title: 'Potassium', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
  {id: 20, title: 'Calcium', stock: 10, companyId: '12312312', releaseDate: '11/10/1998', platform: 'PS5', price: 1200},
];
