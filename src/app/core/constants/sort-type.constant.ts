import {ISortType} from "@models/sort-type.model";
import {SORT_TYPE_ENUM} from "@core/enums/sort-type.enum";

export const SORT_TYPES : ISortType[] = [
  {
    key: SORT_TYPE_ENUM.NAME,
    label: 'Name'
  },
  {
    key: SORT_TYPE_ENUM.PRICE,
    label: 'Price'
  },
  {
    key: SORT_TYPE_ENUM.RATING,
    label: 'Rating'
  },
];
