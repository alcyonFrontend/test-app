import {NgModule} from "@angular/core";
import {CardProductComponent} from "@shared/components/card-product/card-product.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

const COMPONENTS: any[] = [
  CardProductComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: []
})
export class SharedModule {
}
