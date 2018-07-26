import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorPurchaseOrderComponent } from './vendor/vendor-purchase-order/vendor-purchase-order.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

import { PurchaseRequestListComponent } from './purchase-request/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './purchase-request/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestEditComponent } from './purchase-request/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestCreateComponent } from './purchase-request/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestLinesComponent } from './purchase-request/purchase-request-lines/purchase-request-lines.component';
import { PurchaseRequestReviewComponent } from './purchase-request/purchase-request-review/purchase-request-review.component';

import { PurchaseRequestLineitemListComponent } from './purchase-request-lineitem/purchase-request-lineitem-list/purchase-request-lineitem-list.component';
import { PurchaseRequestLineitemDetailComponent } from './purchase-request-lineitem/purchase-request-lineitem-detail/purchase-request-lineitem-detail.component';
import { PurchaseRequestLineitemEditComponent } from './purchase-request-lineitem/purchase-request-lineitem-edit/purchase-request-lineitem-edit.component';
import { PurchaseRequestLineitemCreateComponent } from './purchase-request-lineitem/purchase-request-lineitem-create/purchase-request-lineitem-create.component';
import { PurchaseRequestLineitemReviewComponent } from './purchase-request-lineitem/purchase-request-lineitem-review/purchase-request-lineitem-review.component';


const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch:'full' },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },

{ path: 'users/list', component: UserListComponent},
{ path: 'users/detail/:id', component: UserDetailComponent},
{ path: 'users/edit/:id', component: UserEditComponent},
{ path: 'users/create', component: UserCreateComponent},
{ path: 'users/login', component: UserLoginComponent},

{ path: 'vendors/list', component: VendorListComponent},
{ path: 'vendors/detail/:id', component: VendorDetailComponent},
{ path: 'vendors/edit/:id', component: VendorEditComponent},
{ path: 'vendors/create', component: VendorCreateComponent},
{ path: 'vendors/purchaseorder/:id', component: VendorPurchaseOrderComponent},

{ path: 'products/list', component: ProductListComponent},
{ path: 'products/detail/:id', component: ProductDetailComponent},
{ path: 'products/edit/:id', component: ProductEditComponent},
{ path: 'products/create', component: ProductCreateComponent},

{ path: 'purchaserequests/list', component: PurchaseRequestListComponent},
{ path: 'purchaserequests/detail/:id', component: PurchaseRequestDetailComponent},
{ path: 'purchaserequests/edit/:id', component: PurchaseRequestEditComponent},
{ path: 'purchaserequests/create', component: PurchaseRequestCreateComponent},
{ path: 'purchaserequests/lineitems/:id', component: PurchaseRequestLinesComponent},
{ path: 'purchaserequests/review', component: PurchaseRequestReviewComponent},

{ path: 'purchaserequestlineitems/list', component: PurchaseRequestLineitemListComponent},
{ path: 'purchaserequestlineitems/detail/:id', component: PurchaseRequestLineitemDetailComponent},
{ path: 'purchaserequestlineitems/edit/:id', component: PurchaseRequestLineitemEditComponent},
{ path: 'purchaserequestlineitems/create/:id', component: PurchaseRequestLineitemCreateComponent},
{ path: 'purchaserequestlineitems/review/:id', component: PurchaseRequestLineitemReviewComponent},

{ path: '**', component: HomeComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
