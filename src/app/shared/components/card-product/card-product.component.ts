import {Component, Input, OnInit} from '@angular/core';
import { AppState } from '@app/core/states/app.state';
import {IProduct} from "@core/models";
import { Store } from '@ngrx/store';


import * as Actions from 'src/app/core/store/actions';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input()
  public product?:IProduct;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleFavorite(event: any) {
    this.store.dispatch(Actions.SetProductFavorite({ productId: this.product?.id , favorite:  !this.product?.favorite}));
  }

}
