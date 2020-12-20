import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransViewComponent } from './trans-view.component';

describe('TransViewComponent', () => {
  let component: TransViewComponent;
  let fixture: ComponentFixture<TransViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
