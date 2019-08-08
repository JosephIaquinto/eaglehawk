import { MapspaceService } from './../mapspace.service';
import { MapspaceArea } from '../../shared/models/mapspace-area';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eh-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  constructor(public mapspaceService: MapspaceService) {}

  compareAreas(a1: MapspaceArea, a2: MapspaceArea): boolean {
    return a1 && a2 ? a1.name === a2.name : a1 === a2;
  }

  ngOnInit() {}

  addFeature() {
    this.mapspaceService.addFeatureEvent.emit();
  }
}
