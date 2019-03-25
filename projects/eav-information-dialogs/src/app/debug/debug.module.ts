import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugRoutingModule } from './debug-routing.module';
import { DebugComponent } from './debug/debug.component';

@NgModule({
  declarations: [
    DebugComponent
  ],
  imports: [
    CommonModule,
    DebugRoutingModule,
    MaterialModule
  ]
})
export class DebugModule { }
