import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Videogame } from '../models/videogame';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Videogame,
              public dialogRef: MatDialogRef<DetalleJuegoComponent>,
              private companyService: CompanyService ) {

   }

  ngOnInit(): void {
  }

  getFormatDate() {
    const date = new Date(this.data.releaseDate);
    const formatDate = (date: any) => {
    let formatted_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
      return formatted_date;
    }
    return formatDate(date);
  }

  getCompanyName() {
    if(this.companyService.Companies) {
      const company = this.companyService.Companies.find(x => this.data.companyId === x.id);
      return company?company.name: this.data.companyId;
    } else {
      return '';
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
