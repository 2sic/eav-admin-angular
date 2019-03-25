import { environment } from './../environments/environment';
import { LibraryModule } from './library/library.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/app-routing.module';
import { DebugComponent } from './debug/debug/debug.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogModule } from './dialog/dialog.module';
import { HttpClientModule } from '@angular/common/http';
import { DnnInterceptor, DevContext } from '@2sic.com/dnn-sxc-angular';
import { DnnDevSettings } from './dev/dnn-dev-settings';

const providers: Provider[] = [
  DnnInterceptor
];

if (!environment.production) {
  providers.push({ provide: DevContext, useValue: DnnDevSettings });
}

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
    HttpClientModule,
    MatDialogModule,
    MaterialModule,
    LibraryModule
  ],
  entryComponents: [],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

