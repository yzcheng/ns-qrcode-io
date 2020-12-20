import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransFeedbackComponent } from './trans-feedback.component';

describe('TransFeedbackComponent', () => {
  let component: TransFeedbackComponent;
  let fixture: ComponentFixture<TransFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
