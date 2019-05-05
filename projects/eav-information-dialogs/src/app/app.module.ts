import { LibraryModule } from './library/library.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/app-routing.module';
import { DialogComponent } from './dialog/dialog.component';
import { DialogModule } from './dialog/dialog.module';
import { HttpClientModule } from '@angular/common/http';
import { SourceEditorModule } from './source-editor/source-editor.module';
import { addDnnProviders } from './integration/providers';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DialogModule,
    HttpClientModule,
    MatDialogModule,
    MaterialModule,
    LibraryModule,
    SourceEditorModule
  ],
  entryComponents: [],
  providers: addDnnProviders([]),
  bootstrap: [AppComponent]
})
export class AppModule { }

