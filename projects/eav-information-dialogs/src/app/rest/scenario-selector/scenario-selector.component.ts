import { Component, OnInit } from '@angular/core';
import { AccessScenarios } from '../access-scenarios';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { take } from 'rxjs/operators';
import { HelpPopupComponent } from '../../help-popup/help-popup.component';

@Component({
  selector: 'app-scenario-selector',
  templateUrl: './scenario-selector.component.html',
  styleUrls: ['./scenario-selector.component.css']
})
export class ScenarioSelectorComponent implements OnInit {

  /** list of all known scenarios */
  scenarios = AccessScenarios;

  /** currently selected scenario */
  current$ = new BehaviorSubject<AccessScenario>(AccessScenarios[0]);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  selectCurrent(key: string): void {
    this.current$.next(AccessScenarios.find(as => as.key === key));
  }

  showHelp(): void {
    this.current$.pipe(take(1)).subscribe(scenario => {
      this.dialog.open(HelpPopupComponent, {
        width: '500px',
        data: {name: scenario.label, body: scenario.description, notes: scenario.notes }
      });
    });
  }

}
