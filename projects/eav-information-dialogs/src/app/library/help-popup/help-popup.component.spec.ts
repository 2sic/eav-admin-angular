import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPopupDialog } from './help-popup.component';

describe('HelpPopupComponent', () => {
  let component: HelpPopupDialog;
  let fixture: ComponentFixture<HelpPopupDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpPopupDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPopupDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
