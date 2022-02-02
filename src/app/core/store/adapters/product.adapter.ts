import {createEntityAdapter} from "@ngrx/entity";
import {IProduct} from "@core/models";

export const productAdapter = createEntityAdapter<IProduct>({
  sortComparer: false
})

export const {
  selectIds: selectProductIds,
  selectEntities: selectProductEntities,
  selectAll: selectProductAll,
  selectTotal: selectProductCount
} = productAdapter.getSelectors();
