import { SelectAreaDialogData } from './../dialogs/select-area-dialog/select-area-dialog-data';
import { Feature } from 'geojson';
import { MapspaceFeature } from './../../shared/models/mapspace-feature';
import { MapspaceService } from './../mapspace.service';
import { Component, OnInit, ViewChild, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import { take } from 'rxjs/operators';
import { MapComponent } from 'ngx-mapbox-gl';
import * as turf from '@turf/turf';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectAreaDialogComponent } from '../dialogs/select-area-dialog/select-area-dialog.component';
import { Subscription } from 'rxjs';
import { GeoJSONSource, GeoJSONSourceRaw } from 'mapbox-gl';

@Component({
  selector: 'eh-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapspaceMapComponent implements OnInit, AfterViewInit {
  @ViewChild('map', { static: false }) map: MapComponent;

  draw: MapboxDraw;
  private addFeatureSubscription: Subscription;

  constructor(
    public mapspaceService: MapspaceService,
    public dialog: MatDialog,
    public ngZone: NgZone,
    public cdr: ChangeDetectorRef
  ) {
    this.addFeatureSubscription = this.mapspaceService.addFeatureEvent.subscribe(() => {
      this.draw.changeMode('draw_polygon');
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.draw = new MapboxDraw({ displayControlsDefault: false });
    this.map.load.pipe(take(1)).subscribe(() => {
      this.map.mapInstance.addControl(this.draw);
      this.map.mapInstance.on('draw.create', event => {
        this.ngZone.run(() => {
          this.openDialog(event.features[0]);
        });
      });
    });
  }

  openDialog(feature: Feature): void {
    const dialogRef = this.dialog.open(SelectAreaDialogComponent, {
      width: '250px',
      data: { areas: this.mapspaceService.areas }
    });

    dialogRef.afterClosed().subscribe((result: SelectAreaDialogData) => {
      this.draw.trash();

      const area = this.mapspaceService.areas.find(a => {
        return a.name === result.selectedArea.name;
      });

      const geoJsonLayerRaw: GeoJSONSourceRaw = {
        type: 'geojson',
        data: feature
      };

      const layer: mapboxgl.Layer = {
        id: String(feature.id),
        type: 'fill',
        source: geoJsonLayerRaw,
        paint: {
          'fill-color': 'red',
          'fill-opacity': 0.5
        }
      };

      // this.map.mapInstance.addLayer(layer);

      area.features.push({
        name: result.featureName,
        layer
      });
    });
  }
}
