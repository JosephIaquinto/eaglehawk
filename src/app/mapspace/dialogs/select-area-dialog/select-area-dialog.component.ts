import { MapspaceArea } from './../../../shared/models/mapspace-area';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectAreaDialogData } from './select-area-dialog-data';

@Component({
  selector: 'eh-select-area-dialog',
  templateUrl: './select-area-dialog.component.html',
  styleUrls: ['./select-area-dialog.component.scss']
})
export class SelectAreaDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SelectAreaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectAreaDialogData
  ) {}

  ngOnInit() {}

  compareAreas(a1: MapspaceArea, a2: MapspaceArea): boolean {
    return a1 && a2 ? a1.name === a2.name : a1 === a2;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
