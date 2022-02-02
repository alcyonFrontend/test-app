import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "@core/models";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input()
  public product?:IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
