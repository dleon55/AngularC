import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirm-del',
  templateUrl: './confirm-del.component.html',
  styles: [],
})
export class ConfirmDelComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ConfirmDelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe
  ) {}

  ngOnInit(): void {}
  borrar() {
    this.dialogRef.close(true);
  }
  cancelar() {
    this.dialogRef.close();
  }
}
