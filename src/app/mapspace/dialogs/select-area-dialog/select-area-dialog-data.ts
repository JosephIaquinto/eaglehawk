import { MapspaceArea } from './../../../shared/models/mapspace-area';

export interface SelectAreaDialogData {
  areas: MapspaceArea[];
  selectedArea: MapspaceArea;
  featureName: string;
  status: string;
}
