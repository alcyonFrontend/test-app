import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {ProductService} from "@services/product.service";

@Injectable()
export class ProductEffect {

  constructor(private _action: Actions,
              private _productService: ProductService) {
  }

  // TODO: Add effects by actions

}
