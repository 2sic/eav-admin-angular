import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { take } from 'rxjs/operators';
import { HelpPopupComponent } from '../help-popup/help-popup.component';
import { SelectorData } from './selector-data';

@Component({
  selector: 'app-selector-observable',
  templateUrl: './selector-observable.component.html',
  styleUrls: ['./selector-observable.component.css']
})
export class SelectorObservableComponent implements OnInit {

  @Input() label: string;
  @Input() items: SelectorData[];

  /** currently selected scenario */
  current$: BehaviorSubject<SelectorData>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.current$ = new BehaviorSubject<SelectorData>(this.items[0]);
  }

  selectCurrent(key: string): void {
    this.current$.next(this.items.find(as => as.key === key));
  }

  showHelp(): void {
    this.current$.pipe(take(1)).subscribe(scenario => {
      this.dialog.open(HelpPopupComponent, {
        width: '500px',
        data: {name: scenario.name, body: scenario.description, notes: scenario.notes }
      });
    });
  }

}
