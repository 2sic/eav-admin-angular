import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestQueryComponent } from './query.component';

describe('QueryRestComponent', () => {
  let component: RestQueryComponent;
  let fixture: ComponentFixture<RestQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
