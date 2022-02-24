import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, first, takeUntil, tap } from 'rxjs/operators';


import { IProduct } from '@app/core/models';
import { AppState } from '@app/core/states/app.state';
import { selectProductById } from '@app/core/store/selectors';
import * as Actions from '@app/core/store/actions';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy  {
  // to destroy all subscriptions
  private destroy$: Subject<void> = new Subject<void>();
  
  public product$?: Observable<IProduct | undefined>;

  constructor(private store: Store<AppState>,
    private activatedRoute: ActivatedRoute) { 
      
    }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.params.id;
    this.product$ = this.store
    .pipe(
      takeUntil(this.destroy$),
      select(selectProductById(productId)),
      tap(product => {
        if (!product) {
          this.store.dispatch(Actions.GetProduct({productId}));
        }
      }),
      filter(product => !!product),
      first()
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
