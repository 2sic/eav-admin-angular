import { NgModule } from '@angular/core';
import { MatSelectModule,
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule,
  MatIconModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule} from '@angular/material';

const matModules = [
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
  ];

@NgModule({
  declarations: [],
  imports: matModules,
  exports: matModules
})
export class MaterialModule { }
