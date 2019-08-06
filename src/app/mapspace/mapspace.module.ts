import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { MaterialModule } from './../shared/material/material.module';
import { MapspaceRoutingModule } from './mapspace-routing.module';
import { MapspaceComponent } from './mapspace.component';
import { MapComponent } from './map/map.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [MapspaceComponent, MapComponent, PanelComponent],
  imports: [
    CommonModule,
    MapspaceRoutingModule,
    MaterialModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoidHZvcnBhaGwiLCJhIjoiY2p3N3p1bGZtMmtsNjQzcXY2NTMzbDJnYiJ9.LK87vxoB2GaHvWlp_ZU7yw'
    })
  ]
})
export class MapspaceModule {}
