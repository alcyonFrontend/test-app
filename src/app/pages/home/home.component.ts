import { Component, OnDestroy, OnInit } from '@angular/core';
import {IProduct} from "@core/models";
import {Observable, BehaviorSubject, combineLatest, Subject} from "rxjs";

import { Store } from '@ngrx/store';
import { AppState } from '@app/core/states/app.state';
import { selectProductAll } from '@app/core/store/selectors';
import * as Actions from 'src/app/core/store/actions';
import { SORT_TYPE_ENUM } from '@app/core/enums/sort-type.enum';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // to destroy all subscriptions
  private destroy$: Subject<void> = new Subject<void>();
 
  public products$?: Observable<IProduct[]>;

  private query$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private sort$: BehaviorSubject<SORT_TYPE_ENUM> = new BehaviorSubject<SORT_TYPE_ENUM>(SORT_TYPE_ENUM.RATING);


  constructor(
    private store: Store<AppState>) { 
      this.products$ = this.store.select(selectProductAll);
    }
  

  ngOnInit(): void {
    this.getProducts();
    
    combineLatest([ 
      this.query$,
      this.sort$
    ]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(([query,sort]) => this.store.dispatch(Actions.FilterProducts({query: query, sortBy: sort})));
    
  }

  getProducts() {
    this.store.dispatch(Actions.LoadProducts());
  }

  queryChanged(query: string) {
    this.query$.next(query);
  }

  sortChanged(sort: string) {
    this.sort$.next(sort as SORT_TYPE_ENUM);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
    this.query$.unsubscribe();
    this.sort$.unsubscribe();
  }
}
