import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMgrComponent } from './order-mgr.component';

describe('OrderMgrComponent', () => {
  let component: OrderMgrComponent;
  let fixture: ComponentFixture<OrderMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
