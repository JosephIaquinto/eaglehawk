import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule]
})
export class MaterialModule {}
