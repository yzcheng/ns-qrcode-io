import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkgMgrComponent } from './pkg-mgr.component';

describe('PkgMgrComponent', () => {
  let component: PkgMgrComponent;
  let fixture: ComponentFixture<PkgMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkgMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
