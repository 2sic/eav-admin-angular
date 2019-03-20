import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTypeRestComponent } from './content-type-rest.component';

describe('ContentTypeRestComponent', () => {
  let component: ContentTypeRestComponent;
  let fixture: ComponentFixture<ContentTypeRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTypeRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTypeRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
