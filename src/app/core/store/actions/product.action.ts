import {AppStateEnum} from "@core/states/app.state";
import {createAction, props} from "@ngrx/store";
import {SORT_TYPE_ENUM} from "@core/enums/sort-type.enum";
import { IProduct } from "@app/core/models";

export const LoadProducts = createAction(
  `[${AppStateEnum.PRODUCT}] Load products`
);

export const LoadProductsSuccess = createAction(
  `[${AppStateEnum.PRODUCT}] Load products success`,
  props<{ products: IProduct[] }>()
);

export const LoadProductsError = createAction(
  `[${AppStateEnum.PRODUCT}] Load products error`
);

export const FilterProducts = createAction(
  `[${AppStateEnum.PRODUCT}] Filter products`,
  props<{ query?: string, sortBy?: SORT_TYPE_ENUM }>(),
);

export const ClearProducts = createAction(
  `[${AppStateEnum.PRODUCT}] Clear products`
);

export const GetProduct = createAction(
  `[${AppStateEnum.PRODUCT}] get product by id`,
  props<{ productId?: string }>(),
);

export const GetProductSuccess = createAction(
  `[${AppStateEnum.PRODUCT}] get product success`,
  props<{ product: IProduct }>()
);

export const GetProductError = createAction(
  `[${AppStateEnum.PRODUCT}] get product error`
);

export const SetProductFavorite = createAction(
  `[${AppStateEnum.PRODUCT}] set product favorite`,
  props<{ productId?: string, favorite: boolean }>(),
);

export const SetProductFavoriteSuccess = createAction(
  `[${AppStateEnum.PRODUCT}] set product favorite success`,
  props<{ product: IProduct, favorite: boolean }>()
);

export const SetProductFavoriteError = createAction(
  `[${AppStateEnum.PRODUCT}] set product favorite error`
);

// TODO: Add more selectors if needed
