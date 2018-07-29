import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { BoolPipe } from './utility/bool.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

import { UserLoginComponent } from './user/user-login/user-login.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

import { PurchaseRequestListComponent } from './purchase-request/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestCreateComponent } from './purchase-request/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestEditComponent } from './purchase-request/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestDetailComponent } from './purchase-request/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestLinesComponent } from './purchase-request/purchase-request-lines/purchase-request-lines.component';
import { PurchaseRequestReviewComponent } from './purchase-request/purchase-request-review/purchase-request-review.component';

import { PurchaseRequestLineitemCreateComponent } from './purchase-request-lineitem/purchase-request-lineitem-create/purchase-request-lineitem-create.component';
import { PurchaseRequestLineitemDetailComponent } from './purchase-request-lineitem/purchase-request-lineitem-detail/purchase-request-lineitem-detail.component';
import { PurchaseRequestLineitemEditComponent } from './purchase-request-lineitem/purchase-request-lineitem-edit/purchase-request-lineitem-edit.component';
import { PurchaseRequestLineitemListComponent } from './purchase-request-lineitem/purchase-request-lineitem-list/purchase-request-lineitem-list.component';
import { PurchaseRequestLineitemReviewComponent } from './purchase-request-lineitem/purchase-request-lineitem-review/purchase-request-lineitem-review.component';
import { VendorPurchaseOrderComponent } from './vendor/vendor-purchase-order/vendor-purchase-order.component';
import { SortPipe } from './utility/sort.pipe';
import { SearchProductPipe } from './utility/search-product.pipe';
import { SearchUserPipe } from './utility/search-user.pipe';
import { SearchVendorPipe } from './utility/search-vendor.pipe';
import { SearchPurchaseRequestPipe } from './utility/search-purchase-request.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    MenuItemComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,
    BoolPipe,
    UserCreateComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    PurchaseRequestListComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestLineitemCreateComponent,
    PurchaseRequestLineitemDetailComponent,
    PurchaseRequestLineitemEditComponent,
    PurchaseRequestLineitemListComponent,
    PurchaseRequestLinesComponent,
    PurchaseRequestReviewComponent,
    PurchaseRequestLineitemReviewComponent,
    VendorPurchaseOrderComponent,
    SortPipe,
    SearchProductPipe,
    SearchUserPipe,
    SearchVendorPipe,
    SearchPurchaseRequestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }