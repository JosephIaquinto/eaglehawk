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
  MatDialogModule,
  MatMenuModule
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
    MatInputModule,
    MatMenuModule
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
    MatInputModule,
    MatMenuModule
  ]
})
export class MaterialModule {}
