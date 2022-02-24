import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "@services/product.service";
import { ProductState } from '@app/core/states';
import { Store } from '@ngrx/store';
import { map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { FilterProducts, GetProduct, GetProductError, GetProductSuccess, LoadProducts, LoadProductsSuccess, SetProductFavorite, SetProductFavoriteError, SetProductFavoriteSuccess } from '../actions';
import { selectProductAll } from "../selectors";
import { IProduct } from "@app/core/models";
import { SORT_TYPE_ENUM } from "@app/core/enums/sort-type.enum";
import { of } from "rxjs";


@Injectable()
export class ProductEffect {

  constructor(private _action: Actions,
              private _productService: ProductService,
              private _store: Store<ProductState>) {
  }

  loadProducts$ = createEffect(() => {
    return this._action
      .pipe(
        ofType(LoadProducts),
        mergeMap((action) => {
          return this._productService.list()
          .pipe(
            map((products)=> {
              return LoadProductsSuccess({ products })
            }),
          )
        })
      );
  });

  getProduct$ = createEffect(() => {
    return this._action
      .pipe(
        ofType(GetProduct),
        mergeMap((action) => {
          return this._productService.list()
          .pipe(
            map(products => {
              const product = products.find(p => p.id === action.productId); 
              if (product)
                return GetProductSuccess({ product : product });
              else 
                return GetProductError();  
            })
          )
        })
        );
    });
    
  setProductFavorite$ = createEffect(() => {
      return this._action
        .pipe(
          ofType(SetProductFavorite),
          withLatestFrom(this._store.select(selectProductAll)),
          mergeMap(([action, products]) => {
            return of(products)
            .pipe(
              map(products => {
                const product = products.find(p => p.id === action.productId); 
               
                if(product) {
                  return SetProductFavoriteSuccess({ product : { ...product, favorite : action.favorite }, favorite: action.favorite });
                } 
                else 
                  return SetProductFavoriteError();   
              })
            )
          })
            
          );
      });  

  filterProducts$ = createEffect(() => {
    return this._action
      .pipe(
        ofType(FilterProducts),
        mergeMap((action) => {
          return this._productService.list()
          .pipe(
            tap(products => products.sort((a: IProduct, b: IProduct) => {
              switch(action.sortBy) {
                case SORT_TYPE_ENUM.NAME : {
                  return a.name.localeCompare(b.name); 
                }
                case SORT_TYPE_ENUM.PRICE: { 
                  return a.price - b.price ; 
                }
             
                case SORT_TYPE_ENUM.RATING: {
                  return a.rating - b.rating; 
                }
                default:
                  return a.name.localeCompare(b.name); 
              }  
            })),
            map((products) => {
              if(action.query)
                 products = products.filter(p => p.name.toLowerCase().indexOf(action.query!.toLowerCase()) >= 0)   
              return LoadProductsSuccess({ products : products })
            })
          )
        })
      );
  });
 
}
