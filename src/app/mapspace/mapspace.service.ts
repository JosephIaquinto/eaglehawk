import { Injectable, EventEmitter } from '@angular/core';
import { MapspaceArea } from '../shared/models/mapspace-area';
import { MapspaceFeature } from '../shared/models/mapspace-feature';

@Injectable({
  providedIn: 'root'
})
export class MapspaceService {
  areas: MapspaceArea[];
  selectedArea: MapspaceArea;

  public addFeatureEvent: EventEmitter<void> = new EventEmitter();
  public zoomToFeatureEvent: EventEmitter<MapspaceFeature> = new EventEmitter();
  public removeFeatureEvent: EventEmitter<MapspaceFeature> = new EventEmitter();

  constructor() {
    this.areas = [
      {
        name: 'Rich Products Corporation',
        features: []
      }
    ];
    this.selectedArea = this.areas[0];
  }
}
