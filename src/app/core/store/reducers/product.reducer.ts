import {ProductState} from "@core/states";
import {productAdapter} from "@core/store/adapters";
import {createReducer, on} from "@ngrx/store";
import * as fromProductAction from "@core/store/actions/product.action";

const INITIAL_STATE: ProductState = productAdapter.getInitialState({
  initialized: false,
  query: '',
  sortBy: undefined
})

export const productReducer = createReducer(
  INITIAL_STATE,
  //TODO : Add state change function
  on(
    fromProductAction.ClearProducts,
    (_) => ({
      ...INITIAL_STATE
    })
  )
);

