import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransMgrComponent } from './trans-mgr.component';

describe('TransMgrComponent', () => {
  let component: TransMgrComponent;
  let fixture: ComponentFixture<TransMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
