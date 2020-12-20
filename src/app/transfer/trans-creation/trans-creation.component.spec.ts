import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransCreationComponent } from './trans-creation.component';

describe('TransCreationComponent', () => {
  let component: TransCreationComponent;
  let fixture: ComponentFixture<TransCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
