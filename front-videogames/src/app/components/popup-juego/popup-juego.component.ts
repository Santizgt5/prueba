import { Component, OnInit } from '@angular/core';
import { MatDialogRef, _closeDialogVia } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-juego',
  templateUrl: './popup-juego.component.html',
  styleUrls: ['./popup-juego.component.css']
})
export class PopupJuegoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupJuegoComponent>) { }

  ngOnInit(): void {

  }

  closeDialog() {
    this.dialogRef.close();
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}

interface Food {
  value: string;
  viewValue: string;
}
