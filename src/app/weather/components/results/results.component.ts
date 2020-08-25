import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState, Summary } from '../../../model/weather';
import { getSummaries } from '../../store/selectors/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  public summaries$: Observable<Summary[]> = this.store.select(getSummaries);

  constructor(
    private store: Store<AppState>
  ) {}
}


