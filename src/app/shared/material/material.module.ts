import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialModule {}
