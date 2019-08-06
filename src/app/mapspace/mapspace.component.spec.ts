import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapspaceComponent } from './mapspace.component';

describe('MapspaceComponent', () => {
  let component: MapspaceComponent;
  let fixture: ComponentFixture<MapspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
