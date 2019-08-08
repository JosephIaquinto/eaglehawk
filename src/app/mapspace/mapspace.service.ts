import { Injectable, EventEmitter } from '@angular/core';
import { MapspaceArea } from '../shared/models/mapspace-area';

@Injectable({
  providedIn: 'root'
})
export class MapspaceService {
  areas: MapspaceArea[];
  selectedArea: MapspaceArea;

  public addFeatureEvent: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.areas = [
      {
        name: 'Downtown Troy',
        features: []
      }
    ];
    this.selectedArea = this.areas[0];
  }
}
