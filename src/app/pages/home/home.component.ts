import { Component, OnInit } from '@angular/core';
import {ProductService} from "@services/product.service";
import {IProduct} from "@core/models";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products$?: Observable<IProduct[]>;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this._productService.list();
  }

}
