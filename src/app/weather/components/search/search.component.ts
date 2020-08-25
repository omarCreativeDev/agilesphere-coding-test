import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../model/weather';
import { Search } from '../../store/actions/weather';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.setupForm();
  }

  public setupForm(): void {
    this.formGroup = new FormGroup({
      searchQuery: new FormControl(null, [Validators.required]),
    });
  }

  public onSubmit() {
    if (this.formGroup.valid) {
      this.store.dispatch(new Search(this.formGroup.value.searchQuery));
    }
  }
}
