import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestContentTypeComponent } from './content-type.component';

describe('ContentTypeRestComponent', () => {
  let component: RestContentTypeComponent;
  let fixture: ComponentFixture<RestContentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestContentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestContentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
