import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorObservableComponent } from './selector-observable.component';

describe('ScenarioSelectorComponent', () => {
  let component: SelectorObservableComponent;
  let fixture: ComponentFixture<SelectorObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
