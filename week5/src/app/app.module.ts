import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import {AlertModule} from "ng2-bootstrap/alert";
import { ProductService} from "./shared/product.service";
import {ProductFilterPipe} from './shared/filter.pipes';


export const appRoutes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "products/:productId", component: ProductDetailsComponent },
  { path: "", redirectTo: "/product/product-wise", pathMatch: "full" },
]


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductDetailsComponent,
      ProductFilterPipe,
  ],
  providers: [ProductService,ProductFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
