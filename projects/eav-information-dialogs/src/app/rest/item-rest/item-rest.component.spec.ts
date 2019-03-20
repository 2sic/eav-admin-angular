import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRestComponent } from './item-rest.component';

describe('ItemRestComponent', () => {
  let component: ItemRestComponent;
  let fixture: ComponentFixture<ItemRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
