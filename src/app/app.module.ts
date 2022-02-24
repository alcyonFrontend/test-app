import {LOCALE_ID, NgModule} from '@angular/core';
import localFr from '@angular/common/locales/fr';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { ProductComponent } from './pages/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "@shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {registerLocaleData} from "@angular/common";
import {RouterModule} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffect} from "@core/store/effects";
import {StoreModule} from "@ngrx/store";
import {reducers} from "@core/store/app.reducer";
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ProductEffect
    ]),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
