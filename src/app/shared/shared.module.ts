import {NgModule} from "@angular/core";
import {CardProductComponent} from "@shared/components/card-product/card-product.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {ToolbarSearchComponent} from './components/toolbar-search/toolbar-search.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import { RatingProductComponent } from './components/rating-product/rating-product.component';

const COMPONENTS: any[] = [
  CardProductComponent,
  ToolbarSearchComponent,
  RatingProductComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    // Material
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: []
})
export class SharedModule {
}
