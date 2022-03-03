import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Company, Convert } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-popup-company',
  templateUrl: './popup-company.component.html',
  styleUrls: ['./popup-company.component.css']
})
export class PopupCompanyComponent implements OnInit {

  public formGroup: FormGroup;
  private company: Company;

  constructor(public dialogRef: MatDialogRef<PopupCompanyComponent>,
              private formBuilder: FormBuilder,
              private companyService: CompanyService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: ['',Validators.required],
      description: ['', Validators.required],
      born: [''],
      nit: ['',Validators.required],
      });
  }

  async crearDeveloper() {
    this.company = this.formGroup.value;
    const resp = await this.companyService.createCompany(this.company);
    if(resp) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La desarrolladora se guardo correctamente',
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
