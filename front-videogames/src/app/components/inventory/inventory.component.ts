import { AfterViewInit, ChangeDetectorRef, Component,OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Videogame } from 'src/app/models/videogame';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupJuegoComponent } from '../popup-juego/popup-juego.component';
import { VideogamesService } from 'src/app/services/videogames.service';
import { PopupCompanyComponent } from 'src/app/popup-company/popup-company.component';
import { CompanyService } from 'src/app/services/company.service';
import { DetalleJuegoComponent } from 'src/app/detalle-juego/detalle-juego.component';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'stock', 'companyId', 'releaseDate', 'platform', 'price'];
  public dataSource: Videogame[];
  public filter: any = {
    price: {
      type: 'range',
      max: null,
      min: null,
      enabled: false
    },
    companyId: {
      type: 'match',
      value: null,
      enabled: false
    },
    platform: {
      type: 'match',
      value: null,
      enabled: false
    }
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, public developerDialog: MatDialog,
              private videogameService: VideogamesService,
              private companyService: CompanyService,
              private cdRef: ChangeDetectorRef ) {

    this.videogameService.loaded$.subscribe((data) => {
      if(data) {
        this.dataSource = this.videogames
        this.cdRef.detectChanges();
      }
    })

  }

  ngOnInit(): void {
      
  }

  getFormatDate(fecha: string) {
    const date = new Date(fecha);
    const formatDate = (date: any) => {
    let formatted_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
      return formatted_date;
    }
    return formatDate(date);
  }

  getCompanyName( id: number ) {
    if(this.companyService.Companies) {
      const company = this.companyService.Companies.find(x => id === x.id);
      return company?company.name: id;
    } else {
      return '';
    }
  }

  enableFilter( nameFilter: string ): void {
    if(nameFilter === 'price') {
      if(this.filter[nameFilter].max) {
        this.filter[nameFilter].enabled = true;
      } else {
        this.filter[nameFilter].enabled = false;
      }
    } else{
      if(this.filter[nameFilter].value) {
        this.filter[nameFilter].enabled = true;
      }else{
        this.filter[nameFilter].enabled = false;
      }
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(PopupJuegoComponent, dialogConfig);

  }

  openDeveloperDialog() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(PopupCompanyComponent, dialogConfig);
  }

  showVideogameDetail( row:any ) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = row;
    this.dialog.open(DetalleJuegoComponent, dialogConfig);
  }

  get videogames() {
    if( Object.keys(this.filter).some((x:any) => this.filter[x].enabled)) {
      return eval(`this.videogameService.Videogames.filter(x => ${this.getFilterQuery()})`)
    } else {
      return this.videogameService.Videogames;
    }
    
  }

  get companies() {
    return this.companyService.Companies;
  }

  getFilterQuery() {
    let query = '';
    Object.keys(this.filter).forEach((element:any) => {
      if(this.filter[element].enabled) {
        switch(this.filter[element].type) {
          case 'match':
            query +=  query === '' ? `x.${element} === this.filter['${element}'].value` : `&& x.${element} === this.filter['${element}'].value`; 
            break;
          case 'range':
            query += query === '' ? `(x.${element} > this.filter['${element}'].min && x.${element} < this.filter['${element}'].max)` :`&& (x.${element} > this.filter['${element}'].min && x.${element} < this.filter['${element}'].max)`; 
            break;
        }
      }
    });
    return query;
  }

}
