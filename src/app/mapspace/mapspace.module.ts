import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../shared/material/material.module';
import { MapspaceRoutingModule } from './mapspace-routing.module';
import { MapspaceComponent } from './mapspace.component';
import { MapspaceMapComponent } from './map/map.component';
import { PanelComponent } from './panel/panel.component';
import { SelectAreaDialogComponent } from './dialogs/select-area-dialog/select-area-dialog.component';

@NgModule({
  declarations: [MapspaceComponent, MapspaceMapComponent, PanelComponent, SelectAreaDialogComponent],
  imports: [
    FormsModule,
    CommonModule,
    MapspaceRoutingModule,
    MaterialModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoidHZvcnBhaGwiLCJhIjoiY2p3N3p1bGZtMmtsNjQzcXY2NTMzbDJnYiJ9.LK87vxoB2GaHvWlp_ZU7yw'
    })
  ],
  entryComponents: [SelectAreaDialogComponent]
})
export class MapspaceModule {}
