import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAreaDialogComponent } from './select-area-dialog.component';

describe('SelectAreaDialogComponent', () => {
  let component: SelectAreaDialogComponent;
  let fixture: ComponentFixture<SelectAreaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAreaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAreaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
