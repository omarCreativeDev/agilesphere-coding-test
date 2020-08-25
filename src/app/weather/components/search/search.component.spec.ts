import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Search } from '../../store/actions/weather';
import { SearchComponent } from './search.component';

class MockStore {
  public dispatch(): void {}
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ReactiveFormsModule],
      providers: [{ provide: Store, useClass: MockStore }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke `setupForm()` onInit', () => {
    spyOn(component, 'setupForm');
    component.ngOnInit();
    expect(component.setupForm).toHaveBeenCalled();
  });

  it('should setup form with default value', () => {
    component.setupForm();
    expect(component.formGroup.get('searchQuery').value).toBeNull();
  });

  it('form should be valid if a search query is entered', () => {
    component.setupForm();
    component.formGroup.get('searchQuery').patchValue('London');
    expect(component.formGroup.valid).toBeTruthy();
  });

  it('form should be invalid if a search query is empty', () => {
    component.setupForm();
    component.formGroup.get('searchQuery').patchValue('');
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('should dispatch `Search` action if valid form is submitted', () => {
    spyOn(store, 'dispatch');
    component.setupForm();
    component.formGroup.get('searchQuery').patchValue('Barcelona');
    component.onSubmit();
    expect(store.dispatch).toHaveBeenCalledWith(new Search('Barcelona'));
  });
});
