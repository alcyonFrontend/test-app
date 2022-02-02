import {AppState} from "@core/states/app.state";
import {ActionReducerMap} from "@ngrx/store";
import {productReducer} from "@core/store/reducers";

export const reducers : ActionReducerMap<AppState> = {
  product: productReducer
}
