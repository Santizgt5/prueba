import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, _closeDialogVia } from '@angular/material/dialog';
import { Company } from 'src/app/models/company';
import { Videogame } from 'src/app/models/videogame';
import { CompanyService } from 'src/app/services/company.service';
import { VideogamesService } from 'src/app/services/videogames.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-popup-juego',
  templateUrl: './popup-juego.component.html',
  styleUrls: ['./popup-juego.component.css']
})
export class PopupJuegoComponent implements OnInit {

  public formGroup: FormGroup;
  private videogame: Videogame

  constructor(public dialogRef: MatDialogRef<PopupJuegoComponent>, 
              private videogameService: VideogamesService,
              private companyService: CompanyService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      title: ['',Validators.required],
      stock: ['', Validators.required],
      companyId: [''],
      releaseDate: ['',Validators.required],
      platform: ['', Validators.required],
      price: ['', Validators.required]

      });
  }

  public async crearVideojuego() {
    this.videogame = this.formGroup.value;
    const resp = await this.videogameService.createVideogame(this.videogame);
    if(resp) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El juego se guardo correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  get companies() {
    return this.companyService.Companies
  }

}
