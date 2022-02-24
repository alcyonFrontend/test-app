import {IProduct} from "@core/models";
import {EntityState} from "@ngrx/entity";
import {SORT_TYPE_ENUM} from "@core/enums/sort-type.enum";

export interface ProductState extends EntityState<IProduct> {
  initialized: boolean;
  query?: string;
  sortBy?: SORT_TYPE_ENUM
}
