import {AppStateEnum} from "@core/states/app.state";
import {createAction, props} from "@ngrx/store";
import {SORT_TYPE_ENUM} from "@core/enums/sort-type.enum";

export const LoadProducts = createAction(
  `[${AppStateEnum.PRODUCT}] Load products`
);

export const LoadProductsSuccess = createAction(
  `[${AppStateEnum.PRODUCT}] Load products success`
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

// TODO: Add more selectors if needed
