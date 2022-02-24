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
    fromProductAction.LoadProductsSuccess,
    (state, action) => {
      return productAdapter.setAll(action.products, {
        ...state,
        initialized: true
      }) 
     }
  ),
  on(
    fromProductAction.GetProductSuccess,
    (state, action) => {
      return productAdapter.addOne(action.product, {
        ...state
      }) 
     }
  ),
  on(
    fromProductAction.SetProductFavoriteSuccess,
    (state, action) => {
      return productAdapter.updateOne({id: action.product.id,  changes: action.product }, {
        ...state
      }) 
     }
  ),
  on(
    fromProductAction.ClearProducts,
    (_) => ({
      ...INITIAL_STATE
    })
  )
);