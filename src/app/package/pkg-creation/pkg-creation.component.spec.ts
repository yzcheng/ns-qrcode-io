import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkgCreationComponent } from './pkg-creation.component';

describe('PkgCreationComponent', () => {
  let component: PkgCreationComponent;
  let fixture: ComponentFixture<PkgCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkgCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
