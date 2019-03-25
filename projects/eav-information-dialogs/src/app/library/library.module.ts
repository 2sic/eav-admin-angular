import { MaterialModule } from '../material/material.module';
import { HelpPopupComponent } from './help-popup/help-popup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorObservableComponent } from './selector-observable/selector-observable.component';

@NgModule({
  declarations: [
    HelpPopupComponent,
    SelectorObservableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    HelpPopupComponent
  ],
  exports: [
    HelpPopupComponent,
    SelectorObservableComponent
  ]
})
export class LibraryModule { }
