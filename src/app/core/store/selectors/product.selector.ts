import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductState} from "@core/states";
import {AppStateEnum} from "@core/states/app.state";
import * as fromProductAdapter from "@core/store/adapters/product.adapter";

export const getProductState = createFeatureSelector<ProductState>(AppStateEnum.PRODUCT);

export const selectProductIds = createSelector(
  getProductState,
  fromProductAdapter.selectProductIds
);

export const selectProductAll = createSelector(
  getProductState,
  fromProductAdapter.selectProductAll
);

export const selectProductEntities = createSelector(
  getProductState,
  fromProductAdapter.selectProductEntities
);

export const selectProductCount = createSelector(
  getProductState,
  fromProductAdapter.selectProductCount
);

export const selectInitialized = createSelector(
  getProductState,
  (state: ProductState) : boolean => state && state.initialized
);

export const selectQuery = createSelector(
  getProductState,
  (state: ProductState) => state && state.query
);

export const selectSortBy = createSelector(
  getProductState,
  (state: ProductState) => state && state.sortBy
);

// TODO: Add more selectors if needed
