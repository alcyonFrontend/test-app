import * as States from '@core/states/index';

export interface AppState {
  product: States.ProductState
}

export enum AppStateEnum {
  PRODUCT = 'product'
}
