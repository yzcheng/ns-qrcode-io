import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkgViewComponent } from './pkg-view.component';

describe('PkgViewComponent', () => {
  let component: PkgViewComponent;
  let fixture: ComponentFixture<PkgViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkgViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
