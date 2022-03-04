import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { History } from '../models/history';
import { Videogame } from '../models/videogame';
import { CompanyService } from '../services/company.service';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent implements OnInit {

  public cantidad = 0;
  private history: History;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Videogame,
              public dialogRef: MatDialogRef<DetalleJuegoComponent>,
              private companyService: CompanyService,
              private historyService: HistoryService ) {

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

  addOrSubtract(operator: boolean ) {
    if(operator) {
      if( this.cantidad < this.data.stock ) {
        this.cantidad++
      }
    } else {
      if(this.cantidad > 0) {
        this.cantidad--
      }
    }
  }

  public async crearHistoria() {
    const now = Date.now();
    this.history = {
      date: new Date(now),
      quantity: this.cantidad,
      title: this.data.title,
      totalPrice: this.data.price * this.cantidad
    }
    const resp = await this.historyService.createHistory(this.history);
    if(resp) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La compra se hizo correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
