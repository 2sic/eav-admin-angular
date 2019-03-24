import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryRestComponent } from './query.component';

describe('QueryRestComponent', () => {
  let component: QueryRestComponent;
  let fixture: ComponentFixture<QueryRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
