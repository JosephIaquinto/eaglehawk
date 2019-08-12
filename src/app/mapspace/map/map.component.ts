import { SelectAreaDialogData } from './../dialogs/select-area-dialog/select-area-dialog-data';
import { Feature, Polygon, Point } from 'geojson';
import { MapspaceFeature } from './../../shared/models/mapspace-feature';
import { MapspaceService } from './../mapspace.service';
import { Component, OnInit, ViewChild, AfterViewInit, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import { take } from 'rxjs/operators';
import { MapComponent } from 'ngx-mapbox-gl';
import * as turf from '@turf/turf';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectAreaDialogComponent } from '../dialogs/select-area-dialog/select-area-dialog.component';
import { Subscription } from 'rxjs';
import { GeoJSONSource, GeoJSONSourceRaw, LngLatLike } from 'mapbox-gl';

@Component({
  selector: 'eh-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapspaceMapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('map', { static: false }) map: MapComponent;

  draw: MapboxDraw;
  private addFeatureSubscription: Subscription;
  private zoomToFeatureSubscription: Subscription;
  private removeFeatureSubscription: Subscription;

  constructor(
    public mapspaceService: MapspaceService,
    public dialog: MatDialog,
    public ngZone: NgZone,
    public cdr: ChangeDetectorRef
  ) {
    this.addFeatureSubscription = this.mapspaceService.addFeatureEvent.subscribe(() => {
      this.draw.changeMode('draw_polygon');
    });
    this.zoomToFeatureSubscription = this.mapspaceService.zoomToFeatureEvent.subscribe(feature => {
      this.zoomToFeature(feature);
    });
    this.removeFeatureSubscription = this.mapspaceService.removeFeatureEvent.subscribe(feature => {
      this.removeFeature(feature);
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

  ngOnDestroy() {
    this.addFeatureSubscription.unsubscribe();
    this.zoomToFeatureSubscription.unsubscribe();
    this.removeFeatureSubscription.unsubscribe();
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
      if (area == null) {
        return;
      }

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

  zoomToFeature(feature: MapspaceFeature): void {
    const source = feature.layer.source as GeoJSONSourceRaw;
    const data = source.data as Feature<Polygon>;

    const coordinates = turf.polygon(data.geometry.coordinates);
    const centroid: Feature<Point> = turf.centroid(coordinates);
    const center = centroid.geometry.coordinates as LngLatLike;

    this.map.mapInstance.flyTo({
      center,
      zoom: 19,
      bearing: 0,
      pitch: 0
    });
  }

  removeFeature(feature: MapspaceFeature): void | boolean {
    for (const a of this.mapspaceService.areas) {
      for (const f of a.features) {
        if (feature === f) {
          const index = a.features.indexOf(feature);
          a.features.splice(index, 1);
          return;
        }
      }
    }
  }
}
