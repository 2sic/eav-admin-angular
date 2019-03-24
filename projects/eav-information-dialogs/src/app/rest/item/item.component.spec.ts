import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestItemComponent } from './item.component';

describe('ItemRestComponent', () => {
  let component: RestItemComponent;
  let fixture: ComponentFixture<RestItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
