import { MiniPartsModule } from './mini-parts/mini-parts.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/app-routing.module';
import { DebugComponent } from './debug/debug/debug.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogModule } from './dialog/dialog.module';
import { HelpPopupComponent } from './help-popup/help-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    DebugComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DialogModule,
    MatDialogModule,
    MaterialModule,
    MiniPartsModule
  ],
  entryComponents: [HelpPopupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
